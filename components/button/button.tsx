import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "destructive" | "outline";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children = "Button",
  className,
  variant = "primary",
  disabled = false,
  ...props
}) => {
  const buttonVariant = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 border-primary",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/90 border-border",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90 border-destructive",
    outline:
      "border bg-background text-foreground hover:bg-secondary border-border",
  };

  return (
    <button
      className={cn(
        "anim flex items-center rounded-sm border px-4 py-1 font-semibold",
        className,
        buttonVariant[variant],
        disabled && "opacity-50 cursor-not-allowed" // Add styles for disabled state
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
