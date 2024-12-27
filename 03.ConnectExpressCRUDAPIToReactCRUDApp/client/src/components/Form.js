import React, { useEffect, useState } from "react";
import { deleteData, getData, inputData, updateData } from "../api/apiService";
import { ViewData } from "./ViewData";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify

export const Form = () => {
  const [view, setItems] = useState([]);
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const loadItems = async () => {
    try {
      setLoading(true); // Set loading to true before starting the API call
      const data = await getData(); // Call fetchItems to get the list
      setItems(data);
    } catch (error) {
      setError(error.message); // Capture error message from the API
    } finally {
      setLoading(false); // Ensure loading state is updated regardless of success or failure
    }
  };
  // Load items from the API on component mount
  useEffect(() => {
    loadItems();
  }, []);
  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await updateData(input._id, input); // Update item
        toast.success("Data updated successfully!"); // Success toast
      } else {
        await inputData(input); // Add new item
        toast.success("Data added successfully!"); // Success toast
      }
      // Reset form state
      setInput({
        fname: "",
        lname: "",
        email: "",
      });
      setIsEditing(false);
      loadItems(); // Reload items after add/update
    } catch (error) {
      console.error("Failed to submit form");
      toast.error("Failed to submit form. Please try again."); // Error toast
    }
  };

  // Handle edit
  const handleEdit = (item) => {
    setInput(item);
    setIsEditing(true);
  };

  // Handle delete functionality
  const handleDelete = async (id) => {
    try {
      await deleteData(id); // Call deleteData API function
      toast.success("Data deleted successfully!"); // Success toast
      loadItems(); // Reload the items after delete
    } catch (error) {
      console.error("Failed to delete item", error);
      toast.error("Failed to delete item. Please try again."); // Error toast
    }
  };

  return (
    <>
      <h1 className="text-center bg-dark text-white">CRUD OPERATION</h1>
      <div className="container">
        <h1>{isEditing ? "Edit Data" : "Insert Data"}</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-6">
              <label htmlFor="fname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                className="form-control"
                placeholder="Enter First Name"
                onChange={handleChange}
                value={input.fname || ""} // Ensure it's always a string (empty string fallback)
                required
              />
            </div>
            <div className="col-sm-6">
              <label htmlFor="lname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                className="form-control"
                placeholder="Enter Last Name"
                onChange={handleChange}
                value={input.lname || ""} // Ensure it's always a string (empty string fallback)
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
                onChange={handleChange}
                value={input.email || ""} // Ensure it's always a string (empty string fallback)
                required
              />
            </div>
          </div>
          <div>
            <br />
            <button className="btn btn-success">Submit</button>
          </div>
        </form>
        {/* handle view, update, delete */}
        <ViewData
          view={view}
          error={error}
          loading={loading}
          update={handleEdit}
          delet={handleDelete}
        />
      </div>

      {/* Toastify container to show notifications */}
      <ToastContainer />
    </>
  );
};
