import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        padding: "0 20px",
        overflowX: "hidden",
        overflowY: "auto",
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
        gap: "10px",
        textAlign: "left",
      }}
    >
      {children}
    </Box>
  );
};

export const AccordionSection = ({
  summary,
  children,
}: {
  summary: string;
  children: React.ReactNode;
}) => {
  return (
    <PageSection>
      <Accordion>
        <AccordionSummary>
          <Typography variant="h5">{summary}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </PageSection>
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
