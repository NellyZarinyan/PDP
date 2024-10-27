class PriorityQueue<T> {
  private nodes: { node: T; priority: number }[] = [];

  /**
   * Adds a node to the priority queue with a given priority.
   * @param node - The node to add to the queue.
   * @param priority - The priority of the node (lower values indicate higher priority).
   */
  enqueue(node: T, priority: number): void {
      this.nodes.push({ node, priority });
      this.nodes.sort((a, b) => a.priority - b.priority); // Sort by priority
  }

  /**
   * Removes and returns the node with the highest priority (lowest value).
   * @returns The node with the highest priority.
   */
  dequeue(): T {
      return this.nodes.shift()!.node; // Using non-null assertion since nodes should not be empty here
  }

  /**
   * Checks if the priority queue is empty.
   * @returns True if the queue is empty, false otherwise.
   */
  isEmpty(): boolean {
      return this.nodes.length === 0;
  }
}

// Type definition for the graph
type Graph = {
  [key: string]: { [key: string]: number }; // Adjacency list representation of the graph
};

// Type definition for the result of Dijkstra's algorithm
type DijkstraResult = {
  distances: { [key: string]: number }; // Shortest distances from the start node
  previous: { [key: string]: string | null }; // Previous nodes in the shortest path
};

/**
* Implements Dijkstra's algorithm to find the shortest paths from a start node to all other nodes.
* @param graph - The graph represented as an adjacency list.
* @param start - The starting node.
* @returns An object containing the shortest distances and previous nodes.
*/
function dijkstra(graph: Graph, start: string): DijkstraResult {
  const distances: { [key: string]: number } = {}; // Initialize distances to all nodes
  const previous: { [key: string]: string | null } = {}; // Initialize previous nodes
  const pq = new PriorityQueue<string>(); // Create a priority queue

  // Initialize distances and previous nodes
  for (const vertex in graph) {
      distances[vertex] = Infinity; // Set initial distances to infinity
      previous[vertex] = null; // Set initial previous nodes to null
  }
  distances[start] = 0; // Set distance from start to itself to 0

  // Start with the initial node
  pq.enqueue(start, 0); // Enqueue the start node with priority 0

  while (!pq.isEmpty()) {
      const currentNode = pq.dequeue(); // Get the node with the highest priority

      // Explore neighbors of the current node
      for (const neighbor in graph[currentNode]) {
          const distance = graph[currentNode][neighbor]; // Get the edge weight to the neighbor
          const newDistance = distances[currentNode] + distance; // Calculate new distance

          // Check if the newly calculated distance is shorter
          if (newDistance < distances[neighbor]) {
              distances[neighbor] = newDistance; // Update distance to the neighbor
              previous[neighbor] = currentNode; // Update the previous node
              pq.enqueue(neighbor, newDistance); // Enqueue the neighbor with the new distance
          }
      }
  }

  return { distances, previous }; // Return the final distances and previous nodes
}

// Example usage
const graph: Graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

// Run Dijkstra's algorithm from node 'A'
const result = dijkstra(graph, 'A');
console.log('Distances:', result.distances); // Log the shortest distances from 'A'
console.log('Previous nodes:', result.previous); // Log the previous nodes in the shortest path
