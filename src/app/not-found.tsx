import Link from "next/link";
import { RiErrorWarningLine, RiHome2Line } from "react-icons/ri";

const NotFound = () => (
  <div
    className="h-full flex flex-col items-center justify-center
    text-secondary dark:text-light"
  >
    <RiErrorWarningLine size={60} />
    <div className="mt-4 mb-8 font-semibold text-2xl ">
      404 | Page not found
    </div>
    <Link
      href="/"
      className="py-2 px-6 space-x-2 flex items-center rounded-md
      text-light dark:text-darkbg bg-primary 
      hover:bg-secondary dark:hover:text-light"
    >
      <RiHome2Line />
      <div>Homepage</div>
    </Link>
  </div>
);
export default NotFound;
