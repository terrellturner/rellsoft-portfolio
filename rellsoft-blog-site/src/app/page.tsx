import Link from "next/link";
import {
  PiGithubLogo,
  PiScroll,
  PiShootingStar,
  PiVideoCamera,
} from "react-icons/pi";

export default async function IndexPage() {
  return (
    <main className="container mx-auto min-h-screen flex flex-col justify-center transition-all ease-in-out duration-300">
      <section
        aria-label="Home"
        id="hero"
        className="text-center items-center pt-[50vh] lg:pt-0 lg:text-left relative place-items-center justify-center space-y-6 flex content-between w-full flex-col lg:flex-row mx-auto md:max-w-screen-3xl p-5 md:justify-around"
      >
        <div className="lg:p-5 flex flex-col justify-center">
          <h1 className="text-8xl font-extrabold md:text-9xl text-rellsoft-green">
            Hello!
          </h1>{" "}
          <div className="flex flex-col space-y-8 justify-center p-2">
            <h2 className="text-2xl font-bold md:text-5xl">
              My name is Terrell.
            </h2>
            <h3 className="text-md lg:max-w-md ml-0.5">
              I’m a{" "}
              <span className="font-bold decoration-2 underline decoration-rellsoft-green">
                full-stack developer
              </span>{" "}
              with a passion for practical systems, clean UI, and building
              things that people actually use.
            </h3>
            <div className="w-full flex flex-row leading-0 flex-wrap md:flex-nowrap justify-center lg:justify-around lg:max-w-lg">
              <button className="bg-rellsoft-green text-zinc-950 border flex flex-row m-1.5 lg:m-1 lg:ml-0 ml-0 justify-center items-center space-x-1 hover:border-zinc-100 rounded-lg p-5 w-min whitespace-nowrap cursor-pointer transition-colors hover:bg-zinc-300 hover:text-zinc-950">
                <span>Let&apos;s Talk</span>
                <PiVideoCamera className="text-lg" />
              </button>
              <button className="bg-zinc-900 text-zinc-200 border flex flex-row m-1.5 lg:m-1 justify-center items-center space-x-1 border-zinc-500 rounded-lg p-5 w-min whitespace-nowrap cursor-pointer transition-colors hover:bg-zinc-300 hover:text-zinc-950">
                <span>Github</span>
                <PiGithubLogo className="text-lg" />
              </button>
              <Link href="/blog">
                <button className="bg-zinc-900 text-zinc-200 border flex flex-row m-1.5 lg:m-1 justify-center items-center space-x-1 border-zinc-500 rounded-lg p-5 w-min whitespace-nowrap cursor-pointer transition-colors hover:bg-zinc-300 hover:text-zinc-950">
                  <span>Blog</span>
                  <PiScroll className="text-lg" />
                </button>
              </Link>
              <button className="bg-zinc-900 text-zinc-200 border flex flex-row m-1.5 lg:m-1 justify-center items-center space-x-1 border-zinc-500 rounded-lg p-5 w-min whitespace-nowrap cursor-pointer transition-colors hover:bg-zinc-300 hover:text-zinc-950">
                <span>Projects</span>
                <PiShootingStar className="text-lg" />
              </button>
            </div>
          </div>
        </div>
        <img
          src={`/images/logo-svg.svg`}
          alt="My logo!"
          className="w-1/2 lg:w-1/3"
        />
      </section>
    </main>
  );
}
