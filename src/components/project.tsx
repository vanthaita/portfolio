/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import { DATA } from '@/data/resume';
import { FiArrowDown, FiArrowUp, FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <article className="flex flex-col gap-8">
      <header className="flex w-full flex-row justify-between gap-2">
        <h3 className="text-lg font-semibold text-neutral-900">Projects</h3>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        {DATA.projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl relative bg-white overflow-hidden"
            style={{ height: '100%' }} 
            rel="noreferrer"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col justify-between gap-4 p-6 border-t border-neutral-200">
              <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-neutral-600">{project.description}</p>
            </div>

            <div className='absolute bottom-0 right-0 flex justify-start items-center gap-x-4 px-6 py-3 bg-white'>
              <a
                href={project.githubLink}
                className="text-neutral-800 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={project.externalLink}
                className="text-neutral-800 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink size={20} />
              </a>
            </div>
          </div>
        ))}
      </section>

      <header className="flex w-full justify-between items-center gap-2">
        <h3 className="text-lg font-semibold text-neutral-900">My Ideas Project</h3>
      </header>

      <section className="flex flex-col gap-8">
        {DATA.ideas.map((idea, index: number) => (
          <div
            key={index}
            className="group flex flex-col rounded-xl shadow-md bg-neutral-100 transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <div className="flex justify-between items-center p-6 border-t border-neutral-200">
              <p className="text-lg font-medium text-neutral-900">{idea.name}</p>
              {activeIndex === index ? (
                <FiArrowUp size={16} className="text-neutral-500" />
              ) : (
                <FiArrowDown size={16} className="text-neutral-500" />
              )}
            </div>

            {activeIndex === index && (
              <div className="flex flex-col p-6 bg-neutral-50 gap-4">
                <p className="text-sm text-neutral-600">{idea.description}</p>
                <span
                  className={`text-sm px-2 py-1 rounded-md bg-${idea.statusColor}-100 text-${idea.statusColor}-700 max-w-fit`}
                >
                  {idea.status}
                </span>
              </div>
            )}
          </div>
        ))}
      </section>
    </article>
  );
};

export default Projects;
