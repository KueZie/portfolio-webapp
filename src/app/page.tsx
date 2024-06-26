"use client";
import Image from "next/image";
import Headshot from "@/app/headshot.png";
import { Navbar } from "./nav-menu";
import { Boxes } from "@/components/ui/background-boxes";
import { useScroll, scroll, useMotionValueEvent } from "framer-motion";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PiArrowDown, PiArrowDownThin } from "react-icons/pi";
import WordRotate from "@/components/ui/word-rotate";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

import EnvoyPreview from "@/app/envoy-preview.png";
import EstorePreview from "@/app/estore-preview.png";
import GithubPreview from "@/app/github-preview.png";
import Link from "next/link";

const content = [
  {
    id: "envoy",
    title: "Envoy",
    description: (
      <>
        Envoy helps agencies create and deliver thousands of custom videos
        directly to their leads. Built with Next.js, Postgres, and AWS
        Serverless compute, Envoy is a blazingly fast and easy-to-use platform.
        <br />
        <Button
          variant="link"
          className="px-0 font-semibold underline underline-offset-4"
          asChild
        >
          <Link href="https://envoysoftware.net/" target="_blank">
            Visit Envoy
          </Link>
        </Button>
      </>
    ),
    content: (
      <Image
        src={EnvoyPreview}
        alt="Envoy"
        className="h-full w-full object-cover rounded-lg border border-accent shadow-xl"
      />
    ),
  },
  {
    id: "estore",
    title: "eStore",
    description: (
      <>
        eStore is a simple e-commerce platform developed as the capstone project
        of Software Engineering II during my time at Florida State University.
        The platform is built with the MongoDB, Express, React, and Node.js
        (MERN) stack and features a fully functional shopping cart, user
        authentication, product management, and PayPal integration.
        <br />
        <Button
          variant="link"
          className="px-0 font-semibold underline underline-offset-4"
          asChild
        >
          <Link
            href="https://huntgora-ecommerce-cen4021.onrender.com/"
            target="_blank"
          >
            Visit eStore
          </Link>
        </Button>
      </>
    ),
    content: (
      <Image
        src={EstorePreview}
        alt="eStore"
        className="h-full w-full object-cover rounded-lg border border-accent shadow-xl"
      />
    ),
  },
  {
    id: "geckojump",
    title: "Gecko Jump",
    description: (
      <>
        Technology consulting website and customer relationship manager (CRM)
        for a startup agency. Written in React and Python, persisted by MongoDB.
        <br />
        <Button
          variant="link"
          className="px-0 font-semibold underline underline-offset-4"
          asChild
        >
          <Link href="https://github.com/GeckoJump/geckojump" target="_blank">
            View the source
          </Link>
        </Button>
      </>
    ),
    content: (
      <video
        src="https://pnhe0yokhf0hgzv6.public.blob.vercel-storage.com/geckojump-preview-Y9CjoKovUWS1g6bSw7eJO8JDudNQQK.mp4"
        autoPlay
        loop
        muted
        className="h-full w-full object-cover rounded-lg border border-accent shadow-xl"
      />
    ),
  },
  {
    id: "github",
    title: "Github",
    description: (
      <>
        I&apos;m always working on something new. Check out my GitHub to see
        what I'm up to.
        <br />
        <Button
          variant="link"
          className="px-0 font-semibold underline underline-offset-4"
          asChild
        >
          <Link href="https://github.com/KueZie" target="_blank">
            Visit GitHub
          </Link>
        </Button>
        <div className="md:h-24" />{" "}
        {/* Hack to get full scroll on last element on md: browsers */}
      </>
    ),
    content: (
      <Image
        src={GithubPreview}
        alt="GitHub Stats"
        className="h-full w-full object-cover rounded-lg border border-accent shadow-xl"
      />
    ),
  },
];

export default function Home() {
  const { scrollY } = useScroll();

  const [userScrollTrigger, setUserScrollTrigger] = useState(true);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest);
    if (latest > 100) {
      setUserScrollTrigger(false);
    } else {
      setUserScrollTrigger(true);
    }
  });

  return (
    <main>
      <nav
        className={cn(
          !userScrollTrigger && "bg-white",
          "fixed top-0 left-0 w-full z-50 text-white transition-all p-4 animate-fade-down animate-delay-[2000ms] animate-duration-1000 animate-once"
        )}
      >
        <div className="container w-full flex items-center justify-center">
          <Navbar />
        </div>
      </nav>
      <section className="relative w-full h-screen grid md:grid-cols-2 overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-slate-200 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <div className="container p-0 tracking-tight flex w-full md:max-w-xl items-center justify-center">
          <div className="flex flex-col justify-center z-30">
            <h1 className="text-6xl font-semibold text-primary z-30 animate-fade-up animate-duration-1000 animate-once">
              Hi, I&apos;m{" "}
              <span
                style={{ "--shimmer-width": "50px" } as CSSProperties}
                className={cn(
                  "font-bold text-blue-600/80",
                  // Shimmer animation
                  "animate-shimmer bg-clip-text bg-no-repeat [background-position:-100_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
                  // Shimmer gradient
                  "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80"
                )}
              >
                Hunter.
              </span>
            </h1>
            <h3 className="flex text-2xl font-medium text-gray-500 z-30 mt-2 animate-fade-up animate-delay-500 animate-duration-1000 animate-once">
              I&apos;m a
              <WordRotate
                className="text-inherit ml-1.5"
                words={[
                  "full-stack developer.",
                  "software engineer.",
                  "cooking aficionado.",
                  "cloud engineer.",
                  "music enthusiast.",
                  "robotics hobbyist.",
                  "fitness enjoyer.",
                ]}
              />
            </h3>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <Image
            src={Headshot}
            alt="Hunter Goram"
            className="rounded-full bg-[radial-gradient(ellipse_at_center_50px,transparent,var(--gray-300))]
            h-72 w-72 p-2 z-30 animate-fade-up animate-delay-1000 animate-duration-1000 animate-once shadow-2xl"
          />
        </div>
      </section>
      <div className="group animate-in fade-in-0 delay-2000 duration-1000">
        <Button
          variant="ghost"
          className={cn(
            !userScrollTrigger && "hidden",
            "absolute bottom-4 right-1/2 translate-x-1/2 font-semibold text-primary/50 z-30 group-hover:text-blue-600"
          )}
          onClick={() =>
            projectsRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Learn More{" "}
          <PiArrowDown className="ml-1.5 h-4 w-4 text-inherit animate-bounce" />
        </Button>
      </div>
      <div className="space-y-12">
        <section
          ref={projectsRef}
          className="container flex flex-col items-center justify-center py-12"
        >
          <div className="text-center p-6 space-y-4">
            <div className="text-primary/20 text-xl font-semibold tracking-widest">
              ...
            </div>
            <h2 className="tracking-tighter text-4xl font-semibold text-primary">
              <span className="font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Creative Endeavors
              </span>
            </h2>
          </div>
          <StickyScroll content={content} />
        </section>

        <section
          ref={experienceRef}
          className="container flex flex-col items-center justify-center py-12"
        >
          <div className="text-center p-6 space-y-4">
            <div className="text-primary/20 text-xl font-semibold tracking-widest">
              ...
            </div>
            <h2 className="tracking-tighter text-4xl font-semibold text-primary">
              <span className="font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
          </div>
        </section>
      </div>
    </main>
  );
}
