import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
const Table = ({ header, data }) => {
    return (
        <table>
            <thead>
            <tr>
                {header.map((headerText, index) => (
                    <th key={index}>
                        {headerText}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.phoneNo}</td>
                    <td>{row.salary}</td>
                    <td><FaRegEdit />
                        <MdDeleteOutline />
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;