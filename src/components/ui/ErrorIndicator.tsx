import { Typography } from "@mui/material";

const ErrorIndicator = ({
  message = "Error! Something's gone wrong",
}: {
  message?: string;
}) => {
  return (
    <main
      // component="main"
      // sx={{
      //     flexGrow: 1,
      //     display: "flex",
      //     flexDirection: "row",
      //     height: "100%",
      //     width: "100%",
      //     alignItems: 'center',
      //     justifyContent: 'center'
      // }}
      className="flex flex-1 shrink-0 h-full w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <img src="/sad-white.png" style={{ height: "120px" }} />
        <Typography variant="h5">{message}</Typography>
      </div>
    </main>
  );
};

export default ErrorIndicator;
