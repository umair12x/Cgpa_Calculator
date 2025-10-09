import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./partials/Accordian";

function UseAccordian() {
  return (
    <div className="App px-2 md:p-8 py-10 ">
      <h1 className="text-center font-bold text-3xl text-vibrant">Questions and Quires</h1>

      <Accordion type="single" collapsible className="font-sans secondary-text ">
        <AccordionItem value="item-1" className="dark:border-b-gray-400  ">
          <AccordionTrigger className=" text-md md:text-lg font-normal">Is Secure to use this website?</AccordionTrigger>
          <AccordionContent className=" text-sm md:text-sm font-light">Offcourse it is secure to use.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="dark:border-b-gray-400">
          <AccordionTrigger className=" text-md md:text-lg font-normal">Is this website and result is offical?</AccordionTrigger>
          <AccordionContent className=" text-sm md:text-md font-light">No, this website is not offical and result is also not offical.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="dark:border-b-gray-400">
          <AccordionTrigger className=" text-md md:text-lg font-normal">Is is just for Uaf or other universities also?</AccordionTrigger>
          <AccordionContent className=" text-sm md:text-md font-light">This website only for Uaf because it used the Uaf lms portal resuls.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default UseAccordian;
