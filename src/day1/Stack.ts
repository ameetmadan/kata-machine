type SNode<T> = {
    value: T;
    prev?: SNode<T>;
    // no prev because single-linked list
}

export default class Stack<T> {
    public length: number;
    private head?: SNode<T>;
    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as SNode<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        } else {
            node.prev = this.head;
            this.head = node; 
        }
    }
    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        this.head = this.head.prev;
        return this.head?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}