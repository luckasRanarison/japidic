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
      text-secondary dark:text-dark dark:bg-light
      hover:text-primary dark:hover:bg-primary-dark`}
      onClick={onClick}
    >
      <Icon size={size ? size : 18} />
    </button>
  );
};

export default StyledButton;
