type ContainerProps = {
  children: React.ReactNode;
};

const EntryContainer = ({ children }: ContainerProps) => {
  return (
    <div
      className="px-8 py-6 space-y-4 rounded-md shadow-md
      text-secondary dark:text-light dark:bg-secondary bg-white"
    >
      {children}
    </div>
  );
};

export default EntryContainer;
