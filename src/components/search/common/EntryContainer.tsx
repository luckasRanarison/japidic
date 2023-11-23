const EntryContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="px-8 py-6 space-y-4 rounded-md shadow-md
      text-secondary dark:text-light bg-white dark:bg-darkoverlay"
    >
      {children}
    </div>
  );
};

export default EntryContainer;
