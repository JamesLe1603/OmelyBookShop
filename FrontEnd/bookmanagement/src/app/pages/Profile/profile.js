import { useContext, useState } from "react";
import { UserContext } from "../../shared/components/UserContext";

const Profile = () => {
    // Sample user data
    const currentUser = {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "123-456-7890",
        address: "123 Elm Street, Springfield",
        gender: "Male",
        dob: "1990-01-01",
    };
    const {user,userAvatar} = useContext(UserContext)

    return (
        <div className="container mt-3">
            <div className="card shadow-lg bg-secondary p-4">
                <div className="row align-items-center">
                    <div className="col-md-4 text-center">
                        <img
                            src={userAvatar}
                            alt="User Avatar"
                            className="rounded-circle img-fluid mb-3"
                            style={{ width: "150px", height: "150px" }}
                        />
                        <h5 className="text-primary">{user.sub}</h5>
                        <span className="badge bg-success">Active</span>
                    </div>

                    {/* Personal Information Section */}
                    <div className="col-md-8">
                        <h5 className="text-primary mb-3">Personal Information</h5>
                        <hr />
                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <strong>FirstName:</strong>
                                <p className="mb-0">{user.name}</p>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <strong>Email:</strong>
                                <p className="mb-0">{user.email}</p>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <strong>Phone:</strong>
                                <p className="mb-0">{user.phone}</p>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <strong>Address:</strong>
                                <p className="mb-0">{user.address}</p>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <strong>Gender:</strong>
                                <p className="mb-0">{user.gender}</p>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <strong>Date of Birth:</strong>
                                <p className="mb-0">{user.dob}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;