import React, { useEffect, useState } from "react";
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";

import Login from "./Auth/Login";
import Index from "./Dashboard/Index";
import Layout from "./layouts/Layout";
import EmpIndex from "./employee/EmpIndex";
import EmpAdd from "./employee/EmpAdd";
import CmpIndex from "./company/CmpIndex";
import CalIndex from "./calendar/CalIndex";
import Leave from "./leave/Leave";
import Reveiw from "./review/Reveiw";

import Manage from "./manage/Manage";
import Setting from "./setting/Setting";
import Report from "./report/Report";
import { useDispatch, useSelector } from "react-redux";
import { useUserQuery } from "./services/User";
import { authActions } from "./slices/auth-slice";
import useToken from "./hooks/useToken";
import EmpList from "./employee/EmpList";
import TeamIndex from "./teams/TeamIndex";
import OfficeIndex from "./offices/OfficeIndex";

function App() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const [token, setToken] = useToken();
    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            dispatch(authActions.login());
            navigate("/");
        } else {
            let pathName = window.location.pathname;
            if (pathName != "/login") {
                navigate("/login");
            }
        }
    }, []);
    console.log(isLoggedIn);

    return (
        <>
            {!isLoggedIn && (
                <Routes>
                    <Route path="/login" element={<Login />}></Route>
                    {/* <Route path="*" exact={true} element={<NotFoundPage />} /> */}
                </Routes>
            )}
            {isLoggedIn && (
                <Layout>
                    <Routes>
                        <Route path="/">
                            <Route index element={<Index />} />
                            <Route path="employee">
                                <Route index element={<EmpIndex />} />
                                <Route path="add" element={<EmpAdd />} />
                                <Route path="list" element={<EmpList />} />
                            </Route>
                            <Route path="company">
                                <Route index element={<CmpIndex />} />
                                {/* <Route path="add" element={<EmpAdd />} /> */}
                            </Route>
                            <Route path="calendar">
                                <Route index element={<CalIndex />} />
                                {/* <Route path="add" element={<EmpAdd />} /> */}
                            </Route>
                            <Route path="leave">
                                <Route index element={<Leave />} />
                                {/* <Route path="add" element={<EmpAdd />} /> */}
                            </Route>
                            <Route path="review">
                                <Route index element={<Reveiw />} />
                                {/* <Route path="add" element={<EmpAdd />} /> */}
                            </Route>
                            <Route path="report">
                                <Route index element={<Report />} />
                                {/* <Route path="add" element={<EmpAdd />} /> */}
                            </Route>
                            <Route path="manage">
                                <Route index element={<Manage />} />
                                {/* <Route path="add" element={<EmpAdd />} /> */}
                            </Route>
                            <Route path="setting">
                                <Route index element={<Setting />} />
                                {/* <Route path="add" element={<EmpAdd />} /> */}
                            </Route>
                            <Route path="teams">
                                <Route index element={<TeamIndex />} />
                                {/* <Route path="add" element={<EmpAdd />} /> */}
                            </Route>
                            <Route path="offices">
                                <Route index element={<OfficeIndex />} />
                                {/* <Route path="add" element={<EmpAdd />} /> */}
                            </Route>
                        </Route>
                    </Routes>
                </Layout>
            )}
        </>
    );
}

export default App;
