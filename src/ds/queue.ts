export class Queue<T> {
     lastIndex: number;
     capacity: number;
     queue: T[];
     constructor(capacity: number) {
          this.lastIndex = 0;
          this.capacity = capacity;
          this.queue = Array(capacity);
     };

     /**
      * Returns true or false depending on lastIndex
      * @returns true or false
      */
     isEmpty() {
          return !this.lastIndex;
     };

     /**
      * Returns true or false depending on lastIndex and capacity
      * @returns true or false
      */
     isQueueOverflow(): boolean {
          return (this.lastIndex == this.capacity);
     }

     /**
      * To add an element
      * @param element to add in queue
      * @returns an added element
      */
     enqueue(element: T): string {
          if (this.isQueueOverflow()) {
               return 'Queue is overflow'
          }
          this.queue[this.lastIndex++] = element;
          return `${element} was added to queue`;
     };

     /**
      * Removes an first added element
      * @returns removed element
      */
     dequeue(): string {
          if (this.isEmpty()) {
               return "Queue is empty. No item to remove.";
          };
          const removedElement = this.queue[0];
          const tmpQueue = new Array(this.capacity);
          for (let i = 0, j = 1; i < this.lastIndex; i++, j++) {
               tmpQueue[i] = this.queue[j];
          };
          this.queue = tmpQueue;
          this.lastIndex--;
          return `The first element -> ${removedElement} was removed from queue`;
     };

     /**
      * Returns firts element
      * @returns first elemnent
      */
     frontElement() {
          if (this.isEmpty())
               return "Queue is empty";
          return ` The front element is ${this.queue[0]}`;
     };

     /**
      * Returns an last element
      * @returns the last element
      */
     lastIndexElement() {
          if (this.isEmpty())
               return "Queue is empty";
          return ` The lastIndex element is ${this.queue[this.lastIndex]}`;
     };

     /**
      * Printing queue
      */
     printingQueue(): void {
          console.log('-----Printing queue-----');
          for (let i = 0; i < this.lastIndex; i++) {
               console.log(this.queue[i]);
          };
     };
} 