import { useContext } from "react";
import { BookContext } from "../../shared/components/BookContext";
import BookTable from "./component/table";
import ManageTools from "./component/ManageTools";
import { ModalContext } from "./component/ModalContext";
import SettingPopUp from "./component/PopUp";
import { Link } from "react-router";

const Storage = () => {
    const { bookList } = useContext(BookContext)
    const { show, setShow } = useContext(ModalContext)
    const openSetting = () => {
        setShow(true)
    }
    return (
        <>

            <div className="container-fluid pt-4 px-4">

                {show && (
                    <SettingPopUp />
                )}

                {bookList && (
                    <>

                        <div className="bg-secondary rounded p-4 mb-4">
                            <ManageTools />
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="bg-secondary rounded h-100 p-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6 className="mb-4">OMELY STORAGE</h6>
                                        <div>
                                            <Link to="/admin/add-book" className="btn btn-outline-primary m-2">Add</Link>
                                            <button className="btn btn-outline-success m-2"><i class="fa fa-upload"></i></button>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <BookTable />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>

        </>
    )
}
export default Storage;