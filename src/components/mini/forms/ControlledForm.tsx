"use client";
import { cn } from "@/lib/utils";
import { ChangeEvent, useState } from "react";
import { poppins } from "@/components/font";

type PersonType = {
  name: string;
  age: number;
  gender: "male" | "female" | "";
  wantCake: boolean;
};
function ControlledForm() {
  const [person, setPerson] = useState<PersonType>({
    name: "",
    age: 0,
    gender: "",
    wantCake: false,
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { type, checked, value, name } = e.target;
    if (type === "radio" && checked) {
      setPerson({ ...person, [name]: value });
    } else {
      const newValue = type === "checkbox" ? checked : value;
      setPerson({ ...person, [name]: newValue });
    }
  };
  // console.log(person);
  return (
    <form
      className={cn(
        "w-1/2 rounded-lg p-2 border border-white bg-purple-600 text-white lg:2/5 flex flex-col items-start justify-center ",
        poppins.className
      )}
      action="./"
    >
      <label className="text-2xl font-medium " htmlFor="controlName">
        Name :
      </label>
      <input
        className="bg-white w-full p-2 mb-2  text-black rounded-lg"
        type="text"
        name="name"
        id="controlName"
        value={person.name}
        onChange={handleChange}
      />

      <label className="text-2xl font-medium " htmlFor="controlAge">
        age :
      </label>
      <input
        className="bg-white w-full p-2 mb-2  text-black rounded-lg"
        type="number"
        name="age"
        id="controlAge"
        value={person.age}
        onChange={handleChange}
      />
      <div>
        <div className="flex flex-col gap-[2px]">
          <div>
            <input
              type="radio"
              name="gender"
              id="controlMale"
              value="male"
              checked={person.gender === "male"}
              onChange={handleChange}
            />
            <label className="ml-2" htmlFor="controlMale">
              Male
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="controlFemale"
              name="gender"
              value="female"
              checked={person.gender === "female"}
              onChange={handleChange}
            />
            <label className="ml-2" htmlFor="controlFemale">
              Female
            </label>
          </div>
        </div>
        <input
          id="controlCheckbox"
          type="checkbox"
          name="wantCake"
          checked={person.wantCake}
          onChange={handleChange}
        />
        <label className="ml-2" htmlFor="controlCheckbox">
          Want Sandwich
        </label>
      </div>
      <button className="w-full p-2 mt-3 text-center bg-black rounded-lg text-white font-medium text-lg">
        Submit
      </button>
    </form>
  );
}
export default ControlledForm;
