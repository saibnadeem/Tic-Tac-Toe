import React from 'react';

const StatusMassage = ({ winner, current }) => {
  const noMoveLeft = current.board.every(el => el !== null);
  return (
    <div className="status-massage">
      {winner && (
        <>
          winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMoveLeft && (
        <>
          Next player is{' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : 'O'}
          </span>
        </>
      )}
      {!winner && noMoveLeft && (
        <>
          <span className="text-green"></span>Game
          <span className="text-orange"></span>Tied
        </>
      )}
    </div>
  );
};
export default StatusMassage;
