import React from "react";
import Resource from './resource'
// calendar
const Board = () => {
    return (
        <div className="Board">
            <thead>
                <tr id="car">
                    <th className="Restaurant">Burro Bar</th>
                    <th className="Restaurant">Cafe Bonjour</th>
                    <th className="Restaurant">Cafe Landwer</th>
                    <th className="Restaurant">Tatte</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <Resource 
                        resource='Burro Bar is known for its $25 bottomless brunch on the weekends. It specializes in Mexican cusine and is a must-try.'
                        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj12Ty_16bwzrR2jWs1A2Q7_CjHK2iO6i0mUui1McYHdnJittENaiM9tYf9O4LXWDrId8&usqp=CAU"
                        altText="Burro Bar Image"
                    />
                    <Resource 
                        resource='Cafe Bonjour is known for its French aesthetic, authentic baguettes, and big sandwiches. Be prepared to wait in line here.'
                        imageSrc="https://media-cdn.tripadvisor.com/media/photo-s/1b/0d/fe/f6/live-cooking-view.jpg"
                        altText="Cafe Bonjour Image"
                    />
                    <Resource 
                        resource='Cafe Landwer is known for its Mediterranean and Italian cusine. Brunches here are full of flavor and variety.'
                        imageSrc="https://i0.wp.com/bostonrealestatetimes.com/wp-content/uploads/2022/01/Cafe-Landwer.png?fit=1186%2C651&ssl=1"
                        altText="Cafe Landwer Image"
                    />
                    <Resource 
                        resource='Tatte is a classic brunch spot with amazing pastries. They serve brunch every day, but have special menu items on the weekend. '
                        imageSrc="https://media-cdn.tripadvisor.com/media/photo-s/18/40/88/cd/counter-area.jpg"
                        altText="Tatte Image"
                    />
                </tr>
            </tbody>
        </div>
    )
}

export default Board;