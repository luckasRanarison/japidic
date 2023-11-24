type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const EntryContainer = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`${className} space-y-4 px-8 py-6 rounded-md shadow-sm
      text-secondary dark:text-light bg-white dark:bg-darkoverlay`}
    >
      {children}
    </div>
  );
};

export default EntryContainer;
