import React, { useState } from 'react';
import axios from "axios";
import { API_URL } from "../../constant.js";
import "../../style/form.css"
import { useNavigate } from "react-router-dom";
import { message } from 'antd';
import Spinner from "../../components/Spinner.jsx";

const AddUser = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phoneNo: '',
        salary: ''
    });
    const [isLoading, setIsLoading] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleMessage = () => {
        message.success('User Added');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true)
            await axios.post(
                `${API_URL}/api/v1/user/new`,
                userData
            )
            navigate("/users")
            setIsLoading(false)
            handleMessage();
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
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

                <button type="submit">
                    {isLoading ? <Spinner /> : (
                        <p>Submit</p>
                    )}</button>
            </form>
            <img
                src={"https://i.postimg.cc/cChwRb6W/Seminar-pana.png"}
                alt={"img"}
            />
        </div>
    );
};

export default AddUser;
