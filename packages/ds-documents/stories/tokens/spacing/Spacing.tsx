import React from "react"

export const SpacingDocs = ({ spacing }: { spacing: string }): JSX.Element => {
    const style = {
        backgroundColor: `var(--color-primary-200)`,
        width: `var(${spacing})`,
        height: '100px',
    }

    return <div style={style} />
};
