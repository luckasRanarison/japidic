import Link from "next/link";

const linkClassname = `relative font-semibold text-primary after:bg-primary
after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0
after:transition-all after:duration-300 hover:after:w-full
dark:text-primary-dark dark:after:bg-primary-dark`;

type LinkProp = {
  children: React.ReactNode;
  href: string;
  internal?: boolean;
};

const StyledLink = ({ children, href, internal }: LinkProp) =>
  internal ? (
    <Link href={href} className={linkClassname}>
      {children}
    </Link>
  ) : (
    <a href={href} className={linkClassname}>
      {children}
    </a>
  );

export default StyledLink;
