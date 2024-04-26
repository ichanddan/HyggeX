import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import React from "react";
import { GoHome, GoScreenFull } from "react-icons/go";
import { IoIosAdd, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoReload } from "react-icons/io5";

export const Hero = () => {
  return (
    <div className="px-4 md:px-40">
      <div>
        <Breadcrumbs className="text-[5px] mt-5 md:text-[18px]">
          <BreadcrumbItem>
            <GoHome className="text-xl md:text-2xl" />
          </BreadcrumbItem>
          <BreadcrumbItem>Flashcard</BreadcrumbItem>
          <BreadcrumbItem>Mathematics</BreadcrumbItem>
          <BreadcrumbItem>Relation and Function</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <div className="mt-7">
        <h1 className="text-[25px] @apply text-[#121481] @apply font-[700px] md:text-[32px]">
          Relations and Functions <br className="md:hidden" /> ( Mathematics )
        </h1>
        <div className="flex items-center justify-center gap-5 mt-7  text-xl md:gap-9 @apply w-[Hug_(546px)px] text-[20px]">
          <p className="text-[#121481] @apply border-b-2 border-b-[#121481] border-solid">
            Study
          </p>
          <p>Quiz</p>
          <p>Test</p>
          <p>Game</p>
          <p>Others</p>
        </div>
        <div className="flex items-center justify-center mt-7">
          <div className="lg:@apply w-[650px] h-[350.19px] bg-[#121481] rounded-3xl">
            <h1 className="text-center mt-40 md: text-white text-4xl">
              9 + 6 + 7x - 2x - 3
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mt-3">
          <div className="@apply w-[21rem] flex items-center justify-around text-[#121481] md:@apply w-[500px]">
            <IoReload className="text-3xl" />
            <IoIosArrowBack className="p-1 bg-[#121481] text-white text-3xl rounded-full md:text-4xl" />
            <p className="text-xl md:text-2xl">01/10</p>
            <IoIosArrowForward className="p-1 bg-[#121481] text-white text-3xl rounded-full md:text-4xl" />
            <GoScreenFull className="text-3xl" />
          </div>
        </div>
        <div className="flex items-center justify-between  md:gap-10 my-5 ">
          <div>
            <img src="/logo-1.png" className="w-36 md:w-[200px]" alt="" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <IoIosAdd className="text-2xl md:text-4xl bg-[#121481] text-white rounded-full" />
            <p className="text-sm md:text-xl text-[#121481]">Create Flashcard</p>
          </div>
        </div>
      </div>
    </div>
  );
};
