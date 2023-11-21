type LinkProp = {
  children: React.ReactNode;
  href: string;
};

const StyledLink = ({ children, href }: LinkProp) => (
  <a
    href={href}
    className="relative font-semibold text-primary after:bg-primary 
    after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 
    after:transition-all after:duration-300 hover:after:w-full"
  >
    {children}
  </a>
);

export default StyledLink;
