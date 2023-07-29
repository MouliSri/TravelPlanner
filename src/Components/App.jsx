import React from "react";
import { Route ,Routes } from "react-router-dom"
import Home from "../Components/Home"
import TripForm from "../Components/TripForm"
import TripList from "../Components/TripList"
import TripDetails from "../Components/TripDetails"
import Headers from "../Components/Header"
import ActivityList from "../Components/ActivityList"
import ActivityForm from "../Components/ActivityForm"







function App() {




  return (
    <div >

     <Headers />
   
     
     <Routes>

      <Route exact path="/" Component={Home} />
      
      <Route exact path="/TripForm" Component={TripForm} />
      <Route exact path="/TripList" Component={TripList} />
      <Route exact path="/ActivityForm" Component={ActivityForm} />
      <Route exact path="/ActivityList" Component={ActivityList}/>
      <Route exact path="/TripList/TripDetails" Component={TripDetails} />
      
      </Routes>
      
      
    </div>
  );
}

export default App;
