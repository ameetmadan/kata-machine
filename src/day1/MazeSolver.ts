const DIRECTIONS = [
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
];
function walk(maze: string[], wall: string, start: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    // Base case: off the map
    if (
      start.x < 0 ||
      start.x >= maze[0].length ||
      start.y < 0 ||
      start.y >= maze.length
    ) {
        return false;
    }
    // Are we on a wall?
    if (maze[start.y][start.x] === wall) {
        return false;
    }
    // Are we at the end?
    if (start.x === end.x && start.y === end.y) {
      path.push(end);
        return true;
    }
    if (seen[start.y][start.x]) {
        return false;
    }
    // Recursive case: try all four directions
    // pre
    path.push(start);
    // recurse
    for (let i = 0; i < DIRECTIONS.length; i++) {
        const direction = DIRECTIONS[i];
        const next = {
            x: start.x + direction.x,
            y: start.y + direction.y,
        };
        if (walk(maze, wall, next, end, seen, path)) {
            return true;
        }
    }
    // post
    path.pop();
    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[i].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);
    return path;
}