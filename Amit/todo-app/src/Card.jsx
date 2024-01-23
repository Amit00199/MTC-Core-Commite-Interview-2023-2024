import React, { useState } from 'react';
import EditTask from './EditTask';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => { // destructuring the props object to get the task object, index of the task, deleteTask and updateListArray functions

    const [modal, setModal] = useState(false); // making a state variable to toggle the modal on and off
    const colors = [ // array of objects to store the primary and secondary colors for each card
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]
    const toggle = () => { // function to toggle the modal on and off
        setModal(!modal);
    }

    const updateTask = (obj) => { // function to update a task in the taskList
        updateListArray(obj, index) // calling the updateListArray function passed as props from the Header component
    }

    const handleDelete = () => { // function to delete a task from the taskList
        deleteTask(index) // calling the deleteTask function passed as props from the Header component
    }

    return (
        <div className = "card-wrapper mr-5">
            <div className = "card-top" style={{"backgroundColor": colors[index % 5].primaryColor}}></div> {/* using the primary color for the card-top by dynamically accessing it from the colors array using the index of the task */}
            <div className = "task-holder">
                <span className = "card-header" style={{"backgroundColor": colors[index % 5].secondaryColor, "borderRadius": "10px"}}>{taskObj.Name}</span> {/* using the secondary color for the card-header by dynamically accessing it from the colors array using the index of the task */}
                <p className = " card-desc mt-3">{taskObj.Description}</p> 

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i className = "far fa-edit mr-5" style={{"color" : colors[index % 5].primaryColor, "cursor" : "pointer", "marginRight" : "5px"}} onClick = {() => setModal(true)}></i> {/* using the primary color for the edit icon by dynamically accessing it from the colors array using the index of the task and calling the toggle function on click */}
                    <i className="fas fa-trash-alt" style = {{"color" : colors[index % 5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i> {/* using the primary color for the delete icon by dynamically accessing it from the colors array using the index of the task and calling the handleDelete function on click */}
                </div>
            </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/> {/* passing the modal, toggle, updateTask and taskObj functions as props to the EditTask component */}
        </div>
    )
}

export default Card