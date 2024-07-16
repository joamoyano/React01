import React from 'react';
import { Task } from '../../models/task.class'
import { Levels } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

    
const TaskListComponent = () => {

const defaultTask = new Task('example', 'default task',  Levels.NORMAL , false);



    return (
        
        <div>
        <h2>Task List</h2>
        <TaskComponent Task={defaultTask} ></TaskComponent>
        </div>
        
    );
};



export default TaskListComponent;
