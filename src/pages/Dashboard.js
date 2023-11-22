import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import TimeSlots from '../components/TimeSlots';
import VideoPlayer from '../components/VideoPlayer';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <Navbar />
        <TimeSlots />
        <VideoPlayer/>
      </div>
    </div>
  );
};

export default Dashboard;
