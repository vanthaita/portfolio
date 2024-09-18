import React from 'react';

// Skill data
export const DATA = {  
  skills: [ 
    "React",
    "Nest.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "ORM",
    "Rust",
    "Solidity",
    "C++",
  ],
};

const Skill = () => {
  return (
    <div>
      <h2 className='text-neutral-900'>My Skills</h2>
      <div className='flex flex-wrap gap-2 mt-4'>
        {DATA.skills.map((skill, index) => (
          <div key={index} className='inline-flex items-center rounded-md border px-3 py-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80'>{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
