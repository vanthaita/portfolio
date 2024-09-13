import React from 'react';

const GetInTouch = () => {
  return (
    <article className="flex flex-col gap-8">
      <header className="flex w-full flex-row justify-between gap-2">
        <h3 className="text-lg text-neutral-900">Get in touch</h3>
      </header>
      <p>
        Email me at{' '}
        <a href="mailto:thaitv225@gmail.com" className="hover:text-neutral-900 cursor-pointer" rel="noreferrer" target="_blank">
          thaitv225@gmail.com
        </a>{' '}
        or follow me via my social links.
      </p>
      <ul role="list" className="flex flex-row gap-2">
        <li>
          <a href="https://www.linkedin.com/in/vanthaita/" className="hover:text-neutral-900 cursor-pointer" rel="noreferrer" target="_blank">
            Linkedin
          </a>
        </li>
        <li>/</li>
        <li>
          <a href="https://github.com/vanthaita" className="hover:text-neutral-900 cursor-pointer" rel="noreferrer" target="_blank">
            Github
          </a>
        </li>
        <li>/</li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100091835059957" className="hover:text-neutral-900 cursor-pointer" rel="noreferrer" target="_blank">
            Facebook
          </a>
        </li>
      </ul>
    </article>
  );
};

export default GetInTouch;
