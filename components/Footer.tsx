"use client";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { HiHandThumbUp } from "react-icons/hi2";

const Footer = () => {
  return (
    <div className="absolute z-40 bottom-0 left-0 min-h-[10vh] w-full flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-dark-background text-dark-text dark:bg-light-background dark:text-light-text">
      <p>Website made by Luiggi Duran</p>
      <p className="flex flex-col items-center justify-center text-center">
        All art displayed here has been stolen{" "}
        <HiHandThumbUp className="text-3xl" />{" "}
      </p>
      <div>
        <p>Where to find me</p>
        <div className="flex gap-4 items-center justify-center">
          <Link href="https://github.com/treee97" target="_blank">
            <FaGithubSquare className="text-3xl" />
          </Link>
          <Link href="https://www.linkedin.com/">
            <FaLinkedin className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
