import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../shared/components/BookContext";
import { useNavigate } from "react-router";
const ExampleForm = () => {
    const handleSubmit = async (values) => {
        const formData = new FormData();
        formData.append("file", values.image);
        console.log("form data: ", formData.get('file'));
        console.log("bianry", formData.get("file"))
        try {
            const response = await axios.post(
                "https://localhost:7029/api/File/upload-file",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data", // Automatically managed by FormData
                    },
                }
            );
        } catch (err) {
            console.log(err.message);
        }
    }
    return (
        <Formik initialValues={{
            image: null,
        }}
            validationSchema={Yup.object({
                image: Yup.mixed().required("required")
            })}
            onSubmit={handleSubmit}>
            {({ setFieldValue }) => (
                <Form>
                    <div className="container-fluid pt-4 px-4">
                        <div className="bg-secondary rounded h-100 p-4">
                            <h6 className="mb-4">BOOK ADDITION</h6>
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-infomation-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-infomation" type="button" role="tab" aria-controls="nav-home"
                                        aria-selected="true">Infomation</button>
                                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-profile" type="button" role="tab"
                                        aria-controls="nav-profile" aria-selected="false">Profile</button>
                                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-contact" type="button" role="tab"
                                        aria-controls="nav-contact" aria-selected="false">Contact</button>
                                </div>
                            </nav>
                            <div className="tab-content pt-4" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-infomation" role="tabpanel" aria-labelledby="nav-infomation-tab">
                                    <div class="row mb-3">
                                        <div className="row mb-5">
                                            <label htmlFor="image" className="col-sm-3 col-form-label">Book Image: </label>
                                            <div className="col-sm-9">
                                                <input
                                                    type="file"
                                                    name="image"
                                                    onChange={(event) => {
                                                        setFieldValue("image", event.currentTarget.files[0]); // Lấy tệp từ input
                                                    }}
                                                />
                                                <ErrorMessage name="image" className="text-danger" component="div" />
                                            </div>
                                        </div>




                                    </div>

                                    <div className="row d-flex flex-row-reverse">
                                        <div className="col-sm-3">
                                            <button className="btn btn-primary">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>)}
        </Formik>
    )
}
export default ExampleForm;