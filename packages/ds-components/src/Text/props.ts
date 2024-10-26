import React from "react";

export type TextProps = {
    id?: string;
    children: React.ReactNode;
    variant: "title" | "subtitle" | "body" | "detail"
    weight?: 'regular' | 'semibold' | 'bold'
}