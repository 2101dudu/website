"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const Typing = dynamic(() => import("./components/typed"), { ssr: false });
import Terminal from "./components/terminal";

import aboutMe from "./pages/about.js";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="max-w-screen-xl mx-10 xl:mx-auto xl:w-9/10 lg:h-150 sm:h-200 h-130 flex lg:flex-row flex-col lg:items-end lg:pt-0 sm:pt-20 pt-30 items-center justify-center relative sm:gap-0 gap-10"
      >
        <div className="lg:w-1/2 w-auto lg:h-1/3 h-1/7">
          <div className="flex-row">
            <h1 className="xl:text-5xl sm:text-4xl text-2xl font-extrabold text-left">
              <Typing />
            </h1>
            <h1 className="xl:text-xl sm:text-lg text-xs text-neutral-500 italic text-left lg:pt-7 sm:pt-4 pt-2">
              Segmentation faults build character.
            </h1>
          </div>
        </div>
        <div className="md:w-1/2 lg:h-2/3 h-1/2 flex sm:items-end lg:justify-end justify-center">
          <div className="relative lg:w-[360] lg:h-[360] sm:w-[300] sm:h-[300] w-[200] h-[200]">
            <Image
              className="rounded-full"
              src="/images/foto_perfil.jpg"
              alt="Picture of the author"
              sizes="300px"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      <div id="about" className="flex justify-center items-center lg:py-20">
        <Terminal initialStatements={aboutMe} />
      </div>

      <section
        id="projects"
        className="pt-30 mb-30 xl:max-w-screen-xl mx-10 xl:mx-auto md:h-150 flex items-start justify-center"
      >
        <div className="md:max-w-screen-lg sm:w-auto w-9/10 h-2/3">
          <h1 className="text-4xl font-extrabold text-left pb-20">Projects</h1>
          <div className="flex md:flex-row flex-col lg:gap-30 md:gap-15 gap-5">
            <div className="flex-1/2 flex flex-col gap-5">
              <div>
                <a
                  href="https://github.com/2101dudu/Network-Monitoring-System-CC"
                  target="_blank"
                  className="w-85 flex items-center gap-2"
                >
                  <h1 className="underline sm:text-xl text-md font-bold text-left">
                    Network Monitoring System
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                </a>
                <p>
                  A Distributed Network Monitoring system written in{" "}
                  <span className="font-extrabold">GO</span> with custom UDP and
                  TCP protocols for collecting and alerting network metrics.
                </p>
              </div>
              <div>
                <a
                  href="https://github.com/2101dudu/Task-Orchestrator-SO"
                  target="_blank"
                  className="w-75 flex items-center gap-2"
                >
                  <h1 className="underline sm:text-xl text-md font-bold text-left">
                    Task Delegation Server
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                </a>
                <p>
                  A <span className="font-extrabold">C-based</span> task
                  orchestration server that executes bash commands from multiple
                  concurrent clients using named pipes and scheduling
                  algorithms.
                </p>
              </div>
            </div>
            <div className="flex-1/2 flex flex-col gap-5">
              <div>
                <a
                  href="https://github.com/2101dudu/blockchain"
                  target="_blank"
                  className="w-78 flex items-center gap-2"
                >
                  <h1 className="underline sm:text-xl text-md font-bold text-left">
                    Proof-of-Work Blockchain
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                </a>
                <p>
                  A lightweight blockchain in <b>GO</b> with proof-of-work,
                  BadgerDB storage, and a CLI. Built from scratch to explore
                  blockchain and cryptographic fundamentals.
                </p>
              </div>
              <div>
                <a
                  href="https://github.com/2101dudu/Distributed-Remote-Storage-SD"
                  target="_blank"
                  className="w-85 flex items-center gap-2"
                >
                  <h1 className="underline sm:text-xl text-md font-bold text-left">
                    Distributed Remote Storage
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                </a>
                <p>
                  A distributed in-memory data store with a client-server
                  architecture, leveraging TCP sockets and multi-threading for
                  efficient, concurrent access in{" "}
                  <span className="font-extrabold">Java</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
