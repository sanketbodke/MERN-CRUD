import React, {useState, useEffect} from 'react';
import axios from "axios";
import {API_URL} from "../constant.js";
import {useParams} from "react-router-dom";
const UpdateUser = () => {
    const [userData, setUserData] = useState({})
    const userId = useParams();
    useEffect(() => {
        const getUserdata = async () => {
            const user = await axios.get(`${API_URL}/api/v1/user/${userId.id}`)
            setUserData(user.data.data)
        }
        getUserdata()
    }, []);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const handleSubmit = () => {
        console.log(userData)
    }
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