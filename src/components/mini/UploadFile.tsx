import { useState } from "react";
import Wrapper from "./Wrapper";

function UploadFile() {
  const [src, setSrc] = useState("");
  console.log(src);
  return (
    <Wrapper className="h-[300px] relative flex justify-center items-center">
      <input
        type="file"
        name=""
        id="file"
        onChange={(e) => {
          setSrc(URL.createObjectURL(e.target.files?.[0]!));
        }}
        className="bg-black border border-black invisible text-white "
      />
      <label
        htmlFor="file"
        className="bg-black text-white rounded-lg cursor-pointer p-2"
      >
        Upload File
      </label>
      {src.length > 0 && (
        <img
          src={src}
          className="w-full absolute top top-0 left-0  h-full object-fill rounded-lg"
        />
      )}
      <button
        className="text-4xl absolute top-0 right-3 z-20 font-bold text-white"
        onClick={() => {
          setSrc("");
        }}
      >
        X
      </button>
    </Wrapper>
  );
}
export default UploadFile;
