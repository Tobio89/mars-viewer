import { Box, Typography } from "@mui/material";

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        padding: "0 20px",
      }}
    >
      {children}
    </Box>
  );
};

export const PageSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: "20px 200px",
      }}
    >
      {children}
    </Box>
  );
};

export const VisualisationTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Typography
      variant="h6"
      sx={{
        borderBottom: "1px solid white",
        width: "100%",
        textAlign: "left",
        padding: "4px",
      }}
    >
      {children}
    </Typography>
  );
};

export const VisualisationSection = ({
  children,
  title,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "flex-start",
        borderBottom: "1px solid grey",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ width: "100%", textAlign: "left", padding: "8px 0 0 0" }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
};
