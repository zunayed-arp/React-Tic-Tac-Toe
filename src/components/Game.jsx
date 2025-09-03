import Board from "./Board";

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  return (
    <div>
      <div>
        <Board />
      </div>
      <div>
        <ol>{/*TBD */}</ol>
      </div>
    </div>
  );
}
