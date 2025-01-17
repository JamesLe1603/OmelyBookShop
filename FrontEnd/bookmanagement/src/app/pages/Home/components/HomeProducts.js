import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BookContext } from "../../../shared/components/BookContext";
import { Link, useNavigate } from "react-router";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { FaHeart, FaShoppingCart } from "react-icons/fa"
import { UserContext } from "../../../shared/components/UserContext";

const BookCard = ({ products, selectBook }) => {
    const {user} = useContext(UserContext)
    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState([]);
    const toggleFavorite = (productId) => {
        setFavorites((prev) =>
            prev.includes(productId)
                ? prev.filter((id) => id !== productId)
                : [...prev, productId]
        );
    };

    const addToCart = (product) => {
        setCart((prev) => {
            const isProductInCart = prev.find((item) => item.id === product.id);
            if (isProductInCart) {
                alert("This product is already in your cart!");
                return prev;
            }
            return [...prev, product];
        });
    };
    return (
        <>
            {products.map(product => (
                <div className="col-md-3" key={product.id}>
                    <div className="card mb-4 bg-secondary" style={{ width: "100%" }} >


                        <Link to={`/book-detail/${product.id}`} className="btn btn-primary" onClick={() => selectBook(product.id)}>
                            <img src={`https://localhost:7029${product.image}`} className="card-img-top" alt={product.title} />

                            <div className="card-body" style={{ height: "300px" }}>
                                <h5 className="card-title">{product.title}</h5>
                                <div className="row" style={{ maxHeight: "100px" }}>
                                    <p className="book-item-description card-text">{product.description}</p>
                                </div>
                                <p className="card-text font-weight-bold">{product.price} VND</p>
                                <p className="text-warning">Remaining Quantity: {product.stock}</p>
                                {/* Hiển thị số lượng realtime */}
                            </div>
                        </Link>
                        <div className="mt-3 d-flex justify-content-center gap-3">
                            {/* Yêu thích */}
                            {user? (
                                <button
                                className={`btn btn-sm ${favorites.includes(product.id) ? "btn-danger" : "btn-outline-danger"
                                    }`}
                                onClick={() => toggleFavorite(product.id)}
                            >
                                <FaHeart />
                            </button>
                            ):(<></>)}
                            

                            {/* Giỏ hàng */}
                            <button
                                className="btn btn-sm btn-primary"
                                onClick={() => addToCart(product)}
                            >
                                <FaShoppingCart />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
const HomeProducts = () => {
    const [products, setProducts] = useState([])
    const [connection, setConnection] = useState(null)
    const { setBook } = useContext(BookContext)
    const navigate = useNavigate();
    const getData = async () => {
        try {
            const response = await axios.get("https://localhost:7029/api/Book/book-data")
            setProducts(response.data);
        } catch (err) {

        }
    };

    const handleInventoryUpdated = (updatedProduct) => {
        setProducts((prev) => {
            return prev.map(product =>
                product.id === updatedProduct.id ? updatedProduct : product
            )
        })
    };

    const startSignalRConnection = () => {
        const connection = new HubConnectionBuilder()
            .withUrl("https://localhost:7029/inventoryHub")
            .withAutomaticReconnect()
            .build();
        connection.start()
            .then(() => {
                console.log("SignalR Connected");
            })
            .catch(err => console.log("Error connecting to SignalR:", err));

        // Lắng nghe sự thay đổi số lượng sản phẩm
        connection.on("ReceiveInventoryUpdate", handleInventoryUpdated);
        setConnection(connection);
    }
    const getBookDetail = async (id) => {
        try {
            const response = await axios.get(`https://localhost:7029/api/Book/book/${id}`)
            setBook(response.data)
        } catch (error) {
            console.log(error.message)
        } finally {
            navigate(`/book-detail/${id}`)
        }
    }
    useEffect(() => {
        getData();
        startSignalRConnection();

        return () => {
            if (connection) {
                connection.stop();
            }
        }
    }, [])
    console.log(products)
    return (
        <>
            <div className="container mt-5">
                <h2 className="text-primary text-center mb-4">Hot Books</h2>
                <div className="d-flex flex-wrap">  
                    <div className="row">
                        <BookCard products={products} selectBook={getBookDetail} />
                    </div>
                </div>


                <h2 className="text-primary text-center mb-4 pt-4">New Books</h2>
                <div className="row">
                    <BookCard products={products} selectBook={getBookDetail} />
                </div>
            </div>
        </>
    )
}
export default HomeProducts;