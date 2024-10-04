export default class DoublyLinkedList<T> {
    public length: number;
    private head?: ListNode<T>;
    private tail?: ListNode<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    // basically just assign the head to the new node
    prepend(item: T): void {
        const node = { value: item } as ListNode<T>;
        this.length++;
        // if head exists, make head point to the next node and set the prepended node to head
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    // traverse the list to find at which index the item has to be inserted
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error('Index out of bounds');
        } else if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }
        let curr = this.head;
        for (let i = 0; curr && i < idx - 1; i++) {
            curr = curr.next;
        }
        curr = curr?.next as ListNode<T>;
        const node = { value: item } as ListNode<T>;
        // sandwich in between the current node and the next node
        node.next = curr;
        curr.prev = node;
        // set prev of the to be inserted node to the current node
        node.prev = curr.prev;
        curr.prev.next = node;
        this.length++;
    }

    // opposite of prepend
    append(item: T): void {
        const node = { value: item } as ListNode<T>;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    // find the node before removing it
    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            // if we find the value, break
            if (curr.value === item) {
                break;
            }
            // otherwise keep scrolling
            curr = curr.next;
        }
        if (!curr) {
            return;
        }
        this.length--;
        if (this.length === 0) {
            this.head = this.tail = undefined;
            return item;
        }
        // hop over the deleted item
        if (curr.prev) {
            curr.prev = curr.next;
        }        
        if (curr.next) {
            curr.next = curr.prev;
        }
        if (curr === this.head) {
            this.head = curr.next;
        }        
        if (curr === this.tail) {
            this.tail = curr.next;
        }
        curr.prev = curr.next = undefined;
        return curr.value;
    }
    get(idx: number): T | undefined {
        for (let i = 0; i < this.length; i++) {
            if (i === idx) {
                return this.head?.value;
            }
            this.head = this.head?.next;
        }
        return;
    }
    removeAt(idx: number): T | undefined {
        return;
    }
}