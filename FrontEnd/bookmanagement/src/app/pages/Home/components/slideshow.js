const SlideShow = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://img6.thuthuatphanmem.vn/uploads/2022/04/15/anh-nen-ke-sach-dep-nhat_022005271.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://th.bing.com/th/id/R.68b6b2c12a0f43df118247767480f056?rik=rEOmqE%2bUobOCVA&pid=ImgRaw&r=0" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://th.bing.com/th/id/OIP.ykcAyL8Qv9LWK1uk5DjW8gHaE7?rs=1&pid=ImgDetMain" alt="Third slide" />
                    </div>
                </div>
                <button className="carousel-control-prev" data-bs-target="#carouselExampleControls" type="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" data-bs-target="#carouselExampleControls" type="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </>
    )
}
export default SlideShow;