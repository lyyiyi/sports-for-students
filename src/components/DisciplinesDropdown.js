import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DisciplinesDropdown.css'; 

const DisciplinesDropdown = () => {
  // State to manage whether the dropdown is currently open
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li 
      className="dropdown-container" 
      // Use onMouseEnter and onMouseLeave to control the dropdown
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="dropdown-title">Disciplines</span>

      {/* Only render the content if isOpen is true */}
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/alpine">Alpine Ski</Link>
          <Link to="/nordic">Nordic Ski</Link>
          <Link to="/badminton">Badminton</Link>
        </div>
      )}
    </li>
  );
};

export default DisciplinesDropdown;