/* eslint-disable @next/next/no-img-element */
import React from 'react';
const Projects = () => {
  const projects = [
    {
      name: 'Mogi',
      description: 'Mock Interview • Next.js • TypeScript',
      link: 'https://mogi-gamma.vercel.app/',
      image: './mogi.png',
    },
    {
      name: 'Bugoru.dev',
      description: 'Blog • Next.js • TypeScript',
      link: 'https://burogu-fontend.vercel.app/',
      image: './burogu.png',
    },
    {
      name: 'Notto',
      description: 'Note • Next.js • TypeScript',
      link: 'https://notto-omega.vercel.app/',
      image: './notto.png',
    },
  ];

  return (
    <article className="flex flex-col gap-8">
      <header className="flex w-full flex-row justify-between gap-2">
        <h3 className="text-lg font-semibold text-neutral-900">Projects</h3>
      </header>
      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <a
            key={index}
            className="group flex flex-col rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            <div className="relative h-40 w-full overflow-hidden rounded-t-lg">
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col justify-between gap-4 p-4 border-t border-neutral-200 bg-white">
              <p className="text-lg font-medium text-neutral-900">{project.name}</p>
              <p className="text-sm text-neutral-600">{project.description}</p>
            </div>
          </a>
        ))}
      </section>
    </article>
  );
};

export default Projects;
