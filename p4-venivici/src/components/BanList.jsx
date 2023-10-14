import React from 'react';

const BanList = ({ banList, removeFromBanList, handleDiscover }) => {
    return (
      <div className="ban-list">
        <h2>Ban List</h2>
        <ul>
          {banList.map((item, index) => (
            <li key={index} onClick={() => removeFromBanList(item)}>
              {item}
            </li>
          ))}
        </ul>
        <button className="discover-button" onClick={handleDiscover}>Discover!</button>
      </div>
    );
  };
  
  export default BanList;