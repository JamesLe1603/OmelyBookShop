import axios from "axios";
import { useContext, useEffect } from "react";
import { BookContext } from "../../../shared/components/BookContext";

const DataTable = () => {
    const { bookList, setBookList } = useContext(BookContext)
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get("https://localhost:7029/api/Book/book-data");
            setBookList(res.data);
        };
        getData()
    }, []);
    return (
        <>
            {bookList.map(book => (
                <tr>
                    <th key={book.id}>{book.id}</th>
                    <td>{book.title}</td>
                    <td>{book.description}</td>
                    <td>{book.price}</td>
                    <td>{book.pageNumber}</td>
                    <td>
                        <button type="button" class="btn btn-square btn-outline-warning m-2"><i class="fa fa-pen"></i></button>
                        <button type="button" class="btn btn-square btn-outline-danger m-2"><i class="fa fa-trash"></i></button>
                    </td>
                </tr>
            ))}
        </>
    )
}
export default DataTable;