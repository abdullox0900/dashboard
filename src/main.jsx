import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";
import { TextProvider } from "./context/header-title.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TextProvider>
        <App />
      </TextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
