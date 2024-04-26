import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";


export const FAQ = () => {
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="px-2 md:px-44">
      <h1 className="text-4xl text-[#121481] @apply font-bold tracking-[0.005em]">
        FAQ
      </h1>
      <div className="py-5 mb-5">
        <Accordion>
          <AccordionItem key="1" aria-label="Accordion 1" title="Can education flashcards be used for all age groups?">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="How do education flashcards work?">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Can education flashcards be used for test preparation?">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
