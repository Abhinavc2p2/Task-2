import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";

import "../styles/Homepage.css";
const HomePage = () => {
    // const [doctors, setDoctors] = useState([]);
    // // login user data
    // const getUserData = async() => {
    //     try {
    //         const res = await axios.get(
    //             "/api/v1/user/getAllDoctors",

    //             {
    //                 headers: {
    //                     Authorization: "Bearer " + localStorage.getItem("token"),
    //                 },
    //             }
    //         );
    //         if (res.data.success) {
    //             setDoctors(res.data.data);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     getUserData();
    // }, []);
    return ( <
        Layout >
        <
        div className = "homepage" >
        <
        h1 className = "text-center home" > On going Deal and Offer < /h1>  <
        img src = "https://img.freepik.com/premium-vector/luxury-custom-bike-sale-promotion-social-media-banner-template_252779-180.jpg"
        alt = "" / >

        <
        /
        div >



        <
        /
        Layout >
    );
};

export default HomePage;