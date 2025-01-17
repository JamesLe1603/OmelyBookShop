const Services = () => {
  const services = [
    {
      id: 1,
      title: "Product Sales",
      description: "Explore a wide range of products available for sale at competitive prices. Enjoy a seamless shopping experience with easy navigation and secure payment options.",
      bgImage: "https://www.google.com.vn/url?sa=i&url=https%3A%2F%2Fwww.ukiyoto.com%2Fpost%2Fboosting-book-sales-through-engaging-events-and-activities&psig=AOvVaw1ET0hJyq3hdUafwqTKVWX5&ust=1737170548023000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjYyOvm-4oDFQAAAAAdAAAAABAE",
    },
    {
      id: 2,
      title: "Fast Delivery",
      description: "Get your products delivered quickly and securely to your doorstep. We offer fast shipping services to ensure your orders arrive on time.",
      bgImage: "https://www.kungfudelivery.vn/en/fast-delivery-with-KUNGFU.html",
    },
    {
      id: 3,
      title: "Customer Support",
      description: "Our dedicated customer support team is always available to assist you with any queries or issues. We strive to provide the best service and ensure your satisfaction.",
      bgImage: "https://www.google.com.vn/url?sa=i&url=https%3A%2F%2Fotrs.com%2Fotrsmag%2Fcustomer-service-and-company-growth%2F&psig=AOvVaw3TME7Gp2Fpdxf7Dgj4Ncne&ust=1737170650347000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPiLl5Dn-4oDFQAAAAAdAAAAABAE",
    },
    {
      id: 4,
      title: "Return and Refund Policy",
      description: "We offer a hassle-free return and refund policy. If you're not satisfied with your purchase, you can return it within the specified period for a full refund or exchange.",
      bgImage: "https://www.google.com.vn/url?sa=i&url=https%3A%2F%2Facdrive.ca%2Freturn-refund-policy%2F&psig=AOvVaw2cOr90GG5H_WhKS_YS3jD-&ust=1737170699185000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjSv6jn-4oDFQAAAAAdAAAAABAE",
    },
    {
      id: 5,
      title: "Gift Cards",
      description: "Buy and send gift cards to your loved ones for any occasion. Our gift cards can be used on all our products and services, giving them the freedom to choose.",
      bgImage: "https://www.google.com.vn/url?sa=i&url=https%3A%2F%2Fsmockgolf.com%2Fproduct%2F25-gift-card%2F&psig=AOvVaw2DD7lr_9IkiGsCd6qJaHqF&ust=1737170738808000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPiZl8bn-4oDFQAAAAAdAAAAABAE",
    },
  ];
  
  return (
    <div className="container mt-5">
      <h2 className="text-primary text-center mb-4">Services</h2>
      <div className="row">
        {services.map((service) => (
          <div className="col-md-4" key={service.id}>
            <div 
              className="card mb-4" 
              style={{
                backgroundImage: service.bgImage,
                backgroundSize: "cover", // Đảm bảo ảnh lấp đầy thẻ
                backgroundPosition: "center", // Căn giữa ảnh
                height: "250px", // Chiều cao của thẻ
                color: "white", // Màu chữ
              }}
            >
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
