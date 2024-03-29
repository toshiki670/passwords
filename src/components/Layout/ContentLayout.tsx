import type * as React from "react";

import { Box, Typography } from "@mui/material";

import { Head } from "../Head";

interface ContentLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const ContentLayout = ({
  children,
  title,
}: ContentLayoutProps): JSX.Element => {
  return (
    <>
      <Head title={title} />
      <Box>
        {title !== undefined && (
          <Typography mb={2} variant="h4">
            {title}
          </Typography>
        )}
        <Box>{children}</Box>
      </Box>
    </>
  );
};
