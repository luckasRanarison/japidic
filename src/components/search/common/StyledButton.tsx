import { IconType } from "react-icons";

type ButtonProps = {
  icon: IconType;
  size?: number;
  className?: string;
  onClick?: () => void;
};

const StyledButton = ({
  size,
  className,
  icon: Icon,
  onClick,
}: ButtonProps) => (
  <button
    className={`${className} 
    relative group p-2 rounded-full
    text-secondary dark:text-light 
    hover:text-primary dark:hover:text-primary`}
    onClick={onClick}
  >
    <Icon size={size ? size : 18} />
  </button>
);
export default StyledButton;
