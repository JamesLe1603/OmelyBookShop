import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
const Login = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const handleSubmit = (values) => {
        axios.post("https://localhost:7086/api/Account/login", values)
            .then(res => {
                console.log(res.data)
                const decoded = jwtDecode(res.data)
                console.log("Decoded Token:", decoded);
                setUser(decoded);
                console.log("decoded after setUser: ",decoded)
                if (res.status === 200 && res.data) {
                    // localStorage.setItem("token", res.data.token)
                    alert("login successful");
                    if (decoded.role === "Customer") {
                        navigate("/");
                    }
                    else {
                        if (decoded.role === "Admin") {
                            navigate("/admin");
                        }
                    }
                }
                else {
                    alert("login failed");
                }
            })
            .catch(err => {
                console.error("Error during login: ", err);
                alert("An error occurred while logging in.");
            })
            .finally();
    }

    return (
        <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={Yup.object({
                username: Yup.string().required("Username is required"),
                password: Yup.string().required("Password is required")
            })}
            onSubmit={handleSubmit}
        >
            <Form>
                <div className="container-fluid">
                    <div className="row h-100 align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                            <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <a href="index.html" className="">
                                        <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>OMELY BOOKSHOP</h3>
                                    </a>
                                    <h3>Sign In</h3>
                                </div>
                                <div className="form-floating mb-3">
                                    <Field type="text" className="form-control" id="floatingText" placeholder="jhondoe" name="username" />
                                    <label htmlFor="floatingText">Username</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <Field type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="form-check">
                                        <Field type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember</label>
                                    </div>
                                    <a href="">Forgot Password</a>
                                </div>
                                <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Sign In</button>
                                <p className="text-center mb-0">Don't have an Account? <a href="/register">Sign Up</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}
export default Login;