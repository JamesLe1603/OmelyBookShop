import { useContext } from "react";
import { BookContext } from "../../shared/components/BookContext";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { number } from "yup";

const BookDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { setBook } = useContext(BookContext);
  const [book, setLocalBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);
  const [quantity, setQuantity] = useState(1); // Trạng thái cho số lượng
  const [cart, setCart] = useState([]); // Trạng thái lưu giỏ hàng
  const getBookInfo = async () => {
    try {
      const response = await axios.get(`https://localhost:7029/api/Book/book/${id}`);
      setLocalBook(response.data);
      setBook(response.data);
    } catch (error) {
      alert("Get book id error: ", error.message);
    } finally {
      setLoading(false);
    }
  }
  const getReviewsData = async (productId) => {
    try {
      const response = await axios.get(`https://localhost:7029/api/Review/book-review/${id}`);
      setReviews(response.data);
    } catch (error) {
      setReviews([]);
    }
  };

  const calculateRatingAvg = () => {
    console.log("review: ", reviews)
    if (!reviews || reviews.length === 0) {
      setAvgRating(0);
    }

    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    const average = total / reviews.length;

    setAvgRating(average.toFixed(1));
  };
  useEffect(() => {
    calculateRatingAvg();
  })
  useEffect(() => {
    getBookInfo();
    getReviewsData();
  }, [id]);
  if (loading) {
    return (
      <div className="container mt-5">
        <h2>Đang tải thông tin sách...</h2>
      </div>
    )
  }

  if (!book) {
    return (
      <div className="container mt-5">
        <h2 className="text-danger">Không tìm thấy sách!</h2>
      </div>
    );
  }
  else {
    getReviewsData();
    return (
      <div className="container mt-5 bg-secondary p-3">
        <div className="row">
          {/* Hình ảnh sách */}
          <div className="col-md-4">
            <img
              src={`https://localhost:7029${book.image}`}
              alt={book.title}
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Thông tin sách */}
          <div className="col-md-8">
            <h2 className="text-primary">{book.title}</h2>
            <p className="text-white">Author: {book.author.name}</p>
            <p className="text-white">Genre: {book.genre.name}</p>
            <p className="text-white">Publisher: {book.publisher.name}</p>
            <p className="text-white">Language: {book.language.name}</p>
            <h4 className="text-white">
              Rating: {avgRating}/5
            </h4>
            <h4 className="text-primary">Price: {book.price.toLocaleString()} VND</h4>
            <p className="mt-3">{book.description}</p>
            {/* Nút hành động */}
            <div className="mt-4">
              <div className="form-group d-flex align-items-center gap-3 mb-3">
                <label htmlFor="quantity" className="text-white">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  className="form-control w-25"
                  value={quantity}
                  min="1"
                  max={book.stock}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
                <span className="text-warning">Stock: {book.stock}</span>
              </div>
              <button className="btn btn-primary mr-3">
                <i className="fa fa-shopping-cart mr-2"></i>Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="mt-3">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="review">
                <hr className="hr" />
                <p>
                  <strong>{review.userName}:</strong> {review.comment}
                </p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
    );
  }
}
export default BookDetails;