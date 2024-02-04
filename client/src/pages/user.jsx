import React, {useState, useEffect} from 'react';
import axios from "axios";
import {API_URL} from "../constant.js";
import Table from "../components/Table.jsx";
const User = () => {
    const tableHeaders = ['Name', 'Email', 'PhoneNo', 'Salary', 'Action'];
    const [tableData, setTaleData] = useState([]);

    useEffect(()=> {
        const getTableData = async () => {
            const usersData = await axios.get(`${API_URL}/api/v1/user`)
            setTaleData(usersData.data.data)
        }
        getTableData()
    },[])
    return (
        <Table
            header={tableHeaders}
            data={tableData}
        />
    );
};

export default User;