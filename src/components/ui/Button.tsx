import { ReactNode } from "react";
import "./Button.css";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "tab" | "danger";
  className?: string;
  disabled?: boolean;
};

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}: ButtonProps) => {
  const baseClass =
    variant === "tab"
      ? "tab-btn"
      : variant === "primary"
      ? "btn primary"
      : variant === "secondary"
      ? "btn secondary"
      : variant === "danger"
      ? "btn danger"
      : "btn";

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${baseClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
