const DashBoardCardTop = ({ativity, src}) => {

    let color;

    const Lightredwork = 'hsl(15, 100%, 70%)';
    const Softblueplay = 'hsl(195, 74%, 62%)';
    const Lightredstudy = 'hsl(348, 100%, 68%)';
    const Limegreenexercise = 'hsl(145, 58%, 55%)';
    const Violetsocial = 'hsl(264, 64%, 52%)';
    const Softorangeselfcare = 'hsl(43, 84%, 65%)';

    switch(ativity) {
        case 'Work':
            color = Lightredwork
            break
        case 'Play':
            color = Softblueplay
            break
        case 'Study':
            color = Lightredstudy
            break
        case 'Exercise':
            color = Limegreenexercise
            break
        case 'Social':
            color = Violetsocial
            break
        case 'Self Care':
            color = Softorangeselfcare
            break
        default:
            break
    }

    return ( 
        <div className='dashBoardCard-top' style={{backgroundColor: color}}>
                <img className='icon'src={src} alt={src}/>
        </div>
     );
}
 
export default DashBoardCardTop;