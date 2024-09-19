export default function two_crystal_balls(breaks: boolean[]): number {
  // Define the jump distance as the square root of the number of breaks
  const jumpDistance = Math.floor(Math.sqrt(breaks.length));
  let i = jumpDistance;
  // Iterate over the array in sqrt(n) steps
  for (i; i < breaks.length; i += jumpDistance) {
    if (breaks[i]) {
      break;
    }
  }
  // Jump back to the previous index if the ball is not broken
  i -= jumpDistance;
  // Jump forward by sqrt(n) steps if the ball is broken
  for (let j = 0; j <= jumpDistance && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }
  // no match whatsoever
  return -1;
}