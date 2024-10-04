function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  // Base case is undefined, which means we've reached the end of the tree
  if (!curr) return path;

  // for post order, we start at the left subtree, then the right subtree, then the root
  walk(curr.left, path);
  walk(curr.right, path);
  path.push(curr.value);

  return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
  const path: number[] = [];
  walk(head, path);
  return path;
}