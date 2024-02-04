import React, { useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../constant.js';
import "../../style/user.css"

const User = () => {
    const [tableData, setTableData] = useState([]);
    const header = ['Name', 'Email', 'Phone No', 'Salary', 'Action']

    useEffect(() => {
        getTableData();
    }, []);

    const getTableData = async () => {
        try {
            const usersData = await axios.get(`${API_URL}/api/v1/user`);
            setTableData(usersData.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URL}/api/v1/user/${id}/delete`);
            getTableData();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="table-container">
            <table>
                <thead>
                <tr>
                    {header.map((headerText, index) => (
                        <th key={index}>{headerText}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {tableData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.phoneNo}</td>
                        <td>{row.salary}</td>
                        <td>
                            <Link to={`/user/${row._id}/update`}>
                                <FaRegEdit/>
                            </Link>
                            <MdDeleteOutline onClick={() => handleDelete(row._id)}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default User;
