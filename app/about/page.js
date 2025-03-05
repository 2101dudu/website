"use client";

import dynamic from 'next/dynamic';
const Typing = dynamic(() => import("../typed"), { ssr: false });

import NavBar from "../navbar";

export default function about() {
 return (
        <>
            <NavBar />
            <div className="max-w-screen-xl mx-auto h-screen flex items-center justify-between">
                <div className="w-1/2 h-2/3 ">
                    <div className="flex-row">
                        <h1 className="text-4xl font-extrabold text-left">About me</h1>
                        <p className="text-xl text-left pt-7">I'm a software engineering student 
                        at the University of Minho. I'm passionate about <b>low-level programming</b>, <b>performance optimization</b>,
                            and <b>networking</b>. I love working close to the metal, understanding how things work under the hood,
                            and pushing efficiency to the limit.
                        </p>
                        <p className="text-xl text-neutral-500 italic text-left pt-7">When I'm not optimizing performance, I'm probably self-hosting something,
                        tweaking my neovim setup, or finding new ways to break things (intentionally, of course).
                        </p>
                    </div>
                </div>
                <div class="h-2/3 flex items-start">
                    <img className="w-md rounded-full" src="images/foto_perfil.jpg" alt="Profile Photo"></img>
                </div>
            </div>
        </>
   );
}