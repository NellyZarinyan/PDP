class Node<T> {
     value: T;
     next: Node<T> | null;
     constructor(value: T) {
         this.value = value;
         this.next = null; 
        } 
    }
export class LinkedList<T> {
     head: Node<T> | null;
     constructor() {
         this.head = null;
    }

    addElement(element: T): void { 
        const node = new Node(element);
        let tmp = this.head;
        if (this.head === null) {
             this.head = node; 
        } else {
             while (tmp?.next !== null) {
                tmp = tmp.next; 
            } tmp.next = node; 
        }
    }

    removeElement(element: T): void {
         let tmp = this.head;
         let tmpPrev: Node<T> | null = null;
         if (tmp !== null && tmp.value === element) {
            this.head = tmp.next; 
            return; 
        } while (tmp !== null && tmp.value !== element) {
             tmpPrev = tmp; tmp = tmp.next; 
            }
             if (tmp === null) {
                 console.log("Element not found in the list."); 
                 return; 
                } 
                if (tmpPrev !== null) { 
                    tmpPrev.next = tmp.next; 
                }
    }

    printList(): void {
        let tmp = this.head;
        while (tmp !== null) {
            console.log(tmp.value);
            tmp = tmp.next; 
        }
    }
} 