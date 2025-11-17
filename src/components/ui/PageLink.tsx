import { Typography, TypographyProps } from "@mui/material";
import { Link, useLocation } from "react-router";

import theme from "@consts/theme";

export default function PageLink({
  to,
  title,
  children,
  variant = "body1",
}: {
  to: string;
  title?: string;
  children?: React.ReactNode;
  variant?: TypographyProps["variant"];
}) {
  const isActive = useLocation().pathname === to;

  if (children) {
    return <Link to={to}>{children}</Link>;
  }

  return (
    <Link to={to}>
      <Typography
        variant={variant}
        sx={{
          textDecoration: "none",
          color: isActive
            ? theme.palette.primary.light
            : theme.palette.primary.main,
        }}
      >
        {title}
      </Typography>
    </Link>
  );
}
