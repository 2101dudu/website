// page.js
"use client";

import dynamic from 'next/dynamic';
import Image from 'next/image';
const Typing = dynamic(() => import("./typed"), { ssr: false });

import NavBar from "./navbar";


export default function Home() {
  return (
    <>
      <NavBar />
      <div id="home" className="max-w-screen-xl mx-auto h-screen flex items-center justify-start relative">
        <div className="w-1/2 h-1/3 ">
          <div className="flex-row">
            <h1 className="text-6xl font-extrabold text-left">
              <Typing/>
            </h1>
            <h1 className="text-2xl text-neutral-500 italic text-left pt-7">
              Segmentation faults build character.
            </h1>
          </div>
        </div>
      </div>

      <section id="about" className="max-w-screen-xl mx-auto h-screen flex items-start justify-between">
        <div className="w-1/2 h-2/3 ">
          <div className="flex-row">
            <h1 className="text-4xl font-extrabold text-left">About me</h1>
            <p className="text-xl text-left pt-7">
              I&apos;m a software engineering student at the University of Minho. I&apos;m passionate about <b>low-level programming</b>, <b>performance optimization</b>,
              and <b>networking</b>. I love working close to the metal, understanding how things work under the hood,
              and pushing efficiency to the limit.
            </p>
            <p className="text-xl text-neutral-500 italic text-left pt-7">
              When I&apos;m not optimizing performance, I&apos;m probably self-hosting something,
              tweaking my neovim setup, or finding new ways to break things (intentionally, of course).
            </p>
          </div>
        </div>
        <div className="h-2/3 flex items-start">
          <Image className="w-md rounded-full" src="images/foto_perfil.jpg" alt="Profile Photo" />
        </div>
      </section>

      <section id="projects" className="max-w-screen-xl mx-auto h-screen flex items-start justify-center">
        <div className="w-1/2 h-2/3">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-extrabold text-left pb">Projects</h1>
            <div>
              <a href="https://github.com/2101dudu/Network-Monitoring-System-CC" target="_blank" className="flex items-center gap-2">
                <h1 className="underline text-xl font-bold text-left">Network Monitoring System</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
              </a>
              <p>A Distributed Network Monitoring system written in GO with custom UDP and TCP protocols for collecting and alerting network metrics.</p>
            </div>
            <div>
              <a href="https://github.com/2101dudu/Task-Orchestrator-So" target="_blank" className="flex items-center gap-2">
                <h1 className="underline text-xl font-bold text-left">Task Scheduler</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
              </a>
              <p>A C-based server that executes bash commands from multiple concurrent clients.</p>
            </div>
            <div>
              <a href="https://github.com/2101dudu/cg" target="_blank" className="flex items-center gap-2">
                <h1 className="underline text-xl font-bold text-left">Graph-based Game Engine</h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
              </a>
              <p>A mini scene 3D engine written in C++ for rendering complex primitives supporting an interactive UI.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
