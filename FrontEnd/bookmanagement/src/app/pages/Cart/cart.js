const Cart = () => {
    // Sample data for cart items
    const cartItems = [
        {
            id: 1,
            name: "Book 1",
            price: 150,
            quantity: 2,
            image: "https://via.placeholder.com/50",
        },
        {
            id: 2,
            name: "Book 2",
            price: 200,
            quantity: 1,
            image: "https://via.placeholder.com/50",
        },
    ];

    // Calculate total price
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Shopping Cart</h2>
            <div className="row">
                <div className="col-md-8">
                    {cartItems.length > 0 ? (
                        <table className="table table-hover">
                            <thead className="table-secondary">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <tr key={item.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="img-thumbnail me-2"
                                                    style={{ width: "50px", height: "50px" }}
                                                />
                                                <span>{item.name}</span>
                                            </div>
                                        </td>
                                        <td>${item.price.toFixed(2)}</td>
                                        <td>{item.quantity}</td>
                                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                                        <td>
                                            <button className="btn btn-sm btn-danger me-2">
                                                <i className="fa fa-trash"></i>
                                            </button>
                                            <button className="btn btn-sm btn-primary">
                                                <i className="fa fa-edit"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="alert alert-warning" role="alert">
                            Your cart is empty.
                        </div>
                    )}
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Order Summary</h5>
                            <hr />
                            <p className="card-text">
                                <strong>Total Items:</strong> {cartItems.reduce((total, item) => total + item.quantity, 0)}
                            </p>
                            <p className="card-text">
                                <strong>Total Price:</strong> ${calculateTotal().toFixed(2)}
                            </p>
                            <button className="btn btn-success w-100">Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
