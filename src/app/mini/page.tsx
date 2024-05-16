"use client";
import Accordion from "@/components/mini/Accordion";
import GithubUser from "@/components/mini/GithubUser";
import ImageSlider from "@/components/mini/ImageSlider";
import Model from "@/components/mini/Modal";
import SearchAutoComplete from "@/components/mini/SearchAutoComplete";
import StarRating from "@/components/mini/StarRating";
import Tabs from "@/components/mini/Tabs";
import TicTacToe from "@/components/mini/TicTacToe";
import TypeEffect from "@/components/mini/TypeEffect";
import ControlledForm from "@/components/mini/forms/ControlledForm";
import ReactHookForm from "@/components/mini/forms/ReactHookForm";
import SimpleForm from "@/components/mini/forms/SimpleForm";
import { ReactElement } from "react";
import TabTransition from "@/components/mini/transition";
import ScrollImage from "@/components/mini/refs/ScrollImage";
import RefWithImperative from "@/components/mini/ForwardImperative";
import TreeHolder from "@/components/mini/TreeHolder";
import ScrollIndicator from "@/components/mini/ScrollIndicator";
import StickyCursor from "@/components/mini/StickyCursor";
import RandomEmoji from "@/components/mini/RandomEmoji";
import LazyLoadImage from "@/components/mini/LazyLoadImage";
import UploadFile from "@/components/mini/UploadFile";
function page() {
  const componentArr: ReactElement[] = [
    <SimpleForm />,
    <ControlledForm />,
    <ReactHookForm />,
    <Accordion />,
    <TicTacToe />,
    <SearchAutoComplete />,
    <Tabs />,
    <Model />,
    <ImageSlider />,
    <GithubUser />,
    <StarRating />,
    <TypeEffect />,
    <TabTransition />,
    <ScrollImage />,
    <RefWithImperative />,
    <TreeHolder />,
    <ScrollIndicator />,
    <StickyCursor />,
    <RandomEmoji />,
    <LazyLoadImage />,
    <UploadFile />,
  ];
  return (
    <div className="mt-[56.8px] text-white">
      {componentArr.map((component, idx) => {
        return (
          <div
            key={`miniproject-${idx}`}
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
