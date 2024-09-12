import React from 'react';
import Projects from './project';
import GetInTouch from './touch';
import { DATA } from '@/data/resume';
import Link from 'next/link';
import Skill from './skill';
import Work from './works';


const Hero = () => {
  return (
    <main className="flex flex-col gap-20">
      <article className="flex flex-col gap-8 md:flex-row-reverse md:justify-end md:gap-12">
        <div className="flex flex-col gap-8">
          <h1 className="font-bold w-fit text-4xl sm:text-5xl mb-4 py-6 px-4 sm:-mx-4 border-4 border-black rounded-3xl shadow-black  shadow-[0px_8px_0px_0px_rgba(0,0,0,0)] bg-emerald-300 text-neutral-950"><span className="pr-2"><span className="animate-wiggle inline-block"></span> Hi, I&apos;m {DATA.name} 👋</span></h1>
          <h2 className="w-auto max-w-[60ch] leading-6">
            I&apos;m a <strong className="font-normal text-orange-500">Vietnamese Web Developer</strong> 
            {DATA.description}
          </h2>
          <ul role="list" className="flex flex-row gap-2">
            <li>
              <Link href="https://www.linkedin.com/in/vanthaita/" className="hover:text-neutral-900 cursor-pointer" rel="noreferrer" target="_blank">
                Linkedin
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="https://github.com/vanthaita" className="hover:text-neutral-900 cursor-pointer" rel="noreferrer" target="_blank">
                Github
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="https://www.facebook.com/profile.php?id=100091835059957" className="hover:text-neutral-900 cursor-pointer" rel="noreferrer" target="_blank">
                Facebook
              </Link>
            </li>
          </ul>
        </div>
      </article>
      <Skill />
      {/* <LatestPosts /> */}
      <Work />
      <Projects />
      <GetInTouch />
    </main>
  );
};

export default Hero;
