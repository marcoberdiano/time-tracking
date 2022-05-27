import {useState} from 'react';
import DashBoardCard from "./DashBoardCard";
import DashBoardCardProfile from "./DashBoardCardProfile";
import '../css/dashBoard.css'
import data from '../data/data.json'

const DashBoard = () => {

    const [ativity, setAtivity] = useState("daily");

    const handleClick = ({target}) => {
        setAtivity(target.innerHTML);
    }

   
    const value = ativity.toLocaleLowerCase();
    return ( 
        <main>
            <div className="dashboard-container">
                
                
                <div className="item1">
                    <DashBoardCardProfile onClick={handleClick}/>
                </div>
    
                {data.map((item, index)=>
                    <div key={index}>
                        <DashBoardCard 
                            ativity = {item.title} 
                            currentVal = {item.timeframes[value].current}
                            previousVal = {item.timeframes[value].previous}
                            time = {value}
                        />
                    </div>)  
                }
                                        
            </div>
        </main>
     );
}
 
export default DashBoard