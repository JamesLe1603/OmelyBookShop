import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import axios from "axios"

const Products = () => {
    const [books,setBooks] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('https://localhost:7029/api/Book/book-data');
            console.log(res);  
            setBooks(res.data);
        };
        getData();
    }, []);
    return (
        <>
            {books && (
                <div className="col-12">
                    <div className="bg-secondary rounded h-100 p-4">
                        <h6 className="mb-4">Book List</h6>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Pages</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {books.map(book => (
                                        <tr>
                                            <th key={book.id}>{book.id}</th>
                                            <td>{book.title}</td>
                                            <td>{book.description}</td>
                                            <td>{book.price}</td>
                                            <td>{book.pageNumber}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default Products;