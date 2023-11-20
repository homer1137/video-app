import { IVideoStamp } from '../../models/IvideoStamp'
import styles from './MenuItem.module.scss'
import { msToTime } from '../../utils/msToTime'


interface Props {
    stamp: IVideoStamp,
    showSpecificTime: (time:number)=>any
}


export const MenuItem = ({stamp, showSpecificTime}: Props) => {




    return (
        <div className={styles.menuItem} onClick={()=>showSpecificTime(stamp.timestamp)}>
            <h2>Timestamp: {msToTime(stamp.timestamp*1000)}</h2>
            <h3>Dutation: {stamp.duration}</h3>
        </div>

    )
}