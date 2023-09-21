import React from "react";
import Resource from './resource'

const Board = () => {
    return (
        <div className="Board">
            <thead>
                <tr>
                    <th className="Restaurant">Burro Bar</th>
                    <th className="Restaurant">Cafe Bonjour</th>
                    <th className="Restaurant">Cafe Landwer</th>
                    <th className="Restaurant">Tatte</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <Resource resource='Burro Bar is known for its $25 bottomless brunch on the weekends. It specializes in Mexican cusine and is a must-try.'/>
                    <Resource resource='Cafe Bonjour is known for its French aesthetic, authentic baguettes, and big sandwiches. Be prepared to wait in line here.'/>
                    <Resource resource='Cafe Landwer is known for its Mediterranean and Italian cusine. Brunches here are full of flavor and variety.'/>
                    <Resource resource='Tatte is a classic brunch spot with amazing pastries. They serve brunch every day, but have special menu items on the weekend. '/>
                </tr>
            </tbody>
        </div>
    )
}

export default Board;