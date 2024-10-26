import React from 'react';

export const BorderRadiusDocs = ({ borderRadius }: { borderRadius: string }): JSX.Element => {
    const style = {
        backgroundColor: 'var(--color-primary-200)',
        width: '200px',
        height: '100px',
        borderRadius: `var(${borderRadius})`,
    };

    return <div style={style}/>
};

export const BorderWidthDocs = ({ borderWidth }: { borderWidth: string }): JSX.Element => {
    const style = {
        borderColor: 'var(--color-primary-400)',
        borderStyle: 'solid',
        borderWidth: `var(${borderWidth})`,
        width: '200px',
        height: '100px',
    }

    return <div style={style} />
};
