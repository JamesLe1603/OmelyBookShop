import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../../shared/components/BookContext";
import axios from "axios";

const DataTable = () => {
    const [bookList,setBookList] = useState([])

    console.log(bookList)
    useEffect( ()=>{
        const getData = async () => {
            try {
                const response = await axios.get('https://localhost:7029/api/Book/book-data');
                setBookList(response.data);
            }
            catch (error) {
                alert("error: ",error.message);
            }
        };
        getData();
    })
    return (
        <>
            {bookList.map((book,index) => (
                <tr key={index}>
                    <th scope="col">{index+1}</th>
                    <td scope="col">{book.title}</td>
                    <td scope="col"><img src={`https://localhost:7029${book.image}`} 
                        className="img-thumbnail"
                        style={{maxWidth: "100px",height: "auto"}}
                        alt={book.title} 
                    /></td>
                    <td scope="col">{book.genre.name}</td>
                    <td scope="col">{book.description}</td>
                    <td scope="col">{book.price}</td>
                    <td scope="col">{book.pageNumber}</td>
                    <td scope="col">{book.author.name}</td>
                    <td scope="col">{book.publisher.name}</td>
                    <td scope="col">{book.language.name}</td>
                    <td scope="col">
                        <button type="button" class="btn btn-square btn-outline-warning m-2"><i class="fa fa-pen"></i></button>
                        <button type="button" class="btn btn-square btn-outline-danger m-2"><i class="fa fa-trash"></i></button>
                    </td>
                </tr>
            ))}
        </>
    )
}
export default DataTable;