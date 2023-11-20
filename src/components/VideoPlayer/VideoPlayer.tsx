import { useEffect, useRef, useState } from "react"
import { useAppSelector } from "../../store/hooks";
import { useAppDispatch } from "../../store/hooks";
import { fetchVidoStamps } from "../../store/slices/videoStampSlice";
import { MenuItem } from "../MenuItem/MenuItem";

import styles from './VideoPlayer.module.scss'


interface Props {

}


export const VideoPlayer = ({ }: Props) => {

    const dispatch = useAppDispatch()


    const videoRef = useRef<HTMLVideoElement>(null)
    const videoStamps = useAppSelector((state) => state.videoStamps.videoStamps)



    useEffect(() => {
        dispatch(fetchVidoStamps())
    }, [])



    const [time, setTime] = useState(0)
    const [play, setPlay] = useState(false)


    useEffect(() => {
        play ? videoRef.current?.play() : videoRef.current?.pause();
    }, [play])

    function setTimeForTheVideo(time: number): void {
        setTime(time);
        console.log('time', videoRef.current?.currentTime)

    }

   

    const videoHandler = () => {
        setPlay((current) => !current)
    };

   

    const showSpecificTime = (time: number): void => {
        if (videoRef.current) {
            videoRef.current.currentTime = time;
        }
    }



    return (
        <>
            <h1>This is custom VideoPlayer</h1>
            <div style={{ 'margin': '0 auto', 'position': 'relative', 'width': videoRef.current?.videoWidth, 'height': videoRef.current?.height, cursor: 'pointer' }}>
                <video onClick={()=>videoHandler()} style={{ position: "relative" }} onTimeUpdate={() => setTimeForTheVideo(videoRef.current?.currentTime || 0)} ref={videoRef} src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
                />
                {videoStamps.map((item) => {
                    if (time >= item.timestamp && time <= item.timestamp + item.duration) {
                        return (<div style={{ 'border': '4px green solid', 'position': 'absolute', 'left': item.zone.left, 'top': item.zone.top, 'width': item.zone.width, 'height': item.zone.height, 'backgroundColor': 'green', 'opacity': 0.3, zIndex: 100 }}>
                        </div>)

                    }
                })}
            </div>

            <ul className={styles.list}>
                {videoStamps.map((item) => (
                    <li key={item.timestamp}>
                        <MenuItem stamp={item} showSpecificTime={showSpecificTime} />
                    </li>
                ))}
            </ul>

        </>
    )
}