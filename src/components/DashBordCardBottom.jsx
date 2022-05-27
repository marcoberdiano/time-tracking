const DashBoardCardBottom = ({time, current, previous}) => {
    let timePreviuos;
    switch(time){
        case 'daily':
            timePreviuos = 'day'
            break
        case 'weekly':
            timePreviuos = 'Week'
            break
        case 'monthly':
            timePreviuos = 'Month'
            break
        default:
            break
    }
    return ( <div className="card-bottom">
    <div className='dashBoardCard-hours'>
        {current}hrs
    </div>

    <div className='dashBoardCard-last-time'>
        Last {timePreviuos} - {previous}hrs
    </div> </div>);
}
 
export default DashBoardCardBottom;