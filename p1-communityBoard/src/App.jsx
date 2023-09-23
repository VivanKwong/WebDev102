import React from 'react';
import './App.css';
import RestaurantCard from './components/RestaurantCard';

function App() {
  return (
    <div className="App">
      <h1>Top 10 Brunch Places in Boston</h1>
      <div className="restaurant-list">
        <RestaurantCard
          name="Burro Bar"
          description="Known for its $25 bottomless brunch on weekends. Specializes in Mexican cuisine."
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj12Ty_16bwzrR2jWs1A2Q7_CjHK2iO6i0mUui1McYHdnJittENaiM9tYf9O4LXWDrId8&usqp=CAU"
        />
        <RestaurantCard
          name="Buttermilk & Bourbon"
          description="Famous for Southern-inspired brunch dishes and bourbon selection."
          imageSrc="https://dirtywatermedia.com/wp-content/uploads/2022/07/buttermilkbourbon.png"
        />
        <RestaurantCard
          name="Cafe Bonjour"
          description="Popular its French aesthetic, authentic baguettes, and big sandwiches."
          imageSrc="https://media-cdn.tripadvisor.com/media/photo-s/1b/0d/fe/f6/live-cooking-view.jpg"
        />
        <RestaurantCard
          name="Cafe Landwer"
          description="Known for its diverse selection of Mediterranean and Italian cusine."
          imageSrc="https://i0.wp.com/bostonrealestatetimes.com/wp-content/uploads/2022/01/Cafe-Landwer.png?fit=1186%2C651&ssl=1"
        />
        <RestaurantCard
          name="Cafe Vester"
          description="Great to work from home; creative drinks and healthy brunch options."
          imageSrc="https://images.squarespace-cdn.com/content/v1/5adc853f620b856cbde10ded/1599686238141-AQEFXB0MU2L606607CYR/_MG_7061.JPG"
        />
        <RestaurantCard
          name="Milkweed"
          description="Classic brunch spot with all the favorites."
          imageSrc="https://cdn.checkle.com/venuePhotos%2F-NcQOnC2IfKeGP8bNHR4%2F0d38d191-de8e-4528-bc78-13e27b3274a1_1200x1200.webp"
        />
        <RestaurantCard
          name="Rubato"
          description="Famous for its delicious Hong Kong-fusion style brunch creations."
          imageSrc="https://images.squarespace-cdn.com/content/v1/620e45d5c519b54bbe9ded29/f1008032-6798-4e44-af24-495e7766a6af/_DSC4117.jpg"
        />
        <RestaurantCard
          name="South End Buttery"
          description="Popular for its drinks and pastries."
          imageSrc="https://resizer.otstatic.com/v2/photos/wide-huge/1/25087152.jpg"
        />
        <RestaurantCard
          name="Tatte"
          description="Classic brunch spot for pastries, sandwiches, drinks, and minimalist aesthetic."
          imageSrc="https://media-cdn.tripadvisor.com/media/photo-s/18/40/88/cd/counter-area.jpg"
        />
        <RestaurantCard
          name="The Friendly Toast"
          description="Known for its large menu, retro aesthetic, and lively atmosphere."
          imageSrc="https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/lwyoqmvh/8c0f9c9c-c076-47be-abd6-b1be61e62f15.jpg"
        />
      </div>
    </div>
  );
}

export default App;