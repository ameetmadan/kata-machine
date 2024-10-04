function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  // Base case is undefined, which means we've reached the end of the tree
  if (!curr) return path;

  // first step, push the root node's value onto the path
  path.push(curr.value);
  // recursive step, walk the left subtree
  walk(curr.left, path);
  // recursive step, walk the right subtree
  walk(curr.right, path);
  // post step, pop the root node's value off the path
  return path;
}
export default function pre_order_search(head: BinaryNode<number>): number[] {
  const path: number[] = [];
  walk(head, path);
  return path;
}