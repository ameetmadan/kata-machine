export default function bfs(
  graph: WeightedAdjacencyMatrix, 
  source: number, 
  needle: number): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;
    const queue = [source];

    do {
      const current = queue.shift() as number;
      if (current === needle) {
        break;
      }

      for (let i = 0; i < graph.length; i++) {
        if (graph[current][i] === 0) {
          continue;
        }
        if (seen[i]) {
          continue;
        }
        if (graph[current][i] !== 0 && !seen[i]) {
          seen[i] = true;
          prev[i] = current;
          queue.push(i);
        }
      }
    } while (queue.length > 0);

    // build it backwards
    let current = needle;
    const out: number[] = [];
    while (current !== -1) {
      out.push(current);
      current = prev[current];
    }
}
