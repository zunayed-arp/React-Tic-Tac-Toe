export default function History({ history, setCurrentMove, setXIsNext }) {
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to the move # ${move}`;
    } else {
      description = `Start the Game`;
    }
    return (
      <li className="bg-gray-700 text-white mb-1 p-1 rounded-sm" key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  function jumpTo(move) {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  }
  return (
    <>
      <ol className="border border-gray-400 p-4">{moves}</ol>
    </>
  );
}
