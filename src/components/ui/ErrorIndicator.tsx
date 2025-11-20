const ErrorIndicator = ({
  message = "Error! Something's gone wrong",
}: {
  message?: string;
}) => {
  return (
    <main className="flex flex-1 shrink-0 h-full w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6">
        <img src="/sad-white.png" style={{ height: "120px" }} />
        <h5 className="text-3xl">{message}</h5>
      </div>
    </main>
  );
};

export default ErrorIndicator;
