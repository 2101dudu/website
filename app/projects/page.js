"use client";

import dynamic from 'next/dynamic';
const Typing = dynamic(() => import("../typed"), { ssr: false });

import NavBar from "../navbar";

export default function about() {
    return (
        <>
          <NavBar />
          <div className="max-w-screen-xl mx-auto h-screen flex items-center justify-center">
            <div className="w-3/4 h-1/4 flex-row">
            <h1 className="text-7xl font-extrabold text-left">
              <Typing/>
            </h1>
            <h1 className="text-3xl text-neutral-500 italic text-left pt-7">PROJECTs</h1>
            </div>
          </div>
        </>
      );
}