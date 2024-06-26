"use client";
import React, { Ref, useEffect, useRef, useState } from "react";
import { useInView, useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ContentItem = ({
  id,
  title,
  description,
  showThreshold = "all",
  handleInView,
}: {
  id: string;
  title: string;
  description: string;
  showThreshold?: number | "some" | "all";
  handleInView?: () => void;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: showThreshold, once: false });

  useEffect(() => {
    if (isInView) {
      handleInView?.();
    }
  }, [isInView, handleInView]);

  return (
    <div id={id} key={title} ref={ref} className="my-20 scroll-mt-64">
      <motion.h2
        initial={{
          opacity: 0.3,
          translateY: 5,
        }}
        animate={{
          opacity: isInView ? 1 : 0.3,
          translateY: isInView ? 0 : 5,
        }}
        className="text-2xl font-bold text-primary"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{
          opacity: 0,
          translateY: 5,
        }}
        animate={{
          opacity: isInView ? 1 : 0.3,
          translateY: isInView ? 0 : 5,
        }}
        className="text-lg text-primary/80 max-w-md mt-2"
      >
        {description}
      </motion.div>
    </div>
  );
};

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    id: string;
    title: string;
    description: React.ReactNode | any;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCardIdx, setActiveCardIdx] = React.useState(0);

  return (
    <motion.div className="flex justify-between relative space-x-24 rounded-md md:p-10">
      <div className="relative flex flex-col items-start px-2 md:px-4">
        {content.map((item, idx) => (
          <div key={`${item.title}-${idx}-desktop-content`} className="md:block">
            <ContentItem
              id={item.id}
              title={item.title}
              description={item.description}
              handleInView={() => setActiveCardIdx(idx)}
            />
            <div
              className="md:hidden animate-fade-up animate-delay-300 animate-once"
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
      <div
        className={cn(
          "hidden md:block h-[216px] w-[384px] rounded-md bg-white sticky top-1/2 -translate-y-1/2 mt-[calc(120px+5rem)] overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCardIdx].content ?? null}
      </div>
    </motion.div>
  );
};
