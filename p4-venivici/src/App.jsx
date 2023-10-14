import { useState, useEffect } from 'react'
import './App.css'
import BanList from './components/BanList';
import DiscoverItem from './components/DiscoverItem';
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
const API_BASE_URL = 'https://api.harvardartmuseums.org';

const App = () => {
  const [banList, setBanList] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    // Fetch a random item from the Harvard Art Museums API
    const fetchRandomItem = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/object?apikey=${ACCESS_KEY}&sort=random&page=1&size=1`
        );
        const data = await response.json();
        if (data.records[0]?.primaryimageurl) {
          setCurrentItem({
            title: data.records[0].title,
            description: data.records[0].description,
            imageURL: data.records[0].primaryimageurl,
          });
        } else {
          // If the image doesn't exist, fetch another random item
          fetchRandomItem();
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRandomItem();
  }, [banList]);

  const handleBan = (attribute) => {
    setBanList((prevBanList) => [...prevBanList, attribute]);
  };

  const removeFromBanList = (attribute) => {
    setBanList((prevBanList) => prevBanList.filter((item) => item !== attribute));
  };

  const fetchRandomItem = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/object?apikey=${ACCESS_KEY}&sort=random&page=1&size=1`
      );
      const data = await response.json();
      if (data.records[0]?.primaryimageurl) {
        setCurrentItem({
          title: data.records[0].title,
          description: data.records[0].description,
          imageURL: data.records[0].primaryimageurl,
        });
      } else {
        // If the image doesn't exist, fetch another random item
        fetchRandomItem();
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDiscover = () => {
    fetchRandomItem();
  };

  return (
    <div className="app">
      <header>
        <h1>Discover Art</h1>
      </header>
      <div className="content">
        <div className="discover-container">
          {currentItem && <DiscoverItem item={currentItem} handleBan={handleBan} />}
        </div>
      </div>
      <BanList banList={banList} removeFromBanList={removeFromBanList} handleDiscover={handleDiscover}/>
    </div>
  );
};

export default App;
