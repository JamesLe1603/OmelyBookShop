import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";

const Category = () => {
    const [categories, setCategories] = useState([]); // List of categories
    const [loading, setLoading] = useState(true); // Data loading state
    const [error, setError] = useState(null); // Error state
    const [showModal, setShowModal] = useState(false); // Modal visibility
    const [currentCategory, setCurrentCategory] = useState({ id: null, categoryName: "" }); // Current category state
    const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
    // Fetch category data from API
    const getCategoryData = async () => {
        try {
            const res = await axios.get("https://localhost:7029/api/Category/category-data");
            setCategories(res.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    console.log(currentCategory);
    // Save or update category
    const handleSaveCategory = async () => {
        if (currentCategory.categoryName.trim() === "") {
            alert("Category name cannot be empty!"); // Check for empty input
            return;
        }

        try {
            console.log(currentCategory);
            if (currentCategory.categoryId) {
                // Edit category
                await axios.put(`https://localhost:7029/api/Category/edit-category/${currentCategory.categoryId}`, {
                    categoryName: currentCategory.categoryName,
                });
                setCategories((prev) =>
                    prev.map((cat) =>
                        cat.id === currentCategory.categoryId ? { ...cat, categoryName: currentCategory.categoryName } : cat
                    )
                );
            } else {
                // Add new category
                const res = await axios.post("https://localhost:7029/api/Category/add-category", {
                    categoryName: currentCategory.categoryName,
                });
                setCategories((prev) => [...prev, res.data]); // Append new category
            }

            // Close modal and reset state
            setShowModal(false);
            setCurrentCategory({ id: null, categoryName: "" });
        } catch (err) {
            console.error("Error while saving category:", err);
        }
    };

    // Open modal for editing category
    const handleEditCategory = (category) => {
        setCurrentCategory(category); // Set current category
        setShowModal(true); // Show modal
    };
    const handleDeleteCategory = (category) => {
        setCurrentCategory(category); // Set current category for deletion
        setShowConfirmDeleteModal(true); // Show delete confirmation modal
    };

    // Confirm delete category
    const confirmDeleteCategory = async () => {
        try {
            await axios.delete(`https://localhost:7029/api/Category/delete-category/${currentCategory.categoryId}`);
            setCategories((prev) => prev.filter((cat) => cat.id !== currentCategory.categoryId)); // Remove deleted category from list
            setShowConfirmDeleteModal(false); // Close confirmation modal
            setCurrentCategory({ id: null, categoryName: "" }); // Reset current category
        } catch (err) {
            console.error("Error while deleting category:", err);
        }
    };
    // Fetch data on component mount
    useEffect(() => {
        getCategoryData();
    }, []);

    return (
        <>
            <Helmet>
                <title>Omely Categories</title>
            </Helmet>
            <div className="container-fluid pt-4 px-4">
                <div className="bg-secondary rounded p-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h6 className="mb-3">Category Management</h6>
                        <button
                            className="btn btn-success"
                            onClick={() => {
                                setCurrentCategory({ id: null, categoryName: "" });
                                setShowModal(true);
                            }}
                        >
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p className="text-danger">Error: {error}</p>
                    ) : (
                        <ul className="list-group">
                            {categories.map((category) => (
                                <li
                                    key={category.categoryId}
                                    className="list-group-item bg-light text-dark mb-3 d-flex justify-content-between align-items-center"
                                >
                                    <b>{category.categoryName}</b>
                                    <div>
                                        <Link className="btn btn-info m-3" to="/admin/genre">
                                            <i className="fa fa-file"></i>
                                        </Link>
                                        <button
                                            className="btn btn-warning"
                                            onClick={() => handleEditCategory(category)}
                                        >
                                            <i className="fa fa-pen"></i>
                                        </button>
                                        <button className="btn btn-danger m-3"
                                            onClick={() => handleDeleteCategory(category)}
                                        >
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal show d-block" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content bg-secondary">
                            <div className="modal-header">
                                <h3 className="modal-title">
                                    {currentCategory.categoryId ? "Edit Category" : "New Category"}
                                </h3>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="categoryName" className="form-label">
                                        Category Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="categoryName"
                                        value={currentCategory.categoryName}
                                        onChange={(e) =>
                                            setCurrentCategory((prev) => ({
                                                ...prev,
                                                categoryName: e.target.value,
                                            }))
                                        }
                                        placeholder="Enter category name"
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleSaveCategory}
                                >
                                    {currentCategory.categoryId ? "Save" : "Add"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Modal for delete confirmation */}
            {showConfirmDeleteModal && (
                <div className="modal show d-block" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content bg-secondary">
                            <div className="modal-header">
                                <h3 className="modal-title">Confirm Delete</h3>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowConfirmDeleteModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this category?</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setShowConfirmDeleteModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={confirmDeleteCategory}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Category;