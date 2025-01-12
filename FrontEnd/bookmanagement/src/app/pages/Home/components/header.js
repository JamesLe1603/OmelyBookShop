import { Link } from "react-router";
const PageHeader = () => {
    var Name = "Trung"
    var searchResult = ["danh","an"]
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-warning py-1 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center h-100">
                            <a className="text-body mr-3" href=''>About</a>
                            <Link className="text-body mr-3" to={`/contact.html`}>Contact</Link>
                            <a className="text-body mr-3" href=''>Help</a>
                            <a className="text-body mr-3" href=''>FAQs</a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <div className="btn-group">
                                {Name != null ? (
                                    <div className="dropdown-container">
                                        <span className='click-show btn '>Xin chào <b>{Name}</b></span>
                                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown"><i className='fa fa-cog'></i></button>
                                        <div className="dropdown-menu dropdown-menu-right  " style={{ marginTop: "35px" }}>
                                            <button className="dropdown-item " type="button"> <Link to={'/tai-khoan'} className='text-dark'><i className='fa fa-user mr-2'></i> Account</Link></button>
                                            <button  className="dropdown-item" type="button"><i className='fa fa-sign-out mr-2'></i> Log-out</button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">My Account</button>
                                        <div className="dropdown-menu dropdown-menu-right  " style={{ marginTop: "35px" }}>
                                            <Link to={"/login"}><button className="dropdown-item" type="button">Sign in </button></Link>
                                            <Link to={"/register"}><button className="dropdown-item" type="button">Sign up </button></Link>

                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="d-inline-flex align-items-center d-block d-lg-none">
                            <a href='' className="btn px-0 ml-2 p-2">
                                <i className="fa fa-heart text-dark mr-2" />
                                <span className="badge text-dark border  rounded-circle" style={{ paddingBottom: 2 }}>0</span>
                            </a>
                            <a href='/cart' className="btn px-0 ml-2 p-2">
                                <i className="fa fa-shopping-cart text-dark mr-2" />
                                <span className="badge text-dark border rounded-circle" style={{ paddingBottom: 2 }}>0</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
                    <div className="col-lg-4">
                        <Link to={`/`} className="text-decoration-none">
                            <span className="h1 text-uppercase text-warning bg-dark px-2">QT</span>
                            <span className="h1 text-uppercase text-dark bg-warning px-2 ml-n1">Shop</span>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-6 text-left" style={{ position: "relative" }}>
                        <form >
                            <div className="input-group">
                                <input type="text" className="form-control text-search" placeholder="Search for products" />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-warning">
                                        <i className="fa fa-search" />
                                    </span>
                                </div>
                            </div>
                        </form>
                        <div className='bg-light d-none ls-Product' style={{ position: "absolute", zIndex: "999" }}>
                            <div style={{ width: "550px", borderRadius: "20%" }}>
                                {searchResult.length > 0 ? (
                                    searchResult.map((item, index) => (
                                        <div key={index} className=" card-search">
                                            <Link to={`/chi-tiet-san-pham/${item.id}`}>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-4 d-flex" style={{ justifyContent: 'center' }}>
                                                            <img
                                                                style={{ width: 80, height: 80 }}
                                                                src={`https://localhost:7201${item.avatar}`}
                                                                className="card-img"
                                                                alt={item.productName}
                                                            />
                                                        </div>
                                                        <div className="col-md-8">
                                                            <h5 className="card-title">{item.productName}</h5>
                                                            <p className="card-text">
                                                                <b className="text-danger">
                                                                    Giá: 10000₫ <del style={{ color: '#999999' }}>30000₫</del>
                                                                </b>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                ) : (
                                    <h6>Không tìm thấy sản phẩm</h6>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6 text-right">
                        <p className="m-0">Customer Service</p>
                        <h5 className="m-0">+012 345 6789</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PageHeader;