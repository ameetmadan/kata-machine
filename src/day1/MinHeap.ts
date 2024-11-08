export default class MinHeap {
    // used for insertion and deletion
    public length: number;
    private data: number[];
    constructor() {
        this.length = 0;
        this.data = [];
    }
    private parent(index: number): number {
        // parent index operation
        return Math.floor((index - 1) / 2);
    }
    private leftChild(index: number): number {
        return 2 * index + 1;
    }    
    private rightChild(index: number): number {
        return 2 * index + 2;
    }
    private swap(index1: number, index2: number): void {
        let temp = this.data[index1];
        this.data[index1] = this.data[index2];
        this.data[index2] = temp;
    }
    // get parent, get value, check if we are larger than parent, if so, swap
    private heapifyUp(index: number): void {
        let parent = this.parent(index);
        if (index === 0) {
            return;
        }
        if (this.data[parent] < this.data[index]) {
            return;
        }
        if (this.data[index] < this.data[parent]) {
            // swap
            this.swap(index, parent);
            this.heapifyUp(parent);
        }
    }
    private heapifyDown(index: number): void {
        let leftIdx = this.leftChild(index);
        let rightIdx = this.rightChild(index);
        if (index >= this.length) {
            return;
        }
        if (leftIdx >= this.length && rightIdx >= this.length) {
            return;
        }
        const leftValue = this.data[leftIdx];
        const rightValue = this.data[rightIdx];
        const currentValue = this.data[index];
        if (leftValue > rightValue && currentValue > rightValue) {
            this.swap(index, rightIdx);
            this.heapifyDown(rightIdx);
        } else if (leftValue < rightValue && currentValue > leftValue) {
            this.swap(index, leftIdx);
            this.heapifyDown(leftIdx);
        }
    }
    insert(value: number): void {
        // in a heap, the value is inserted at the end of the array
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number {
        if (this.length === 0) {
            return -1;
        }
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return this.data[0];
        }      
        // first reduce, then heapify
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return this.data[0];
    }
}