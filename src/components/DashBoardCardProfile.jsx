import '../css/DashBoardCardProfile.css'
import jeremyPhoto from '../images/image-jeremy.png'

const DashBoardCardProfile = ({onClick}) => {
    return ( 
        <div className='dashboardcardprofile-container'>
            <div className='Profile-Card-top'>
                <div>
                    <img className='profile-img' src={jeremyPhoto} alt="jeremy"/>
                </div>
                <div className='info'>
                    <p className='report'>
                        Report for
                    </p>
                    <p className='report-name'>
                        Jeremy Robson
                    </p>
                </div>
            </div>

            <div className='Profile-Card-bottom'>
                <p onClick={onClick}>Daily</p>
                <p onClick={onClick}>Weekly</p>
                <p onClick={onClick}>Monthly</p>
            </div>
        </div>
     );
}
 
export default DashBoardCardProfile;