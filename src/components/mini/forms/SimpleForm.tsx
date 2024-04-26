"use client";

import { FormEventHandler } from "react";
import { poppins } from "@/components/font";
import { cn } from "@/lib/utils";
function SimpleForm() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("name"));
    console.log(formData.get("age"));
    console.log(formData.get("password"));
    e.currentTarget.reset();
  };
  return (
    <form
      className={cn(
        "w-1/2 rounded-lg p-2 border border-slate-400 bg-white text-black lg:2/5 flex flex-col items-start justify-center ",
        poppins.className
      )}
      action="./"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label className="text-2xl font-medium " htmlFor="name">
        Name :
      </label>
      <input
        className="bg-slate-800 w-full p-2 mb-2  text-white rounded-lg"
        type="text"
        name="name"
        id="name"
      />
      <label className="text-2xl font-medium " htmlFor="password">
        Password :
      </label>
      <input
        className="bg-slate-800 w-full p-2 mb-2 text-white  rounded-lg"
        type="password"
        name="password"
        id="password"
        autoComplete="current-passwords"
      />
      <label className="text-2xl font-medium " htmlFor="age">
        age :
      </label>
      <input
        className="bg-slate-800 w-full p-2 mb-2  text-white rounded-lg"
        type="number"
        name="age"
        id="age"
      />
      <button className="w-full p-2 mt-3 text-center bg-black rounded-lg text-white font-medium text-lg">
        Submit
      </button>
    </form>
  );
}
export default SimpleForm;
