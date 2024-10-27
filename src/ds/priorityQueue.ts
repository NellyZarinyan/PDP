export class PriorityQueue {
  private queue: { element: string, priority: number }[] = [];

  // Enqueue an element with a given priority
  enqueue(element: string, priority: number): void {
      const queueElement = { element, priority };
      let added = false;

      for (let i = 0; i < this.queue.length; i++) {
          if (queueElement.priority < this.queue[i].priority) {
              this.queue.splice(i, 0, queueElement);
              added = true;
              break;
          }
      }

      if (!added) {
          this.queue.push(queueElement);
      }
  }

  // Dequeue the highest priority element
  dequeue() {
      return this.queue.shift()?.element;
  }

  // Peek at the highest priority element
  peek() {
      return this.queue[0]?.element;
  }

  // Check if the queue is empty
  isEmpty(): boolean {
      return this.queue.length === 0;
  }

  // Get the size of the queue
  size(): number {
      return this.queue.length;
  }

  print() {
    return this.queue;
  }

}
