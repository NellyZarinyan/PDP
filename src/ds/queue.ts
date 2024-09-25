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
      * @returns 
      */
     isEmpty() {
          return !this.lastIndex;
     };

     isQueueOverflow(): boolean {
          return (this.lastIndex == this.capacity);
     }


     enqueue(el: T): string {
          if (this.isQueueOverflow()) {
               return 'Queue is overflow'
          }
          this.queue[this.lastIndex++] = el;
          return `${el} was added to queue`;
     };

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

     frontElement() {
          if (this.isEmpty())
               return "Queue is empty";
          return ` The front element is ${this.queue[0]}`;
     };

     lastIndexElement() {
          if (this.isEmpty())
               return "Queue is empty";
          return ` The lastIndex element is ${this.queue[this.lastIndex]}`;
     };

     printingQueue(): void {
          console.log('-----Printing queue-----');
          for (let i = 0; i < this.lastIndex; i++) {
               console.log(this.queue[i]);
          };
     };
} 