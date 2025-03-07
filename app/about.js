export default [
    {
      input: "whoami",
      return: (
        <>
          software engineering student @{" "}
          <span className="text-red-400">University of Minho</span>
        </>
      ),
    },
    {
        input: "pwd",
        return:  (
            <>
                /home/<span className="text-purple-400">braga</span>/uminho
            </>
        )  
    },
    {
        input: "cat ~/experience.txt",
        return:  (
            <>
                intern @ Eurotux S.A. (summer &apos;24) — worked on <span className="text-yellow-400">cybersecurity </span> 
                and <span className="text-yellow-400">penetration testing</span>
            </>
        )
    },
    {
        input: "wget --output-document=resume.pdf https://eduardofaria.pt/resume.pdf",
        return: (
            <>
                <a href="https://eduardofaria.pt/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">&apos;resume.pdf&apos;</a> saved
            </>
        )
    },
    {
        input: "cat ~/interests.txt",
        return: "low-level programming, performance optimization, networks, and unecessarily self-hosting things"
    },
    {
        input: "ls ~/skills",
        return: "C C++ Go Java Python Git"  
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
              <a href="mailto:business@eduardofaria.pt" className="w-65 flex items-center gap-2">
                <div className="text-blue-400 underline">
                  business@eduardofaria.pt
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
              </a>
            </>
          ),
    }
];
