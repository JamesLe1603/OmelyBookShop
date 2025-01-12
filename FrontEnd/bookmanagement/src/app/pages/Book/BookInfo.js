import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup"
const BookInfomation = () => {
    return (

        <Formik initialValues={{
            title: "",
            price: "",
            description: "",
            pageNumber: "",
            image: "",
            genre: "",
            language: "",
            publisher: "",
            author: ""
        }}
            validationSchema={Yup.object({
                title: Yup.string().required("required!"),
                price: Yup.string().required("required"),
                description: Yup.string().required("required"),
                pageNumber: Yup.string().required("required"),
                image: Yup.string().required("required"),
                genre: Yup.string().required("required"),
                language: Yup.string().required("required"),
                publisher: Yup.string().required("required"),
                author: Yup.string().required("required"),
            })}>
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
                                    <div className="col-sm-3 d-flex flex-column align-items-center" >
                                        <div className="square-image mb-2" style={{ width: "200px", height: "400px", backgroundColor: "#ccc" }}></div>
                                        <button className="btn btn-sm btn-primary">Add Image</button>
                                    </div>
                                    <div className="col-sm-5">
                                        <div className="row mb-5">
                                            <label htmlFor="title" className="col-sm-3 col-form-label">Title:</label>
                                            <div className="col-sm-9">
                                                <Field type="text" class="form-control" id="title" name="title" />
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <label htmlFor="genre" className="col-sm-3 col-form-label">Genre:</label>
                                            <div className="col-sm-9">
                                                <Field type="text" class="form-control" id="genre" name="genre" />
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <label htmlFor="description" className="col-sm-3 col-form-label">Description:</label>
                                            <div className="col-sm-9">
                                                <textarea type="text" class="form-control" id="description" name="description" />
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <label htmlFor="price" className="col-sm-3 col-form-label">Price:</label>
                                            <div className="col-sm-9">
                                                <Field type="text" class="form-control" id="price" name="price" />
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <label htmlFor="language" className="col-sm-3 col-form-label">Language:</label>
                                            <div className="col-sm-9">
                                                <Field type="text" class="form-control" id="language" name="language" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-8  d-flex justify-content-between">
                                        <div className="row mb-5">
                                            <label htmlFor="language" className="col-sm-5 col-form-label">Author:</label>
                                            <div className="col-sm-7">
                                                <Field type="text" class="form-control" id="author" name="author" />
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <label htmlFor="language" className="col-sm-5 col-form-label">Publisher:</label>
                                            <div className="col-sm-7">
                                                <Field type="text" class="form-control" id="publisher" name="publisher" />
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
            </Form>
        </Formik>
    )
}
export default BookInfomation;
{/* <div className="content mt-3  ">
<div className="animated fadeIn">

    <Tabs>
        <Tab eventKey={1} title="Thông tin sản phẩm">
            <Form className="card p-3">
                <Form.Group className="mb-3 row p-3" >
                    <div className="col-6">
                        <Form.Label>Tên sản phẩm</Form.Label>
                        <Form.Control name="ProductName" type="text" placeholder="Nhập mã sản phẩm" />
                    </div>
                    <div className="col-6">
                        <Form.Label>Mã sản phẩm</Form.Label>
                        <Form.Control name="SKU" type="text" placeholder="Nhập mã sản phẩm" />
                    </div>
                    <div className="col-6">
                        <Form.Label>Ảnh sản phẩm</Form.Label>
                        <Form.Control accept="image/*" multiple name="AvatarFile" type="file" />
                    </div>
                    <div className="col-6">
                        <Form.Label>Tồn kho</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control name="Stock" type="number" min={0} placeholder="Nhập tồn kho" />
                        </InputGroup>
                    </div>
                    <div className="col-6">
                        <Form.Label>Danh mục</Form.Label>
                    </div>

                </Form.Group>
                <Form.Group className="mb-3 row p-3" >
                    <div className="col-6">
                        <Form.Label>Giá bán</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control name="Price" type="number" min={0} placeholder="Nhập giá bán" />
                            <InputGroup.Text >.000 VNĐ</InputGroup.Text>
                        </InputGroup>
                    </div> */}
{/* <div className="col-6">
                    <Form.Label>Giá khuyến mãi</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control onChange={handleChange} name="SalePrice" type="number" min={0} placeholder="Nhập khuyến mãi" />
                        <InputGroup.Text>.000 VNĐ</InputGroup.Text>
                    </InputGroup>
                </div> */}
{/* <div className="col-6">
                        <Form.Label>Bảo hành</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control name="Warranty" type="number" min={0} placeholder="Nhập bảo hành" />
                            <InputGroup.Text>Tháng</InputGroup.Text>
                        </InputGroup>
                    </div>
                    <div className="col-6">
                        <Form.Label>Loại bảo hành</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control name="WarrantyType" type="text" placeholder="Nhập loại bảo hành" />
                            {/* <InputGroup.Text>Tháng</InputGroup.Text> */}
//                         </InputGroup>
//                     </div>
//                     <div className="col-6">
//                         <Form.Label>Hãng sản xuất</Form.Label>
//                         <Form.Select name="BrandId" className="form-control" >
//                             <option value={0} selected>Chọn hãng sản xuất</option>
//                         </Form.Select>

//                     </div>
//                     <div className=" col-6 row align-item-center">
//                         <div className="col-6">
//                             <Form.Group className="mb-3" >
//                                 <Form.Check name="BestSeller" type="checkbox" label="Nổi bật" />
//                             </Form.Group>
//                         </div>
//                         <div className="col-6">
//                             <Form.Group className="mb-3" >
//                                 <Form.Check name="Active" type="checkbox" label="Trạng thái" />
//                             </Form.Group>
//                         </div>
//                     </div>
//                 </Form.Group>
//                 <hr></hr>
//                 <Button className="col-1 btn btn-success " type="button">
//                     <i className="fa fa-plus text-white"> Tạo mới</i>
//                 </Button>
//             </Form>
//         </Tab>
//         <Tab eventKey={2} title="Thuộc tính sản phẩm"  >
//             <Form className="card p-3">
//                 <h4>Chọn danh sách thuộc tính cho sản phẩm</h4>



//             </Form>
//         </Tab>
//     </Tabs>
// </div>
// </div> .content */}