type TooltipProps = {
  children?: React.ReactNode;
  text: string;
  className?: string;
  onClick: () => void;
};

const Tooltip = ({ children, text, className, onClick }: TooltipProps) => {
  return (
    <div
      onClick={onClick}
      className={`relative group flex justify-center ${className}`}
    >
      {children}
      <div
        className=" group-hover:block hidden
        absolute -bottom-14 w-max py-2 px-4
        rounded-md text-sm text-light bg-secondary"
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
