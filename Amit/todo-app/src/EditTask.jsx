import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({modal, toggle, updateTask, taskObj}) => { // destructuring the props object to get the modal, toggle, updateTask and taskObj functions
    const [taskName, setTaskName] = useState(''); // making a state variable to store the task name, it is empty by default and will be updated when the user types in the input field
    const [description, setDescription] = useState(''); // making a state variable to store the task description, it is empty by default and will be updated when the user types in the input field

    const handleChange = (e) => { // function to handle the change in input fields, it takes the event object as a parameter which is passed from the input field on change 
        const {name, value} = e.target // extracting the name and value from the target
        if(name === "taskName"){ 
            setTaskName(value)
        }else{
            setDescription(value)
        }
    }
    useEffect(() => { // useEffect hook to set the taskName and description when the component loads
        setTaskName(taskObj.Name); // setting the taskName state variable to the task name passed as props
        setDescription(taskObj.Description); // setting the description state variable to the task description passed as props
    },[]) // passing an empty array as the second parameter to make sure that the useEffect hook is called only once when the component loads

    const handleUpdate = (e) => { // function to handle the update button, it takes the event object as a parameter which is passed from the button on click
        e.preventDefault(); // preventing the default behaviour of the form submit button, which is to refresh the page on click
        let temp = {}; // creating an empty object to store the updated task
        temp['Name'] = taskName; // adding the updated taskName to the temp object
        temp['Description'] = description; // adding the updated description to the temp object
        updateTask(temp); // calling the updateTask function passed as props from the Card component and passing the temp object as a parameter
    }

    return (
        <Modal isOpen={modal} toggle={toggle}> {/* using the modal and toggle functions passed as props from the Card component */}
            <ModalHeader toggle={toggle}>Update Task</ModalHeader> {/* using the toggle function passed as props from the Card component */}
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/> {/* calling the handleChange function on change and passing the name of the input field as a parameter */}
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea> {/* calling the handleChange function on change and passing the name of the input field as a parameter */}
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '} {/* calling the handleUpdate function on click */}
            <Button color="secondary" onClick={toggle}>Cancel</Button> {/* calling the toggle function on click */}
            </ModalFooter>
      </Modal>
    );
};

export default EditTask;