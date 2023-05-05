import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {Button} from 'react-bootstrap';

import Comman from "../layouts/Comman";
import Footer from "../layouts/Footer";

const Student = () => {
    const [students , setStudents] = useState("");
    useEffect(() => {
        axios.get('/admin/all-student').then((response) => {
            setStudents(response.data.data);
        }).catch((error) => {
            console.log(error);
        });
    }, [])
    return (
        <>
            <Comman />
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid mt-4 mb-5">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark text-uppercase">Student</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                                    <li className="breadcrumb-item active">Student</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <table className="table table-striped table-hover table-reflow">
                                <thead>
                                    <tr>
                                        <th ><strong> Name: </strong></th>
                                        <th ><strong> Email: </strong></th>
                                        <th ><strong> Phone Number: </strong></th>
                                        <th ><strong> Profile: </strong></th>
                                        <th className="text-center"><strong> Action: </strong></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    students.length > 0 ? (
                                        students.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.name}</td>
                                                <td>{row.email}</td>
                                                <td>{row.phone_no}</td>
                                                <td>
                                                    <img width="50px" src="#" />
                                                </td>
                                                <td className="text-center">
                                                    <Link to={`/admin/student/edit/${row.id}`} className='btn btn-success mx-2'>
                                                        Edit
                                                    </Link>
                                                    <Button variant="danger">
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    )
                                    :
                                    <tr>
                                        <td className="text-center">No Students Available</td>
                                    </tr>
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
export default Student;