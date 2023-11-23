import { IconType } from "react-icons";

type ButtonProps = {
  size?: number;
  className?: string;
  onClick?: () => void;
  icon: IconType;
};

const StyledButton = ({
  size,
  className,
  onClick,
  icon: Icon,
}: ButtonProps) => {
  return (
    <button
      className={`${className} 
      relative group p-2 rounded-full
      text-secondary dark:text-light hover:text-primary dark:hover:text-primary`}
      onClick={onClick}
    >
      <Icon size={size ? size : 18} />
    </button>
  );
};

export default StyledButton;
