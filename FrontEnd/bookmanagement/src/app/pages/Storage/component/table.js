import DataTable from "./BookTableData"

const BookTable = () => {
    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Pages</th>
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