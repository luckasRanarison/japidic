type TooltipProps = {
  text: string;
  children?: React.ReactNode;
  showTooltip?: boolean;
  className?: string;
  onClick?: () => void;
};

const Tooltip = (props: TooltipProps) => {
  return (
    <div
      onClick={props.onClick}
      className={`relative group flex justify-center ${props.className}`}
    >
      {props.children}
      <div
        className={`z-50 group-hover:block ${!props.showTooltip && "hidden"}
        absolute -bottom-14 w-max py-2 px-4
        rounded-md text-sm text-light bg-secondary shadow-md`}
      >
        {props.text}
      </div>
    </div>
  );
};

export default Tooltip;
