import '../css/dashBoardCard.css'
import iconEllipsis from '../images/icon-ellipsis.svg'
import iconWork from '../images/icon-work.svg'
import iconStudy from '../images/icon-study.svg'
import iconSocial from '../images/icon-social.svg'
import iconSelfCare from '../images/icon-self-care.svg'
import iconPlay from '../images/icon-play.svg'
import iconExercise from '../images/icon-exercise.svg'
import DashBoardCardTop from './DashBordCardTop'
import DashBoardCardBottom from './DashBordCardBottom'

const DashBoardCard = ({ativity, currentVal, previousVal, time}) => {

    let src = '';
    switch(ativity) {
        case 'Work':
            src = iconWork
            break
        case 'Play':
            src = iconPlay
            break
        case 'Study':
            src = iconStudy
            break
        case 'Exercise':
            src = iconExercise
            break
        case 'Social':
            src = iconSocial
            break
        case 'Self Care':
            src = iconSelfCare
            break
        default:
            break
    }

    return (
        <div className='dashBoardCard-container'>
        
            <DashBoardCardTop ativity={ativity} src = {src}/>
            
            <div className='dashBoardCard'>
                <div className='dashBoardCard-body'>

                    <div className='dashBoardCard-title'>
                        <div>
                            {ativity}
                        </div>
                        <div>
                            <img src={iconEllipsis} alt="" />
                        </div>
                    </div>

                <DashBoardCardBottom 
                    ativity={ativity} 
                    time={time} 
                    current={currentVal} 
                    previous = {previousVal}
                />
                    
                </div>
            </div>
        </div>
     )
}
 
export default DashBoardCard;