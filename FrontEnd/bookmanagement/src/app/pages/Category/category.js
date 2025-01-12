import axios from "axios";
import { useEffect, useState } from "react";

var Category = () => {
    const [categories,setCategories] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] =useState(null);

    const getCategoryData = async () => {
        try {
            const res = await axios.get("https://localhost:7029/api/Category/category-data");
            setCategories(res.data);
            setLoading(false);
        }
        catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        getCategoryData();
    },[])
    console.log(categories)
    return (
        <>
            <div class="container-fluid pt-4 px-4">
                <div class="bg-secondary rounded p-4">
                    <h6 class="mb-0">Category Management</h6>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error? (
                        <p className="text-danger">Error: {error}</p>
                    ) : (
                        <ul className="list-group ">
                            {categories.map((category,index)=> (
                                <li key={index} className="list-group-item ">
                                    {category.categoryName}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}
export default Category;