import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import React from "react";
import { GoHome, GoScreenFull } from "react-icons/go";
import { IoIosAdd, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoReload } from "react-icons/io5";

export const Hero = () => {
  return (
    <div className="px-44">
      <div>
        <Breadcrumbs className="text-[18px] mt-5">
          <BreadcrumbItem>
            <GoHome className="text-2xl" />
          </BreadcrumbItem>
          <BreadcrumbItem>Flashcard</BreadcrumbItem>
          <BreadcrumbItem>Mathematics</BreadcrumbItem>
          <BreadcrumbItem>Relation and Function</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <div className="mt-7">
        <h1 className="text-[32px] @apply text-[#121481] @apply font-[700px]">
          Relations and Functions ( Mathematics )
        </h1>
        <div className="flex items-center justify-center gap-9 mt-7 @apply w-[Hug_(546px)px] text-[20px]">
          <p className="text-[#121481] @apply border-b-2 border-b-[#121481] border-solid">
            Study
          </p>
          <p>Quiz</p>
          <p>Test</p>
          <p>Game</p>
          <p>Others</p>
        </div>
        <div className="flex items-center justify-center mt-7">
          <div className="@apply w-[650px] h-[350.19px] bg-[#121481] rounded-3xl">
            <h1 className="grid place-items-center m-44 text-white text-4xl">
              9 + 6 + 7x - 2x - 3
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mt-3">
          <div className="flex items-center justify-around @apply w-[500px] text-[#121481]">
            <IoReload className="text-3xl" />
            <IoIosArrowBack className="p-1 bg-[#121481] text-white text-4xl rounded-full" />
            <p className="text-2xl">01/10</p>
            <IoIosArrowForward className="p-1 bg-[#121481] text-white text-4xl rounded-full" />
            <GoScreenFull className="text-3xl" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <img src="/logo-1.png" width={200} alt="" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <IoIosAdd className="text-4xl bg-[#121481] text-white rounded-full" />
            <p className="text-xl text-[#121481]">Create Flashcard</p>
          </div>
        </div>
      </div>
    </div>
  );
};
