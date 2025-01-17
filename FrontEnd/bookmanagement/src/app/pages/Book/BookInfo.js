import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../shared/components/BookContext";
import { useNavigate } from "react-router";
const BookInfomation = () => {
    const {setBookList} = useContext(BookContext);
    const [languageData,setLanguageData] = useState([]);
    const [genreData,setGenreData] = useState([]);
    const [publisherData,setPublisherData] = useState([]);
    const [authorData,setAuthorData] = useState([]);
    const navigate = useNavigate();
    const getLanguageData = async () => {
        try {
            const languageRes = await axios.get('https://localhost:7029/api/Language/language-data')
            setLanguageData(languageRes.data);
        } catch (error) {
            console.log("error: ",error.message)
        }
    }
    const getPublisherData = async () => {
        try {
            const publisherRes = await axios.get('https://localhost:7029/api/Publisher/publisher-data')
            setPublisherData(publisherRes.data);
        } catch (error) {
            console.log("error: ",error.message)
        }
    }
    const getAuthorData = async () => {
        try {
            const authorRes = await axios.get('https://localhost:7029/api/Author/author-data')
            setAuthorData(authorRes.data);
        } catch (error) {
            console.log("error: ",error.message)
        }
    }
    const getGenreData = async () => {
        try {
            const genreRes = await axios.get('https://localhost:7029/api/Genre/genre-data')
            setGenreData(genreRes.data)
        } catch (error) {
            console.log("error: ",error.message)
        }
    }
    const handleSubmit = async (values) => {
        const formData = {
            "title" : values.title,
            "price" : values.price,
            "description": values.description,
            "pageNumber": values.pageNumber,
            "bookImage": values.image,
            "genreId": values.genre,
            "languageId": values.language,
            "publisherId": values.publisher,
            "authorId": values.author
        };
        console.log("Image value: ",values.image.name)
        console.log("form value: ",values);
        console.log("form-data: ",formData);
        try {
            const response = await axios.post("https://localhost:7029/api/Book/add-book", formData,{
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            setBookList(prev => [...prev, response.data]); // Cập nhật danh sách sách
            alert("Sách đã được thêm thành công!"); // Thông báo cho người dùng
            console.log("book-data: ",response)
        } catch (error) {
            alert("Đã xảy ra lỗi: " + error.message); 
            console.log("book-error: ",error.response);
        } finally {
            
        }
    };
    useEffect(() => {
        getAuthorData();
        getGenreData();
        getLanguageData();
        getPublisherData();
    },[])
    return (
        <Formik initialValues={{
            title: "",
            price: "",
            description: "",
            pageNumber: "",
            stock: "",
            image: null,
            genre: null,
            language: null,
            publisher: null,
            author: null
        }}
            validationSchema={Yup.object({
                title: Yup.string().required("required"),
                price: Yup.string().required("required"),
                description: Yup.string().required("required"),
                pageNumber: Yup.number().required("required"),
                image: Yup.string().required("required"),
                genre: Yup.string().required("Please choose 1 genre!"),   
                language: Yup.string().required("Please choose 1 language!"),
                publisher: Yup.string().required("Please choose 1 publisher!"),
                author: Yup.string().required("Please choose 1 author!"),
                stock: Yup.string().required("Required!")
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
                                            <input type="file" className="form-control bg-dark" id="image" name="image" onChange={(event) => {
                                            setFieldValue("image", event.currentTarget.files[0]);
                                        }}/>
                                            <ErrorMessage name="image" className="text-danger" component="div"/>
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                        <label htmlFor="title" className="col-sm-3 col-form-label">Title:</label>
                                        <div className="col-sm-9">
                                            <Field type="text" class="form-control" id="title" name="title" />
                                            <ErrorMessage name="title" className="text-danger" component="div"/>
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                        <label htmlFor="genre" className="col-sm-3 col-form-label">Genre:</label>
                                        <div className="col-sm-9">
                                            <Field as="select" class="form-control" id="genre" name="genre" >
                                                <option value="">Choose genre</option>
                                                {genreData.map(i=>(
                                                    <option value={i.id}>{i.name}</option>
                                                ))}
                                            </Field>
                                            <ErrorMessage name="genre" className="text-danger" component="div"/>
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                        <label htmlFor="description" className="col-sm-3 col-form-label">Description:</label>
                                        <div className="col-sm-9">
                                            <Field type="text" class="form-control" id="description" name="description" />
                                            <ErrorMessage name="description" className="text-danger" component="div"/>
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                        <label htmlFor="price" className="col-sm-3 col-form-label">Price:</label>
                                        <div className="col-sm-9">
                                            <Field type="text" class="form-control" id="price" name="price" />
                                            <ErrorMessage name="price" className="text-danger" component="div"/>
                                        </div>
                                    </div>
                                        <div className="row mb-5">
                                            <label htmlFor="language" className="col-sm-3 col-form-label">Language:</label>
                                            <div className="col-sm-9">
                                                <Field as="select" className="form-select" name="language">
                                                    <option value="">Choose Lanaguage</option>
                                                    {languageData.map(i => (
                                                        <option value={i.id}>{i.name}</option>
                                                    ))}
                                                </Field>
                                                <ErrorMessage name="language" className="text-danger" component="div" />
                                            </div>
                                        </div>

                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-8  d-flex justify-content-between">
                                        <div className="row mb-5">
                                            <label htmlFor="language" className="col-sm-5 col-form-label">Author:</label>
                                            <div className="col-sm-7">
                                                <Field as="select" class="form-control" id="author" name="author">
                                                    <option selected value="">Choose Author</option>
                                                    {authorData.map(i => (
                                                        <option value={i.id}>{i.name}</option>
                                                    ))}
                                                </Field>
                                                <ErrorMessage name="author" className="text-danger" component="div" />
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <label htmlFor="language" className="col-sm-5 col-form-label">Publisher:</label>
                                            <div className="col-sm-7">
                                                <Field as="select" class="form-control" id="publisher" name="publisher">
                                                    <option selected value="">Choose Publisher</option>
                                                    {publisherData.map(i=> (
                                                        <option value={i.id}>{i.name}</option>
                                                    ))}
                                                </Field>
                                                <ErrorMessage name="publisher" className="text-danger" component="div"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-sm-8  d-flex justify-content-between">
                                        <div className="row mb-5">
                                            <label htmlFor="language" className="col-sm-5 col-form-label">Page number:</label>
                                            <div className="col-sm-7">
                                                <Field type="text" class="form-control" id="pageNumber" name="pageNumber" />
                                                <ErrorMessage name="pageNumber" className="text-danger" component="div"/>
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <label htmlFor="stock" className="col-sm-5 col-form-label">Stock:</label>
                                            <div className="col-sm-7">
                                                <Field type="text" class="form-control" id="stock" name="stock" />
                                                <ErrorMessage name="stock" className="text-danger" component="div"/>
                                            </div>
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
export default BookInfomation;