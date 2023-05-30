import Link from "next/link";
import React from "react";

function Menu() {
  return (
    <div className="top-12 p-3 sm:p-5 flex items-center justify-center max-w-7xl mx-auto xl:items-center z-10">
      <Link href="#about">
        <button className="heroButton">About</button>
      </Link>
      <Link href="#experience">
        <button className="heroButton">Experience</button>
      </Link>
      <Link href="#skills">
        <button className="heroButton">Skills</button>
      </Link>
      <Link href="#projects">
        <button className="heroButton">Projects</button>
      </Link>
    </div>
  );
}

export default Menu;
