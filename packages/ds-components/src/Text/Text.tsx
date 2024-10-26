import React from "react";
import { TextProps } from "./props";
import "./Text.css";

const tagMap: Record<TextProps["variant"], keyof JSX.IntrinsicElements> = {
    title: "h1",
    subtitle: "h2",
    body: "p",
    detail: "span",
};

export const Text: React.FC<TextProps> = ({ id, children, variant, weight }) => {
    const Tag = tagMap[variant];

    return (
        <Tag
            id={id}
            className={`ds-text ds-text-${variant} ds-text-font-weight-${weight}`}
        >
            {children}
        </Tag>
    );
};
