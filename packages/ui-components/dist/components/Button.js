import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ label, variant = "primary", size = "md", disabled = false, ...props }) => {
    const classNames = [
        "btn",
        `btn-${variant}`,
        size !== "md" ? `btn-${size}` : ""
    ].join(" ");
    return (_jsx("button", { type: "button", className: classNames, disabled: disabled, ...props, children: label }));
};
