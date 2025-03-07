"use client";

import dynamic from 'next/dynamic';
import Image from 'next/image';
const Typing = dynamic(() => import("./typed"), { ssr: false });

import NavBar from "./navbar";
import Cursor from "./cursor";
import Terminal from './terminal';
import aboutMe from "./about.js";


export default function Home() {
  return (
    <>
      <Cursor />
      <NavBar />
      <div id="home" className="max-w-screen-xl mx-10 xl:mx-auto lg:h-150 sm:h-200 h-130 flex lg:flex-row flex-col lg:items-end lg:pt-0 sm:pt-20 pt-30 items-center justify-center relative sm:gap-0 gap-10">
        <div className="lg:w-1/2 w-auto lg:h-1/3 h-1/7">
          <div className="flex-row">
            <h1 className="xl:text-5xl sm:text-4xl text-2xl font-extrabold text-left">
              <Typing/>
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
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>

      <div id="about" className="flex justify-center items-center lg:py-20">
        <Terminal initialStatements={aboutMe} />
      </div>

      <section id="projects" className="pt-30 mb-30 xl:max-w-screen-xl mx-10 xl:mx-auto md:h-150 flex items-start justify-center">
        <div className="md:max-w-screen-lg w-auto h-2/3">
          <h1 className="text-4xl font-extrabold text-left pb-20">Projects</h1>
          <div className="flex md:flex-row flex-col lg:gap-30 md:gap-15 gap-5">
            <div className="flex-1/2 flex flex-col gap-5">
              <div>
                <a href="https://github.com/2101dudu/Network-Monitoring-System-CC" target="_blank" className="w-85 flex items-center gap-2">
                  <h1 className="underline text-xl font-bold text-left">Network Monitoring System</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
                </a>
                <p>A Distributed Network Monitoring system written in <span className="font-extrabold">GO</span> with custom UDP and TCP protocols for collecting and alerting network metrics.</p>
              </div>
              <div>
                <a href="https://github.com/2101dudu/Task-Orchestrator-So" target="_blank" className="w-50 flex items-center gap-2">
                  <h1 className="underline text-xl font-bold text-left">Task Scheduler</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
                </a>
                <p>A <span className="font-extrabold">C-based</span> task orchestration server that executes bash commands from multiple concurrent clients using named pipes and scheduling algorithms.</p>
              </div>
            </div>
            <div className="flex-1/2 flex flex-col gap-5">
              <div>
                <a href="https://github.com/2101dudu/cg" target="_blank" className="w-78 flex items-center gap-2">
                  <h1 className="underline text-xl font-bold text-left">Graph-based Game Engine</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
                </a>
                (private, for now)
                <p>A mini scene 3D engine written in <span className="font-extrabold">C++</span> for rendering complex primitives supporting an interactive UI.</p>
              </div>
              <div>
                <a href="https://github.com/2101dudu/Distributed-Remote-Storage-SD" target="_blank" className="w-85 flex items-center gap-2">
                  <h1 className="underline text-xl font-bold text-left">Distributed-Remote-Storage</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
                </a>
                <p>A distributed in-memory data store with a client-server architecture, leveraging TCP sockets and multi-threading for efficient, concurrent access in <span className="font-extrabold">Java</span>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="footer" className="w-full h-10 flex flex-col items-center justify-center mb-7 gap-5">
        <div className="md:w-1/5 w-full flex justify-around items-center md:gap-0">
          <a className="hover:scale-120 transition duration-150 ease-in-out" href="https://github.com/2101dudu" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30"><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>
          </a>
          <a className="hover:scale-120 transition duration-150 ease-in-out" href="https://linkedin.com/in/fariaeduardo" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30"><path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path></svg>
          </a>
          <a className="hover:scale-120 transition duration-150 ease-in-out" href="mailto:business@eduardofaria.pt">
            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke="#000000" strokeWidth="0.6" fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#080341"/></svg>
          </a>
        </div>
        <h1 className="text-sm text-neutral-500 italic">made by me © 2025</h1>
      </section>

    </>
  );
}
