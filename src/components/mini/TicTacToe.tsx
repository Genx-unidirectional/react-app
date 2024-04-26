import { useState } from "react";

//Here we want to revert back to previous moves so we make array of array where each interaction is saved in array
function TicTacToe() {
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);
  const [xTurn, setXTurn] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const currentArr = history[history.length - 1].slice(0);
  //   console.log(history);
  const jumpTo = (num: number) => {
    setHistory(history.splice(0, num));
  };
  const handleClick = (id: number) => {
    //in below we are assigning copy to the newArr if we assign history[history.length - 1] to newArr we are assigning exact address to it
    const newArr = history[history.length - 1].slice(0);
    if (newArr[id] || winner) {
      return;
    }
    if (xTurn) {
      newArr[id] = "X";
      setXTurn(false);
    } else {
      newArr[id] = "O";
      setXTurn(true);
    }
    setHistory([...history, newArr]);
    const xOrY = winningArr(newArr);
    if (xOrY) {
      setWinner(xOrY);
    }
  };
  const restart = () => {
    setHistory([Array(9).fill(null)]);
    setXTurn(false);
    setWinner(null);
  };
  return (
    <div className="lg:w-2/5 sm:w-1/2 w-4/5 bg-white text-black rounded-lg border border-white flex items-center ">
      <div className="flex flex-col items-center justify-between w-1/2 ">
        <div>
          {winner || history.length > 9 ? (
            <button
              onClick={restart}
              className="text-white rounded-lg bg-black p-[1px] text-sm"
            >
              Restart
            </button>
          ) : xTurn ? (
            <p>It's X's turn</p>
          ) : (
            <p>It's O's turn</p>
          )}
        </div>
        <div
          className=" grid grid-cols-3 
        gap-1 p-1 rounded-lg bg-orange-300"
        >
          {currentArr.map((item, idx) => {
            return (
              <Block
                key={idx}
                idx={idx}
                handleClick={handleClick}
                item={item}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-between flex-col items-center  w-1/2">
        <div>
          {winner ? <p>Winner is {winner}</p> : <p>Winner on the way</p>}
        </div>
        <div className=" flex w-full gap-3  flex-col h-40 rounded-lg items-center py-2 overflow-hidden bg-green-400  overflow-y-scroll">
          {history.map((item, idx) => {
            if (idx === 0) {
              return;
            }
            return (
              <button
                key={idx}
                className="text-sm bg-green-800  text-white font-bold py-2 rounded-lg shadow-lg shadow-green-800 w-[80%] mx-auto"
                onClick={() => jumpTo(idx)}
              >
                Hop on {idx}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default TicTacToe;

type BlockProps = {
  idx: number;
  item: string | null;
  handleClick: (id: number) => void;
};
const Block = ({ item, handleClick, idx }: BlockProps) => {
  return (
    <button
      onClick={() => handleClick(idx)}
      className="w-12 h-12 border border-b text-xl font-bold rounded-lg bg-white"
    >
      {item}
    </button>
  );
};

function winningArr(arr: (string | null)[]) {
  const winArrPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  for (let i = 0; i < winArrPatterns.length; i++) {
    const [a, b, c] = winArrPatterns[i];
    //the first check arr[a] is because we want the complete three elements the we check it
    if (arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
      return arr[a];
    }
  }
}
