export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex-1 px-5 overflow-x-hidden overflow-y-auto">
      {children}
    </main>
  );
};

export const PageSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col justify-start items-start px-65 py-5 gap-2.5 text-left">
      {children}
    </section>
  );
};
