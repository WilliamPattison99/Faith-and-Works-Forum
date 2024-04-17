import "./styles/Gathering.css";
import { useEffect, useState } from "react"
import Navbar from "../_global/Navbar";
import Footer from "../_global/Footer";
import PageTitle from "../_global/PageTitle";
import { Stack } from "@mui/material";
import GatheringCard from "./GatheringCard";
import GatheringForm from "./GatheringForm";

const DUMMY_DATE = new Date('04/21/2024');
DUMMY_DATE.setHours(12)

export default function Gathering() {

    const [dateDiff, setDateDiff] = useState(DUMMY_DATE - Date.now());

    function getFormattedDate() {
        let totalTime = dateDiff
        const days = Math.floor(totalTime/(1000*60*60*24));
        const hours = Math.floor(totalTime/(1000*60*60))%25
        const minutes = Math.floor(totalTime/(1000*60))%60
        const seconds = Math.floor(totalTime/1000)%60
        console.log(days, hours, minutes, seconds);
        return {days, hours, minutes, seconds};
    }

    const dt = getFormattedDate();

    useEffect(()=> {
        const interval = setInterval(()=> {
            setDateDiff(DUMMY_DATE - Date.now());
        },1000);

        return ()=> clearInterval(interval);
    },[]);


    console.log(DUMMY_DATE)
    return (
        <>
            <Navbar/>
                <div className="gathering-main">
                    <div className="gathering-header-wrapper">
                        <PageTitle title="Our Next Gathering"/>
                        <hr className="fancy-hr" style={{width:'50%'}}/>
                    </div>
                    <div className="gathering-content-container">
                        <div className="gathering-clock-wrapper">
                            <Stack 
                                direction={'row'}
                                alignItems={'center'}
                                gap={3}
                            >
                                <h1 className="gm-countdown-text">{dt.days}d</h1>
                                <span className="gm-countdown-text">:</span>
                                <h1 className="gm-countdown-text">{dt.hours}h</h1>
                                <span className="gm-countdown-text">:</span>
                                <h1 className="gm-countdown-text">{dt.minutes}m</h1>
                                <span className="gm-countdown-text">:</span>
                                <h1 className="gm-countdown-text">{dt.seconds}s</h1>
                            </Stack>
                        </div>
                        <Stack
                            direction={'row'}
                            gap={3}
                            justifyContent={'center'}
                            alignItems={'flex-start'}
                            marginTop={"10px"}
                            flexWrap={'wrap'}

                        >
                            <GatheringCard icon={'fa-regular fa-clock'} title={"When"} description={"On Thursday at 6pm EST"}/>
                            <GatheringCard icon={'fa-solid fa-map-location'} title={"Where"} description={"At Joshes House located at 3121 Crestwell Drive"}/>
                            <GatheringCard icon={"fa-solid fa-champagne-glasses"} title={"What to Bring"} description={"This is a very long list of things to bring. Please show up early for this other thing."}/>
                        </Stack>
                        {/* Gathering Form */}
                        <GatheringForm/>
                        <div className="gathering-content-bottom">
                            <div className="gathering-content-questions">
                                <p className="text gcq-header">Got any Questions?</p>
                                <p className="text gcq-body">Click <b>Get Connected</b> to reach out and find more details about th event</p>
                                <button className="gc-button">Get Connected</button>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}