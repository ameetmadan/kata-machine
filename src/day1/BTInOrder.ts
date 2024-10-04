function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  // Base case is undefined, which means we've reached the end of the tree
  if (!curr) return path;

  // for in order, we start at the left subtree, then the root, then the right subtree
  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);

  return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
  const path: number[] = [];
  walk(head, path);
  return path;
}