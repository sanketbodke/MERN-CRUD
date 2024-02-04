import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import {Link} from "react-router-dom"
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
                    <td>
                        <Link to={`${row._id}/update`}>
                            <FaRegEdit />
                        </Link>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;