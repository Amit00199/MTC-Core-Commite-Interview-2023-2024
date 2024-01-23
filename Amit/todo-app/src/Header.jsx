import React, { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import Card from "./Card";

const Header = () => {

    const [modal, setModal] = useState(false); // making a state variable to toggle the modal on and off 
    const [taskList, setTaskList] = useState([]); // making a state variable to store the list of tasks
    useEffect(() => { // useEffect is a hook that lets you perform side effects in function components
        let arr = localStorage.getItem("taskList"); // getting the taskList from local storage
        if (arr) { // if the taskList is not empty then we will parse it and store it in our state variable 
            let obj = JSON.parse(arr); // converting the stringified array into a javascript array of objects using JSON.parse method 
            setTaskList(obj); // storing the array of objects in our state variable 
        }
    }, []) //The [] Makes the useEffect run only once on the first render of the component and not on every re-render
    const toggle = () => setModal(!modal); // function to toggle the modal on and off 
    const addTask = (task) => { // function to add a task to the taskList 
        let tempList = taskList; // creating a temporary list to store the taskList
        tempList.push(task); // adding the task to the temporary list
        localStorage.setItem("taskList", JSON.stringify(tempList)); // storing the temporary list in local storage after converting it into a string using JSON.stringify method
        setTaskList(taskList); // storing the temporary list in our state variable
        setModal(false); // closing the modal after adding the task to the list
    }
    const deleteTask = (index) => { // function to delete a task from the taskList 
        let tempList = taskList // creating a temporary list to store the taskList
        tempList.splice(index, 1) // removing the task from the temporary list
        localStorage.setItem("taskList", JSON.stringify(tempList)) // storing the temporary list in local storage after converting it into a string using JSON.stringify method
        setTaskList(tempList) // storing the temporary list in our state variable 
        window.location.reload() // reloading the page to reflect the changes in the taskList
    }
    const updateListArray = (obj, index) => { // function to update a task in the taskList 
        let tempList = taskList // creating a temporary list to store the taskList 
        tempList[index] = obj // updating the task in the temporary list
        localStorage.setItem("taskList", JSON.stringify(tempList)) // storing the temporary list in local storage after converting it into a string using JSON.stringify method
        setTaskList(tempList) // storing the temporary list in our state variable
        window.location.reload() // reloading the page to reflect the changes in the taskList
    }

    return (
        <>
            <div className="header text-center"> 
                <h3>To-Do List</h3>
                <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Create Task</button>
            </div>
            <div className="task-container">
                {taskList && taskList.map((obj, index) => // mapping over the taskList to display each task as a card 
                    <Card key={ index } taskObj={ obj } index={ index } deleteTask = { deleteTask } updateListArray = { updateListArray }/> // passing the task object, index of the task and the deleteTask and updateListArray functions as props to the Card component
                )}
            </div>
            <CreateTask toggle={ toggle } modal={ modal } save={ addTask }/> {/* passing the toggle, modal and save functions as props to the CreateTask component */} 
        </>
    );
}

export default Header;