// Problem 8.4: Find if Path Exists in Grap

function validPath(n, edges, source, destination) {
  if (n === 1 && edges.length > 0) return false;

  let sourceInGraph = Number.NEGATIVE_INFINITY;
  let destinationInGraph = Number.NEGATIVE_INFINITY;
  let graph = Array(n)
    .fill(0)
    .map((arr) => Array());

  edges.forEach((edge) => {
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  });

  let queue = [];
  queue.push(0);
  if (source === 0) sourceInGraph = 0;
  if (destination === 0) destinationInGraph = 0;
  let discovered = Array(n).fill(0);
  discovered[0] = 1;
  while (queue.length) {
    let node = queue[0];
    queue.shift();
    if (source === node) sourceInGraph = node;
    if (destination === node) destinationInGraph = node;
    graph[node].forEach((vertex) => {
      if (discovered[vertex] === 0) {
        queue.push(vertex);
        discovered[vertex] = 1;
      }
    });
  }

  return sourceInGraph >= 0 && destinationInGraph >= 0;
}

console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
);

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
);
