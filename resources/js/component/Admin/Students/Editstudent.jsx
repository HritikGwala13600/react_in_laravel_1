import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form, Button, Row, Col ,Container } from 'react-bootstrap';
import axios from "axios";

import Comman from "../../layouts/Comman";

const Editstudent = () => {
    const {id} = useParams();
    const [studentName , setStudentName] = useState("");
    const [studentEmail , setStudentEmail] = useState("");
    const [studentPhone , setStudentPhone] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [image, setImage] = useState(null)

    const changeHandler = (event) => {
        setImagePreview(URL.createObjectURL(event.target.files[0]));
        setImage(event.target.files[0]);
    };

    useEffect( () => {
        fetchStudent();
    },[]);

    const fetchStudent = async () => {
        await axios.get(`/admin/student/edit/${id}`).then( (response) => {
            setStudentName(response.data.data.name);
            setStudentEmail(response.data.data.email);
            setStudentPhone(response.data.data.phone_no);
        }).catch( (err) => {
            console.log(err);
        }); 
    }

    // update student
    const updateStudent = (e) => {
        console.log('submitted');
    }
    return (
        <>
            <Comman />
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Edit Student</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Edit Student</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row mx-2">
                            <div className="col-md-12">
                                <form onSubmit={updateStudent}>
                                    <div className="mb-3">
                                        <label htmlFor="studentName" className="form-label">Name</label>
                                        <input 
                                        type="text"
                                        className="form-control"
                                        id="studentName"
                                        value={studentName}
                                        onClick={ (e) => {
                                            setStudentName(e.target.value);
                                        }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={studentEmail} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                        <input type="text" className="form-control" id="phoneNumber" value={studentPhone} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formFile" className="form-label">Profile Image</label>
                                        <input className="form-control" type="file" id="formFile" onChange={changeHandler} />
                                        <img className="mt-4" src={imagePreview} width={150} height={150} alt="No Image" srcSet="" />
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-sm-6 text-center">
                                            <button type="submit" className="btn btn-dark">Cancel</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* <Form>
                  <Row>
                    <Col>
                      <Form.Group controlId="Name">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={studentName} onChange={(event) => {
                          setStudentName(event.target.value)
                        }} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="my-3">
                    <Col>
                      <Form.Group controlId="Description">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={studentEmail} onChange={(event) => {
                          setStudentEmail(event.target.value)
                        }} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="my-3">
                    <Col>
                      <Form.Group controlId="Phone Number">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" value={studentPhone} onChange={(event) => {
                          setStudentPhone(event.target.value)
                        }} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Image" className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" onChange={changeHandler} />
                        <img className='mt-4' width="250px" src={imagePreview} alt="No Image" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="primary" className="mt-2" size="md" block="block" type="submit">
                    Update
                  </Button>
                  <Link className="btn btn-dark mt-2 mx-2" size="md" block="block" to={"/"}> Back </Link>
            </Form> */}
        </>
    )
}
export default Editstudent;