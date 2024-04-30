"use client";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { useDispatch, useSelector } from "@/redux/store";
import { addUser } from "@/redux/features/users/userSlice";
function AddUsers() {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();
  return (
    <div className="w-40 flex flex-col gap-4  justify-center items-center border border-black rounded-lg p-4">
      <Input
        value={text}
        className="w-full"
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        className="bg-black  text-white hover:bg-black"
        onClick={() => {
          dispatch(addUser(text));
          setText("");
          console.log("hello");
        }}
        variant={"default"}
      >
        Add User
      </Button>
    </div>
  );
}
export default AddUsers;
