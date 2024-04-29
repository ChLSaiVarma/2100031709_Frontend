import React, { useState } from "react";
import Navbar from "../Components/Navbar";
const employees = [
  {
    id: 1,
    FirstName: "John",
    LastName: "Doe",
    Gender: "Male",
    Age: 30,
    Department: "Engineering"
  },
  {
    id: 2,
    FirstName: "Jane",
    LastName: "Smith",
    Gender: "Female",
    Age: 35,
    Department: "Marketing"
  },
];

function Employee() {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    FirstName: "",
    LastName: "",
    Gender: "",
    Age: "",
    Department: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
    setEditMode(false);
    setFormData({
      id: "",
      FirstName: "",
      LastName: "",
      Gender: "",
      Age: "",
      Department: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;
    if (name === "Gender") {
      updatedValue = value.toUpperCase().charAt(0);
      if (updatedValue !== "M" && updatedValue !== "F") {
        updatedValue = "";
      }
    } else if (name === "FirstName" || name === "LastName") {
      updatedValue = value.charAt(0).toUpperCase() + value.slice(1);
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      // Update the employee data directly in the employees array
      employees[editIndex] = formData;
    } else {
      employees.push(formData);
    }
    toggleModal();
  };

  const handleEdit = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setFormData({ ...employees[index] }); // Pre-populate form with employee data
    toggleModal();
  };

  const handleDelete = (index) => {
    employees.splice(index, 1);
    toggleModal();
  };

  return (
    <div>
      <Navbar />
      <div>
        <center><h1>Employee Details</h1></center>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <button className="close" onClick={toggleModal}>
                &times;
              </button>
              <h2>{editMode ? "Edit Employee" : "Add Employee"}</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  ID:
                  <input
                    type="text"
                    name="id"
                    value={formData.id}
                    onChange={handleInputChange}
                    disabled 
                  />
                </label>
                <label>
                  First Name:
                  <input
                    type="text"
                    name="FirstName"
                    value={formData.FirstName}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Last Name:
                  <input
                    type="text"
                    name="LastName"
                    value={formData.LastName}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Gender:
                  <input
                    type="text"
                    name="Gender"
                    value={formData.Gender}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Age:
                  <input
                    type="number"
                    name="Age"
                    value={formData.Age}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Department:
                  <input
                    type="text"
                    name="Department"
                    value={formData.Department}
                    onChange={handleInputChange}
                  />
                </label>
                <button type="submit">{editMode ? "Update" : "Submit"}</button>
              </form>
            </div>
          </div>
        )}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Salary</th>
              <th>Department</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.id}>  
                <td>{employee.id}</td>
                <td>{employee.FirstName}</td>
                <td>{employee.LastName}</td>
                <td>{employee.Gender}</td>
                <td>{employee.Age}</td>
                <td>${employee.Age > 40 ? employee.Age * 10 + 50000 : employee.Age * 5 + 50000}</td>
                <td>{employee.Department}</td>
                <td>{employee.Age > 40 ? "Sr.Employee" : "Jr.Employee"}</td>
                <td>
                  {/* <button onClick={() => handleEdit(index)}>Edit</button> */}
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="add-employee-button" onClick={toggleModal}>
          Add Employee
        </button>
      </div>
    </div>
  );
}

export default Employee;
