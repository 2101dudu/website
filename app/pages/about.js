export default [
    {
      input: "whoami",
      return: (
        <>
          software engineering graduate @{" "}
          <span className="text-red-400">University of Minho</span>
        </>
      ),
    },
    {
        input: "pwd",
        return:  (
            <>
                /home/portugal/<span className="text-purple-400">braga</span>/
            </>
        )  
    },
    {
        input: "cat ~/experience.txt",
        return:  (
            <>
              <p>
                intern @ Uphold (summer &apos;25) — worked on <span className="text-green-400">core banking infrastructure </span> 
                using <span className="text-yellow-400">Java</span>
              </p>
              <p>
                intern @ Eurotux S.A. (summer &apos;24) — worked on <span className="text-green-400">cybersecurity </span> 
                and <span className="text-yellow-400">penetration testing</span>
              </p> 
            </>
        )
    },
    {
        input: "wget --output-document=cv.pdf eduardofaria.com/cv.pdf",
        return: (
            <>
                <a href="https://eduardofaria.com/cv.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">&apos;cv.pdf&apos;</a> saved
            </>
        )
    },
    {
        input: "cat ~/interests.txt",
        return: "low-level programming, performance optimization, networks, and unecessarily self-hosting things"
    },
    {
        input: "ls ~/skills",
        return: "C/C++, Go, Java, Python, JavaScript/TypeScript, SQL"  
    },
    {
        input: "brew install humour",
        return: (
            <>
                <span className="text-orange-400">warning</span>: humor is already installed and up-to-date.
            </>
        )
    },
    {
        input: "./contact_me.sh",
        return: (
            <>
              <a href="https://github.com/2101dudu" target="_blank" rel="noopener noreferrer" className="w-55 flex items-center gap-2">
                <div className="text-blue-400 underline">
                  github.com/2101dudu
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
              </a>
              <a href="https://linkedin.com/in/fariaeduardo" target="_blank" rel="noopener noreferrer" className="w-75 flex items-center gap-2">
                <div className="text-blue-400 underline">
                  linkedin.com/in/fariaeduardo
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
              </a>
              <a href="mailto:business@eduardofaria.com" className="w-68 flex items-center gap-2">
                <div className="text-blue-400 underline">
                  business@eduardofaria.com
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
              </a>
            </>
          ),
    }
];
