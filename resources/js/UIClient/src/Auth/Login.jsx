import React from "react";

function Login() {
    return (
        <div className="font-CircularStd bg-body flex items-center">
            <div className="main-wrapper media-max-w-xs:flex-col flex flex-wrap justify-center w-full">
                <div className="page-wrapper">
                    <div className="py-5 media-max-w-xs:px-3">
                        <div className="text-center mb-[30px]">
                            <a href="https://smarthr-tailwind.dreamguystech.com/orange/src/admin-dashboard.html">
                                <img
                                    src="https://smarthr-tailwind.dreamguystech.com/orange/src/images/logo2.png"
                                    alt="Dreamguy's Technologies"
                                    className="w-[100px] mx-auto"
                                />
                            </a>
                        </div>

                        <div className="bg-white shadow-header border border-cardBorder rounded w-full sm:w-[480px] mx-auto overflow-hidden">
                            <div className="p-[30px]">
                                <h3 className="text-[26px] mb-[5px] text-center">
                                    Login
                                </h3>
                                <p className="text-[#4c4c4c] text-lg mb-[30px] text-center">
                                    Access to our dashboard
                                </p>

                                <form>
                                    <div className="mb-[25px]">
                                        <label className="text-base mb-[5px]">
                                            Email Address
                                        </label>
                                        <input
                                            className="block w-full inputStyle !bg-[#fbfbfb]"
                                            type="text"
                                        />
                                    </div>
                                    <div className="mb-[25px]">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <label className="text-base mb-[5px]">
                                                    Password
                                                </label>
                                            </div>
                                            <div>
                                                <a
                                                    className="text-muted mb-[5px]"
                                                    href="https://smarthr-tailwind.dreamguystech.com/orange/src/forgot-password.html"
                                                >
                                                    Forgot password?
                                                </a>
                                            </div>
                                        </div>
                                        <input
                                            className="block w-full inputStyle !bg-[#fbfbfb]"
                                            type="password"
                                            value="12345"
                                        />
                                    </div>
                                    <div className="mb-[25px] text-center">
                                        <button
                                            className="bg-gradient-to-r from-[#ff9b44] to-[#fc6075] text-white rounded block text-[22px] px-[26px] py-[10px] w-full hover:opacity-80"
                                            type="submit"
                                        >
                                            Login
                                        </button>
                                    </div>
                                    <div className="text-center">
                                        <p>
                                            Don't have an account yet?{" "}
                                            <a
                                                href="https://smarthr-tailwind.dreamguystech.com/orange/src/register.html"
                                                className="text-primary"
                                            >
                                                Register
                                            </a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
