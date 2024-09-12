/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import { DATA } from '@/data/resume';

const Work = () => {
    const [isOpen, setIsOpen] = useState(null); 

    const handleToggle = (index: any) => {
        setIsOpen(isOpen === index ? null : index);
    };

    return (
        <div className="space-y-4">
            <h1 className='text-black'>Work Experience</h1>
            {DATA.work.map((job, index) => (
                <div
                    key={index}
                    className="rounded-lg bg-card text-card-foreground flex p-4 cursor-pointer"
                    onClick={() => handleToggle(index)} // Handle click event
                >
                    <div className="flex-none">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
                            <img
                                className="aspect-square h-full w-full object-contain"
                                alt={job.company}
                                src={job.logoUrl}
                            />
                        </span>
                    </div>

                    <div className="flex-grow ml-4 flex-col group">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between gap-x-2 text-base">
                                <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                                    {job.company}
                                    <span className="inline-flex gap-x-1"></span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={`lucide lucide-chevron-right size-4 transform transition-all duration-300 ease-out ${isOpen === index ? 'rotate-90' : ''}`}
                                    >
                                        <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                </h3>
                                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                                    {job.start} - {job.end}
                                </div>
                            </div>

                            <div className="font-sans text-xs">{job.title}</div>
                        </div>

                        {/* Toggle job description based on isOpen */}
                        <div className={`mt-2 text-xs sm:text-sm transition-all duration-300 ease-out ${isOpen === index ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden'}`}>
                            {job.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Work;
