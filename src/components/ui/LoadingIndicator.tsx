const Spinner = () => {
  return <span className="loader" />;
};

const LoadingIndicator = ({ title = "Loading..." }: { title?: string }) => {
  return (
    <div className="position-fixed top-0 left-0 w-full h-screen z-9999 flex flex-col justify-center items-center bg-black/40 pointer-events-none">
      <div className="flex flex-col justify-center items-center gap-6">
        <Spinner />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default LoadingIndicator;
