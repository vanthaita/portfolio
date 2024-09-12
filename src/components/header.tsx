import Link from 'next/link';
import React from 'react';
import {DATA} from '@/data/resume'
const Header = () => {
  return (
    <header className="z-40 flex w-full flex-col gap-2 md:flex-row md:justify-between">
      <Link href="mailto:thaitv225@gmail.com" className="hover:text-neutral-900 text-bl">
        {DATA.contact.email}
      </Link>
      <nav role="navigation">
        <ul role="list" className="flex flex-row gap-2">
          <li>
            <Link href="/" className="hover:text-neutral-900 text-neutral-900">
              Home
            </Link>
          </li>
          {/* <li>/</li> */}
          <li>
            {/* <a href="/posts" className="hover:text-neutral-900">
              Posts
            </a> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
