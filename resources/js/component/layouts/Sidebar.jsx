import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
    const [active , setActive] = useState("dashboard");
    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="index3.html" className="brand-link">
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="#" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                            <li className={`nav-item has-treeview menu-open ${(active === 'dashboard') ? 'nav-link active' : 'nav-link'}`} onClick={ () => {
                                setActive("dashboard");
                            }}>
                                <Link to={'/'}>
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Dashboard
                                    </p>
                                </Link>
                            </li>

                            <li className={`nav-item has-treeview menu-open ${(active === 'students') ? 'nav-link active' : 'nav-link'}`} onClick={() => {
                                setActive("students");
                            }}>
                                <Link to={'/admin/student'}>
                                    {/* <i className="nav-icon fas fa-tachometer-alt"></i> */}
                                    <p>
                                        Students
                                    </p>
                                </Link>
                            </li>

                            <li className={`nav-item has-treeview menu-open ${(active === 'teachers') ? 'nav-link active' : 'nav-link'}`} onClick={() => {
                                setActive("teachers");
                            }}>
                                <Link to={'/'} >
                                    {/* <i className="nav-icon fas fa-tachometer-alt"></i> */}
                                    <p>
                                        Teachers
                                    </p>
                                </Link>
                            </li>

                        </ul>
                    </nav>

                </div>
            </aside>
        </>
    )
}

export default Sidebar;