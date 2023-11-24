type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const EntryContainer = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`${className} px-8 py-6 rounded-md shadow-md
      text-secondary dark:text-light bg-white dark:bg-darkoverlay`}
    >
      {children}
    </div>
  );
};

export default EntryContainer;
