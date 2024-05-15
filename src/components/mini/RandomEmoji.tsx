import { useState } from "react";
import Wrapper from "./Wrapper";

const emojis = [
  "😆",
  "😅",
  "🤣",
  "😂",
  "😀",
  "🤑",
  "🤨",
  "🙂",
  "😊",
  "😗",
  "😛",
  "😏",
  "🤥",
  "😴",
  "🥺",
  "😧",
  "😇",
  "😳",
  "🙃",
  "🥴",
  "🧐",
  "🤨",
  "😒",
  "🤔",
  "🤭",
  "🥰",
  "🤐",
  "👀",
  "🤔",
  "🤪",
  "🥲",
  "😃",
  "😁",
  "😬",
];

function RandomEmoji() {
  const [emoji, setEmoji] = useState("😆");
  return (
    <Wrapper className="h-[300px] flex justify-center items-center">
      <div
        onMouseOver={() => {
          setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
        }}
        className="text-7xl hover:grayscale hover:scale-125 transition-all duration-150"
      >
        {emoji}
      </div>
    </Wrapper>
  );
}
export default RandomEmoji;
