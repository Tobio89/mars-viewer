import { BrowserRouter } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";

import queryClient from "@consts/queryClient";

import type { PropsWithChildren } from "react";

const ProviderProvider = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </BrowserRouter>
  );
};

export default ProviderProvider;
