"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Collapsible({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Accordion type="single" collapsible className="my-4 border rounded-lg px-4">
      <AccordionItem value="item" className="border-none">
        <AccordionTrigger className="text-base font-medium cursor-pointer">
          {title}
        </AccordionTrigger>
        <AccordionContent className="pt-2">{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
