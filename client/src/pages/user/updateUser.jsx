import React, { useState, useEffect } from 'react';
import axios from "axios";
import { API_URL } from "../../constant.js";
import { useParams } from "react-router-dom";
import "../../style/form.css";
import { useNavigate } from "react-router-dom";
import { message } from 'antd';
import Spinner from "../../components/Spinner.jsx";

const UpdateUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phoneNo: '',
        salary: ''
    });
    const [isLoading, setIsLoading] = useState(false);

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

    const showMessage = (type, content) => {
        message[type](content);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true)
             await axios.put(
                `${API_URL}/api/v1/user/${id}/update`,
                userData
            );
            showMessage('success', 'User Updated');
            navigate("/users");
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={"form-container"}>
            <form onSubmit={handleSubmit} className={"form"}>
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

                <button type="submit">{isLoading ? <Spinner /> : (
                    <p>Update</p>
                )}</button>
            </form>
            <img
                src={"https://i.postimg.cc/cChwRb6W/Seminar-pana.png"}
                alt={"img"}
            />
        </div>
    );
};

export default UpdateUser;
