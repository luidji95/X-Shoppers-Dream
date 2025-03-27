import { ReactNode } from "react";
import "./Button.css";

type ButtonProps = {
  children: ReactNode; // Sve što stavimo između <Button>ovde</Button>
  onClick?: () => void; // Klik handler, opcioni
  type?: "button" | "submit"; // Za forme
  variant?: "primary" | "secondary"; // Stilizacija
  className?: string; // Dodatna klasa ako ti treba
  disabled?: boolean; // Da li je dugme onemogućeno
};

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`btn ${variant} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
