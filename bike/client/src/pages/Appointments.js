import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import moment from "moment";
import "../styles/Bikepage.css";
import { Table } from "antd";

const Appointments = () => {
    // const [appointments, setAppointments] = useState([]);

    // const getAppointments = async () => {
    //   try {
    //     const res = await axios.get("/api/v1/user/user-appointments", {
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem("token")}`,
    //       },
    //     });
    //     if (res.data.success) {
    //       setAppointments(res.data.data);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // useEffect(() => {
    //   getAppointments();
    // }, []);

    // const columns = [
    //   {
    //     title: "ID",
    //     dataIndex: "_id",
    //   },
    // {
    //   title: "Name",
    //   dataIndex: "name",
    //   render: (text, record) => (
    //     <span>
    //       {record.doctorInfo.firstName} {record.doctorInfo.lastName}
    //     </span>
    //   ),
    // },
    // {
    //   title: "Phone",
    //   dataIndex: "phone",
    //   render: (text, record) => <span>{record.doctorInfo.phone}</span>,
    // },
    //   {
    //     title: "Date & Time",
    //     dataIndex: "date",
    //     render: (text, record) => (
    //       <span>
    //         {moment(record.date).format("DD-MM-YYYY")} &nbsp;
    //         {moment(record.time).format("HH:mm")}
    //       </span>
    //     ),
    //   },
    //   {
    //     title: "Status",
    //     dataIndex: "status",
    //   },
    // ];

    return ( <
        Layout >
        <
        div className = "card-container" >
        <
        div className = "card" >
        <
        img src = "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fbig%2Froyal-enfield%2Fthunderbird-500x%2Froyal-enfield-thunderbird-500x.jpg%3Fv%3D7&w=640&q=75"
        alt = "" / >
        <
        div className = "price" > $5200 < /div> <
        div className = "description" > Good Bike grab a best deal which is avilabe now < /div>  <
        button > Buy < /button>< /
        div >

        <
        div className = "card" >
        <
        img src = "https://i.ytimg.com/vi/qT1obi7MgX0/sddefault.jpg"
        alt = "" / >
        <
        div className = "price" > $5500 < /div> <
        div className = "description" > Good Bike grab a best deal which is avilabe now < /div> <
        button > Buy < /button> < /
        div >

        <
        div className = "card" >
        <
        img src = "https://assets.newatlas.com/dims4/default/cbd906a/2147483647/strip/true/crop/1445x963+134+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Findian-motorcycle-market-turmoil-triumph-bajaj-29.jpg"
        alt = "" / >
        <
        div className = "price" > $8500 < /div> <
        div className = "description" > Good Bike grab a best deal which is avilabe now < /div>  <
        button > Buy < /button>< /
        div >

        <
        div className = "card" >
        <
        img src = "https://static.autox.com/uploads/bikes/2023/12/royal-enfield-shotgun-650.jpg"
        alt = "" / >
        <
        div className = "price" > $9500 < /div> <
        div className = "description" > Good Bike grab a best deal which is avilabe now < /div>  <
        button > Buy < /button>< /
        div >
        <
        /div>


        <
        div className = "card-container" >
        <
        div className = "card" >
        <
        img src = "https://media.zigcdn.com/media/model/2023/Mar/right-side-view-1272517421_600x400.jpg"
        alt = "" / >
        <
        div className = "price" > $5500 < /div> <
        div className = "description" > Good Bike grab a best deal which is avilabe now < /div> <
        button > Buy < /button> < /
        div >

        <
        div className = "card" >
        <
        img src = "https://images.hindustantimes.com/auto/img/2023/04/08/1600x900/GT_13_1_1680938176428_1680938186908_1680938186908.jpeg"
        alt = "" / >
        <
        div className = "price" > $7500 < /div> <
        div className = "description" > Good Bike grab a best deal which is avilabe now. < /div>  <
        button > Buy < /button>< /
        div >

        <
        div className = "card" >
        <
        img src = "https://pipeburn.com/wp-content/uploads/2017/01/30_01_2017_Dirty_Duck_Royal_Enfield_Continental_GT_survival_offroad_pipeburn_india_02.jpg"
        alt = "" / >
        <
        div className = "price" > $8500 < /div> <
        div className = "description" > Good Bike grab a best deal which is avilabe now < /div>  <
        button > Buy < /button>< /
        div >

        <
        div className = "card" >
        <
        img src = "https://financialexpresswpcontent.s3.amazonaws.com/uploads/2019/11/royal-enfield-old-monk-3.jpg"
        alt = "" / >
        <
        div className = "price" > $4500 < /div> <
        div className = "description" > Good Bike grab a best deal which is avilabe now < /div> <
        button > Buy < /button> < /
        div >
        <
        /div>











        <
        /
        Layout >
    );
};

export default Appointments;