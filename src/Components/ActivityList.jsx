// components/ActivityList.js
import React from 'react';
import { useSelector } from 'react-redux';
import ActivityItem from './ActivityItem';

const ActivityList = ({ tripId }) => {
  const activities = useSelector((state) => state.activity
    // state.activities.filter((activity) => activity.tripId === tripId)
  );

  return (
    <div>
    {activities.length===0 ? <div className='text-center font-semibold  text-teal-950 items-center justify-center text-4xl mt-36 bg'> <h1>Oops , There is no data🙁</h1></div>: 
    <div>
      {activities.map((activity) => (
        <ActivityItem key={activity.id} activity={activity} />
      ))}
    </div>
}
    </div>
      
  );
};

export default ActivityList;
