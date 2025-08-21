// packages/ui-components/src/components/Button.tsx
"use client";

import type { FC } from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "md",
  disabled = false,
  ...props
}) => {
  const classNames = [
    "btn",
    `btn-${variant}`,
    size !== "md" ? `btn-${size}` : ""
  ].join(" ");

  return (
    <button type="button" className={classNames} disabled={disabled} {...props}>
      {label}
    </button>
  );
};
