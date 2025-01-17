import DataTable from "./BookTableData"

const BookTable = () => {
    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Title</th>
                    <th scope="col">Image</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Pages</th>
                    <th scope="col">Author</th>
                    <th scope="col">Publisher</th>
                    <th scope="col">Language</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <DataTable/>
            </tbody>
        </table>
    )
}
export default BookTable;