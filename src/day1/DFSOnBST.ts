export function search(curr: BinaryNode<number> | null, needle: number): boolean {
  if (!curr) return false;
  if (curr.value === needle) return true;
  if (curr.value > needle) return dfs(curr.left, needle);
  return dfs(curr.right, needle);
}
export default function dfs(head: BinaryNode<number> | null, needle: number): boolean {
  return search(head, needle);
}