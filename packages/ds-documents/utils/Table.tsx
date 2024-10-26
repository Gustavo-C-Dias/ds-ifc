import React from 'react';

interface TableProps {
    header: string[];
    line: (string | JSX.Element)[][];
}

export const TableDocs: React.FC<TableProps> = ({ header, line }: TableProps) => {
    return (
        <table>
            <thead>
                <tr>
                    {header.map((label, index) => (
                        <th key={index}>{label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {line.map((row, index) => (
                    <tr key={index}>
                        {row.map((cell, i) => (
                            <td key={i}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};