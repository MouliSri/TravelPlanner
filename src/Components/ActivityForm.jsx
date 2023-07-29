// components/ActivityForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addActivity } from '../actions/activityActions';

const ActivityForm = ({ tripId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const activity = {
      tripId,
      title,
      description,
    };
    dispatch(addActivity(activity));
    setTitle('');
    setDescription('');
  };

  return (
    <div className='flex justify-center items-center h-screen w-full bg-teal-400'>
    <div class="w-96 md:w-1/2 bg-white rounded shadow-2xl p-20 m-4 ">
    <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Activity Form</h1>
    <form onSubmit={handleSubmit} className=' mx-auto mt-10 h-80 w-80    grid grid-flow-row '>
    <div class="flex flex-col mb-4">
    <label class="mb-2 font-bold text-lg text-gray-900">Title</label>
      <input class="border py-2 px-3 text-grey-800  w-48 md:w-80"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      </div>
      <div class="flex flex-col mb-4">
      <label class="mb-2 font-bold text-lg text-gray-900">Description</label>
      <textarea class="border py-2 px-3 text-grey-800  w-48 md:w-80"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      </div>
      <button type="submit" class="block  bg-teal-400 hover:bg-gradient-to-r from-teal-500 to-teal-50 text-white uppercase text-lg mx-auto p-4  rounded">Add Activity</button>
    </form>
    </div>
    </div>
  );
};

export default ActivityForm;
