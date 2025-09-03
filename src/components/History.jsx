export default function History({ history, setCurrentMove, setXIsNext }) {
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to the move # ${move}`;
    } else {
      description = `Start the Game`;
    }
    return (
      <li key={move}>
        <button className="mb-2" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  function jumpTo(move) {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  }
  return (
    <>
      <ol className="">{moves}</ol>
    </>
  );
}
