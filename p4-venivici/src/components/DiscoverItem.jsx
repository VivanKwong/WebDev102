import React from 'react';

const DiscoverItem = ({ item, handleBan }) => {
    const imageSize = {
        width: '300px', // Adjust the width as needed
        height: '200px', // Adjust the height as needed
    };

    return (
      <div className="discover-item">
        <h2>{item.title}</h2>
        <img src={item.imageURL} alt={item.title} style={imageSize}/>
        <button onClick={() => handleBan(item.title)}>Ban this</button>
      </div>
    );
  };
  
  export default DiscoverItem;