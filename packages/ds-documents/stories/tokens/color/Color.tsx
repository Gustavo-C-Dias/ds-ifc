import React from "react"

export const ColorDocs = ({ color }: { color: string }): JSX.Element => {
    const style = {
        backgroundColor: `var(${color})`,
        width: '200px',
        height: '100px',
    }

    return <div style={style} />
};
