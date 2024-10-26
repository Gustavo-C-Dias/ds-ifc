import React from "react"

export const FontFamilyDocs = (): JSX.Element => {
    const style = {
        fontFamily: `var(--font-family)`,
        padding: 'var(--spacing-2) 0'
    }

    return <p style={style}>Lorem ipsum dolor sit amet.</p>
};

export const FontSizeDocs = ({size}: {size: string}): JSX.Element => {
    const style = {
        fontFamily: `var(--font-family)`,
        fontSize: `var(${size})`,
        padding: 'var(--spacing-2) 0'
    }

    return <p style={style}>Lorem ipsum dolor sit amet.</p>
};

export const FontWeightDocs = ({weight}: {weight: string}): JSX.Element => {
    const style = {
        fontFamily: `var(--font-family)`,
        fontSize: `var(--font-size-2)`,
        fontWeight: `var(${weight})`,
        padding: 'var(--spacing-2) 0'
    }

    return <p style={style}>Lorem ipsum dolor sit amet.</p>
};

