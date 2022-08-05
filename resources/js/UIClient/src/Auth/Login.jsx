import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";
import { useLoginMutation } from "../services/Auth";
import { useUserQuery } from "../services/User";
import { authActions } from "../slices/auth-slice";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const [login, loginResult] = useLoginMutation();
    const navigate = useNavigate();

    const [token, setToken] = useToken();

    const submitForm = async (event) => {
        event.preventDefault();

        let result = await login({ username: email, password: password });
        console.log(result);

        let myToken = result.data["token"];
        console.log(myToken);
        if (myToken) {
            dispatch(authActions.login());
            navigate("/");
            setToken(myToken);
        }
    };

    return (
        <div class="inner-wrapper login-body">
            <div class="login-wrapper">
                <div class="container">
                    <div class="loginbox shadow-sm">
                        <div class="login-left">
                            <img
                                class="img-fluid"
                                src="assets/img/logo.png"
                                alt="Logo"
                            />
                        </div>
                        <div class="login-right">
                            <div class="login-right-wrap">
                                <h1>Login</h1>
                                <p class="account-subtitle">
                                    Access to our dashboard
                                </p>

                                <form onSubmit={submitForm}>
                                    <div class="form-group">
                                        <input
                                            class="form-control"
                                            type="text"
                                            placeholder="Email"
                                            onChange={(e) =>
                                                setEmail(e.currentTarget.value)
                                            }
                                            value={email}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            class="form-control"
                                            type="password"
                                            placeholder="Password"
                                            onChange={(e) =>
                                                setPassword(
                                                    e.currentTarget.value
                                                )
                                            }
                                            value={password}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <button
                                            class="btn btn-theme button-1 text-white ctm-border-radius btn-block"
                                            type="submit"
                                        >
                                            Login
                                        </button>
                                    </div>
                                </form>

                                <div class="text-center forgotpass">
                                    <a href="forgot-password.html">
                                        Forgot Password?
                                    </a>
                                </div>
                                <div class="login-or">
                                    <span class="or-line"></span>
                                    <span class="span-or">or</span>
                                </div>

                                <div class="social-login">
                                    <span>Login with</span>
                                    <a
                                        href="javascript:void(0)"
                                        class="facebook"
                                    >
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                    <a href="javascript:void(0)" class="google">
                                        <i class="fa fa-google"></i>
                                    </a>
                                </div>

                                <div class="text-center dont-have">
                                    Don’t have an account?{" "}
                                    <a href="register.html">Register</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
