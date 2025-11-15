import { Link, useLocation } from "react-router";

export default function PageLink({
  to,
  title,
  children,
}: {
  to: string;
  title?: string;
  children?: React.ReactNode;
}) {
  const isActive = useLocation().pathname === to;

  if (children) {
    return <Link to={to}>{children}</Link>;
  }

  return (
    <Link to={to}>
      <p
        className={`no-underline ${
          isActive ? "text-amber-600" : "text-amber-700"
        }`}
      >
        {title}
      </p>
    </Link>
  );
}
