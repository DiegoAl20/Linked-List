class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        if (this.head === null) {
            this.head = new Node(value);
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        current.next = new Node(value);
    }

    preappend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    size() {
        let numberNodes = 0;
        let current = this.head;

        while (current !== null) {
            numberNodes++;
            current = current.next;
        }

        return numberNodes;
    }

    headNode() {
        return this.head;
    }

    tail() {
        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        return current;
    }

    at(index) {
        if (index === 0) return this.head;

        let current = this.head.next;
        let indexNode = 1;
        while (current !== null) {
            if (indexNode === index) return current
            current = current.next;
            indexNode++;
        }

        return null;
    }

    pop() {
        if (this.head === null) {
            console.log("Empty List");
            return;
        }

        if (this.head.next === null) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }

        current.next = null;
    }

    contains(value) {
        let current = this.head;

        while (current !== null) {
            if (value === current.value) return true;
            current = current.next;
        }

        return false;
    }

    find(value) {
        let index = 0;
        let current = this.head;

        while (current !== null) {
            if (value === current.value) return index;
            index++;
            current = current.next;
        }

        return null;
    }

    toString() {
        let current = this.head;
        let list = "";
        while(current !== null) {
            list += `( ${current.value} ) -> `;
            current = current.next;
        }

        list += "null";
        return list;
    }

    traverse() {
        let current = this.head;
        while (current != null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());