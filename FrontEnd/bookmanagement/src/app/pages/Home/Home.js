
import Footer from "./components/footer";
import PageHeader from "./components/header";
import Menu from "./components/menu";
var Home = () => {
    const services = [
        {
            id: 1,
            title: "Book Rental",
            description: "Rent your favorite books at affordable prices.",
          },
          {
            id: 2,
            title: "Book Subscription",
            description: "Subscribe to get new releases every month.",
          },
          {
            id: 3,
            title: "Book Recommendations",
            description: "Get personalized book recommendations based on your interests.",
          },
      ];
    
      return (
        <>
          <h1>Home Page</h1>
          <div className="container mt-4">
            <h2>Our Services</h2>
            <div className="row ">
              {services.map((service) => (
                <div className="col-md-4 " key={service.id}>
                  <div className="card  mb-4 bg-secondary">
                    <div className="card-body ">
                      <h5 className="card-title text-white">{service.title}</h5>
                      <p className="card-text text-white">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
}
export default Home;
