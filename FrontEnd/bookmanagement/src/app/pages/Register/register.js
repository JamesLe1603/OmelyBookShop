import axios from "axios";
import * as Yup from "yup"
import { Form, Formik, Field, ErrorMessage } from "formik";
const Register = () => {
    const handleSignUp = async (values, { resetForm }) => {
        const formData = new FormData();
        formData.append("avatar",values.avatar);
        formData.append("username",values.username);
        formData.append("password",values.password);
        formData.append("firstName",values.firstName);
        formData.append("lastName",values.lastName);
        console.log("form-data: ",formData)
        try{
            const response = await axios.post("https://localhost:7086/api/Account/register", formData, {
                headers: {
                    "Content-Type" : "multipart/form-data"
                }
            })
        }
        catch(err) {
            alert("Error during sign up", err.message);
        }
    }
    return (

        <div className="container p-3 mt-3">
            <h2 className="text-center my-4">Sign Up</h2>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    username: "",
                    password: "",
                    email: "",
                    avatar: null
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string().required("Required field!"),
                    lastName: Yup.string().required("Required field!"),
                    username: Yup.string().required("Required field!"),
                    password: Yup.string().required("Required field!"),
                    email: Yup.string().required("Required field!").email("Invalid email"),
                    avatar: Yup.mixed().required("Required field!")
                })}
                onSubmit={handleSignUp}
            >
                {({ setFieldValue }) => (
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="avatar" className="form-label">Avatar</label>
                            <input 
                                type="file" 
                                className="form-control" 
                                id="avatar" 
                                name="avatar" 
                                onChange={(event) => {
                                    setFieldValue("avatar", event.currentTarget.files[0]);
                                }} 
                            />
                            <ErrorMessage name="avatar" component="div" className="text-danger" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <Field
                                name="firstName"
                                type="text"
                                className="form-control"
                                id="firstName"
                                placeholder="John"
                            />
                            <ErrorMessage name="firstName" component="div" className="text-danger" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <Field
                                name="lastName"
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="Doe"
                            />
                            <ErrorMessage name="lastName" component="div" className="text-danger" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <Field
                                name="username"
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="jhondoe"
                            />
                            <ErrorMessage name="username" component="div" className="text-danger" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <Field
                                name="email"
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="name@example.com"
                            />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <Field
                                name="password"
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                            />
                            <ErrorMessage name="password" component="div" className="text-danger" />
                        </div>

                        <button type="submit" className="btn btn-primary w-100 mb-3">Sign Up</button>
                        <p className="text-center">Already have an account? <a href="/login">Sign In</a></p>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export default Register;