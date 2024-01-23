import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({ modal, toggle, save }) => {

    const [taskName, setTaskName] = useState(""); // making a state variable to store the task name
    const [taskDescription, setTaskDescription] = useState(""); // making a state variable to store the task description
    const handleChange = (e) => { // function to handle the change in input fields, it takes the event object as a parameter which is passed from the input field on change
        const { name, value } = e.target; // extracting the name and value from the target
        if (name === "taskName") { // checking if the name is taskName or taskDescription
            setTaskName(value); 
        } else {
            setTaskDescription(value);
        }
    }

    const handleSave = (e) => { // function to handle the save button, it takes the event object as a parameter which is passed from the button on click
        let task = {}; // creating an empty object to store the task
        task["Name"] = taskName; // adding the taskName to the task object
        task["Description"] = taskDescription; // adding the taskDescription to the task object
        save(task); // calling the save function passed as props from the Header component and passing the task object as a parameter
    }

    return (
        <Modal isOpen={modal} toggle={toggle}> {/* using the modal, toggle and save functions passed as props from the Header component, a modal is a dialog box/popup window that is displayed on top of the current page */}
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input type="text" className="form-control" value={ taskName } onChange={handleChange} name="taskName"/> {/* calling the handleChange function on change and passing the name of the input field as a parameter */}
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Task Description</label>
                        <textarea rows="5" className="form-control" value={ taskDescription } onChange={handleChange} name="taskDescription"></textarea> {/* calling the handleChange function on change and passing the name of the input field as a parameter */}
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}> {/* calling the handleSave function on click */}
                    Create
                </Button>{" "}
                <Button color="secondary" onClick={toggle}> {/* calling the toggle function on click */}
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTask;