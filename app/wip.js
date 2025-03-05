export default function Wip() {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-1/2 h-1/4 flex-row">
          <h1 className="text-7xl font-extrabold text-center">This website is still being compiled.</h1>
          <h1 className="text-3xl text-neutral-500 italic text-center pt-7">Please check back soon.</h1>
        </div>
      </div>
    );
  }

  export function DotBackgroundDemo() {
    return (
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Backgrounds
        </p>
      </div>
    );
  }