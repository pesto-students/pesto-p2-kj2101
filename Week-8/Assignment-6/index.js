// Problem 8.6: All Path from source to target

var allPathsSourceTarget = function (graph, path = [], index = 0, ans = []) {
  for (let i = 0; i < graph[index].length; i++)
    ans = allPathsSourceTarget(graph, [...path, index], graph[index][i], ans);

  if (index === graph.length - 1) ans.push([...path, index]);

  return ans;
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));

console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
