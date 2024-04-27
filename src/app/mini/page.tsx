"use client";
import Accordion from "@/components/mini/Accordion";
import SearchAutoComplete from "@/components/mini/SearchAutoComplete";
import Tabs from "@/components/mini/Tabs";
import TicTacToe from "@/components/mini/TicTacToe";
import ControlledForm from "@/components/mini/forms/ControlledForm";
import ReactHookForm from "@/components/mini/forms/ReactHookForm";
import SimpleForm from "@/components/mini/forms/SimpleForm";
import { ReactElement } from "react";

function page() {
  const componentArr: ReactElement[] = [
    <SimpleForm />,
    <ControlledForm />,
    <ReactHookForm />,
    <Accordion />,
    <TicTacToe />,
    <SearchAutoComplete />,
    <Tabs />,
  ];
  return (
    <div className="mt-[56.8px] text-white">
      {componentArr.map((component, idx) => {
        return (
          <div
            key={idx}
            id={idx.toString()}
            className="h-screen flex justify-center items-center w-full"
          >
            {component}
          </div>
        );
      })}
    </div>
  );
}
export default page;
