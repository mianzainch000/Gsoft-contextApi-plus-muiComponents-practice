import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ToDoList = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [indexToDeleteBlog, setIndexToDeleteBlog] = useState("");
  const [indexToUpdateBlog, setIndexToUpdateBlog] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [toDoListData, setToDoListData] = useState([]);
  const togglePopUp = () => setOpenModal((isPopUpShow) => !isPopUpShow);

  // Function to postDataTodoList

  const postDataTodoList = () => {
    setToDoListData([...toDoListData, { firstName, lastName }]);
    setFirstName("");
    setLastName("");
  };

  // Function to deleteDataToDoList

  const deleteDataToDoList = (index) => {
    setToDoListData((deleteData) =>
      deleteData.filter((state, id) => {
        return id !== index;
      })
    );
  };

  // Function to editDataToDoList

  const editDataToDoList = (index, firstName, lastName) => {
    setFirstName(firstName);
    setLastName(lastName);
    setIndexToUpdateBlog(index);
  };

  // Function to updateDataToDoList

  const updateDataToDoList = () => {
    setToDoListData(
      toDoListData.map((item, index) => {
        return indexToUpdateBlog === index ? { firstName, lastName } : item;
      })
    );
  };

  const functionToAddAndUpdateDataToDOList = () => {
    if (typeof indexToUpdateBlog === "number") {
      updateDataToDoList();
      setFirstName("");
      setLastName("");
      setIndexToUpdateBlog("");
    } else {
      postDataTodoList();
    }
  };

  // Form Submit

  const handleSubmit = (e) => {
    e.preventDefault();
    functionToAddAndUpdateDataToDOList();
  };

  const firstNameHandler = (e) => {
    let item = e.target.value;
    setFirstName(item);
  };

  const lastNameHandler = (e) => {
    let item = e.target.value;
    setLastName(item);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <Stack direction="row" spacing={2}>
          <div>
            <TextField
              value={firstName}
              onChange={firstNameHandler}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              autoComplete="off"
              required="required"
              style={{ width: "223px" }}
            />
          </div>
          <div>
            <TextField
              value={lastName}
              onChange={lastNameHandler}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              autoComplete="off"
              required="required"
              style={{ width: "223px" }}
            />
          </div>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Stack>
      </div>
      <div className="tableContainer">
        <table>
          <tr>
            <th>
              {" "}
              <h3>First Name</h3>
            </th>
            <th>
              <h3>Last Name</h3>
            </th>
            <th>
              <h3>Delete Data</h3>
            </th>
            <th>
              <h3>Edit Data</h3>
            </th>
          </tr>
          {toDoListData.map((item, index) => {
            return (
              <tr>
                {item.index}
                <td>
                  <h3>{item.firstName}</h3>
                </td>
                <td>
                  <h3>{item.lastName}</h3>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      togglePopUp();
                      setIndexToDeleteBlog(index);
                    }}
                  >
                    <DeleteIcon />
                  </Button>
                </td>

                {/* Edit */}

                <td>
                  <Button
                    variant="warning"
                    onClick={() =>
                      editDataToDoList(index, item.firstName, item.lastName)
                    }
                  >
                    <EditIcon sx={{ color: "white;" }} />
                  </Button>
                </td>
              </tr>
            );
          })}{" "}
        </table>

        {/* Modal */}

        <Modal show={openModal} onHide={togglePopUp}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Blog</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are your sure want to delete this blog ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={togglePopUp}>
              Close
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                deleteDataToDoList(indexToDeleteBlog);
                togglePopUp();
              }}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </form>
  );
};

export default ToDoList;
