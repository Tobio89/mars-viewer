import { BrowserRouter } from "react-router";
import { ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";

import theme from "@consts/theme";
import queryClient from "@consts/queryClient";

import type { PropsWithChildren } from "react";

const ProviderProvider = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default ProviderProvider;
