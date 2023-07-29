// components/ActivityItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteActivity } from '../actions/activityActions';

const ActivityItem = ({ activity }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteActivity(activity.id));
  };

  return (
    <div className=' bg-teal-100  h-48 w-48 m-10  hover:scale-110  rounded-lg text-center  hover:transition-shadow'>
      <div class="flex flex-col mb-4">
        <h1 className='font-serif underline'>Title</h1>
      <h2 className='font-mono'> {activity.title}</h2>
      </div>
      <div class="flex flex-col mb-4">
      <h1 className='font-serif underline'>Description</h1>
      <p className='font-mono'>{activity.description}</p>
      <button onClick={handleDelete} className='bg-teal-200 uppercase text-md mx-auto p-2 rounded hover:animate-bounce'>Delete</button>
      </div>
    </div>
  );
};

export default ActivityItem;
