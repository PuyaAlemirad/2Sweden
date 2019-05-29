import React from "react"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

 export default function Gallery (){
   // const handleOnDragStart = e => e.preventDefault()
    const logo = require('./stockholm.jpg');
        const åre = require('./åre.jpg');
        const falun = require('./falun.jpg');
        function content(event) {
            event.target.style.backgroundColor = "grey"
            //const p= document.getElementById("para")



        }
    return (
      <AliceCarousel mouseDragEnabled >
       
                    <table className="olympicTable" border="1px" cellSpacing="50spx" >
                        <thead>
                            < tr>
                                <th>Stad</th>
                                <th>Day 1</th>
                                <th>Day 2</th>
                                <th>Day 3</th>
                                <th>Day 4</th>
                                <th>Day 5</th>
                                <th>Day 6</th>
                                <th>Day 7</th>
                                <th>Day 8</th>
                                <th>Day 9</th>
                                <th>Day 10</th>
                                <th>Day 11</th>
                                <th>Day 12</th>
                                <th>Day 13</th>
                                <th>Day 14</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><img src={logo} height="100px" width="100px" /></th>
                                <td onClick={content}></td>
                                <td onClick={content}>Curling</td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>

                            </tr>
                            <tr>
                                <th><img src={åre} height="100px" width="100px" /></th>
                                <td onClick={content}><ul><li>Biathion</li><li> Luge</li></ul></td>
                                <td onClick={content}>Alpline Skiing Luge</td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Jumping</li><li> Ski Jumping</li></ul></td>
                            </tr>
                            <tr>
                                <th><img src={falun} height="130px" width="100px" /></th>
                                <td onClick={content}><ul><li>Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li></li><li> </li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Cross Country Skiing</li><li> Nordic Combined</li><li> Ski Jumping</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Luge</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Luge</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Luge</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Luge</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Luge</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Luge</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Luge</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Luge</li></ul></td>
                                <td onClick={content}><ul><li>Biathion</li><li> Luge</li></ul></td>
                            </tr>
                        </tbody>
                    </table>
                
      </AliceCarousel>
    )
  }