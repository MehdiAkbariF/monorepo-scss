import type { FC } from "react";
interface ButtonProps {
    label: string;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    onClick?: () => void;
}
export declare const Button: FC<ButtonProps>;
export {};
