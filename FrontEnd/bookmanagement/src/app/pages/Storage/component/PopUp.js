import { useContext, useEffect } from "react";
import { ModalContext } from "./ModalContext";
import { Form, Formik, Field } from "formik";
import { BookContext } from "../../../shared/components/BookContext";
import axios from "axios";
import * as Yup from "yup";

const SettingPopUp = () => {
    const { show, setShow } = useContext(ModalContext);
    const { bookList, setBookList } = useContext(BookContext)
    const handleClose = () => {
        setShow(false)
    }
    const handleAdd = (values) => {
        axios.post('https://localhost:7029/api/Book/add-book', values)
            .then(res => {
                setBookList([...bookList], res.data);
                setShow(false);
            })
    }
    console.log(show)
    return (
        <>
            {show && (
                <>
                    <div className="modal-backdrop show"></div>

                    <div className="modal-dialog show" style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 1050,
                        width: "30%"
                    }}>
                        <div className="modal-content show bg-secondary rounded" >
                            <Formik
                                initialValues={{
                                    title: "",
                                    description: "",
                                    price: "",
                                    pageNumber: "",
                                }}
                                validationSchema={Yup.object({
                                    title: Yup.string().required("Required!"),
                                    description: Yup.string().required("Required!"),
                                    price: Yup.number().required("Required!"),
                                    pageNumber: Yup.number().required("Required!"),
                                })}
                                onSubmit={handleAdd}
                            >
                                <Form>
                                    <div className="modal-header">
                                        <h5 className="modal-title">Book Addition</h5>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-floating mb-3">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                id="floatingText"
                                                placeholder="book title"
                                                name="title"
                                            />
                                            <label htmlFor="floatingText">Title</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                id="floatingDescription"
                                                placeholder="book description"
                                                name="description"
                                            />
                                            <label htmlFor="floatingDescription">Description</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                id="floatingPrice"
                                                placeholder="book price"
                                                name="price"
                                            />
                                            <label htmlFor="floatingPrice">Price</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                id="floatingPages"
                                                placeholder="book page number"
                                                name="pageNumber"
                                            />
                                            <label htmlFor="floatingPages">Pages</label>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={handleClose}
                                        >
                                            Close
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Save changes
                                        </button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
export default SettingPopUp;