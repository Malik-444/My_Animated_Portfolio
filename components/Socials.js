import Link from "next/link";
import {
  RiYoutubeLine,
  RiFacebookLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine,
  RiStackOverflowLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="">
      <div className="flex items-center gap-x-5 text-lg xl:text-xl">
        <Link
          href={"https://web.facebook.com/AzadZ4t7"}
          target="_blank"
          className="hover:text-accent transition-all duration-300"
        >
          <RiFacebookLine />
        </Link>
        <Link
          href={"https://www.instagram.com/talha_husnain_/"}
          target="_blank"
          className="hover:text-accent transition-all duration-300"
        >
          <RiInstagramLine />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/talhahusnain/"}
          target="_blank"
          className="hover:text-accent transition-all duration-300"
        >
          <RiLinkedinLine />
        </Link>
        <Link
          href={"https://www.youtube.com/channel/UCA70KSz-bGHBc_h2qUEvjPA"}
          target="_blank"
          className="hover:text-accent transition-all duration-300"
        >
          <RiYoutubeLine />
        </Link>
        <Link
          href={"https://github.com/Malik-444"}
          target="_blank"
          className="hover:text-accent transition-all duration-300"
        >
          <RiGithubLine />
        </Link>
        <Link
          href={"https://stackoverflow.com/users/22022572/talhacoder"}
          target="_blank"
          className="hover:text-accent transition-all duration-300"
        >
          <RiStackOverflowLine />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
