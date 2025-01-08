import axios from "axios";
import * as Yup from "yup"
import { Form, Formik, Field, ErrorMessage } from "formik";
const Register = () => {
    const handleSignUp = (values, { resetForm }) => {
        axios.post("https://localhost:7086/api/Account/register", values)
            .then(res => {
                alert("Created successfully!");
            })
            .catch(err => {
                console.error("Error during login", err);
                alert("An error occurred while signing up");
            })
            .finally();
    }
    return (
        <>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    username: "",
                    password: "",
                    email: ""
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string().required("Required field!"),
                    lastName: Yup.string().required("Required field!"),
                    username: Yup.string().required("Required field!"),
                    password: Yup.string().required("Required field!"),
                    email: Yup.string().required("Required field!").email("Invalid email"),
                })}
                onSubmit={handleSignUp}
            >


                <div className="container-fluid">
                    <div className="row w-100 h-100 align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                            <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <a href="/" className="">
                                        <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>OMELY BOOKSHOP</h3>
                                    </a>
                                    <h3>Sign Up</h3>
                                </div>
                                <Form>
                                    <div className="row g-3">
                                        <div className="col-6">
                                            <div className="form-floating mb-3">
                                                <Field
                                                    name="firstName"
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingText"
                                                    placeholder="John"
                                                />
                                                <label htmlFor="floatingText">First Name</label>
                                                <ErrorMessage name="firstName" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-floating mb-3">
                                                <Field
                                                    name="lastName"
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingText"
                                                    placeholder="Doe"
                                                />
                                                <label htmlFor="floatingText">Last Name</label>
                                                <ErrorMessage name="lastName" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <Field type="text" className="form-control" id="floatingText" placeholder="jhondoe" name="username" />
                                        <label htmlFor="floatingText">Username</label>
                                        <ErrorMessage name="username" />
                                    </div>
                                    <div className="form-floating mb-3">
                                        <Field type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-4">
                                        <Field type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" />
                                        <label htmlFor="floatingPassword">Password</label>
                                        <ErrorMessage name="password" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="form-check">
                                            <Field name="agreeTerms" type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Agree terms</label>
                                            <ErrorMessage name="agreeTerms" />
                                        </div>
                                        <a href="/forgot-password">Forgot Password</a>
                                    </div>
                                    <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Sign Up</button>
                                </Form>
                                <p className="text-center mb-0">Already have an Account? <a href="/login">Sign In</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Formik>
        </>
    )
}
export default Register;