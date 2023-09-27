"use client";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { HiHandThumbUp } from "react-icons/hi2";

const Footer = () => {
  return (
    <div className="relative z-40 h-[30vh] w-full flex flex-col items-center md:flex-row justify-end md:justify-around p-4 gap-4 text-dark-text dark:text-light-text bg-footer ">
      <p>Website made by Tree</p>
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
