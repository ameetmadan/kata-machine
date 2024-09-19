type QNode<T> = {
    value: T;
    next?: QNode<T>;
    // no prev because single-linked list
}

export default class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    enqueue(item: T): void {
        this.length++;
        if (!this.tail) {
            this.tail = this.head = { value: item } as QNode<T>;
        } else {
            this.tail.next = { value: item } as QNode<T>;
            this.tail = this.tail.next;
        }
    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const head = this.head;
        this.head = this.head.next;
        // in non garbage collected languages, we need to manually free the memory
        // head.next = undefined;
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}