import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

const TaskComponent = ( task ) => {
    return (
        <div>
            <h2>Nombre :{task.name}</h2>
            <p> Description : {task.description}</p>
            <p> Level :{task.level}</p>
            <p> This task is : {task.completed ? 'Completed' : 'Not completed'}</p>
            <hr />  {/* Line break */}
            
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
