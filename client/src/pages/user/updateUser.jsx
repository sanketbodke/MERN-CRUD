import React, { useState, useEffect } from 'react';
import axios from "axios";
import { API_URL } from "../../constant.js";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phoneNo: '',
        salary: ''
    });

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/v1/user/${id}`);
                setUserData(response.data.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        getUserData();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const updatedData = await axios.put(
                `${API_URL}/api/v1/user/${id}/update`,
                userData
            )
        }catch (error){
            console.log(error)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
            />

            <label>Email</label>
            <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
            />

            <label>Phone No</label>
            <input
                type="text"
                name="phoneNo"
                value={userData.phoneNo}
                onChange={handleInputChange}
            />

            <label>Salary</label>
            <input
                type="text"
                name="salary"
                value={userData.salary}
                onChange={handleInputChange}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default UpdateUser;