import React from "react";
import Comman from '../layouts/Comman';
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <Comman />
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Dashboard</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Dashboard v1</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>150</h3>

                                        <p className="text-uppercase">Students</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-account-student"></i>
                                    </div>
                                    <Link to={'/admin/student'} className="small-box-footer">More info <i
                                        className="fas fa-arrow-circle-right"></i></Link>   
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>53</h3>

                                        <p className="text-uppercase">Teachers</p>
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i
                                        className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
export default Dashboard;