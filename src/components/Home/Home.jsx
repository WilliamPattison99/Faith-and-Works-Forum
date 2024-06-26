import "./styles/Home.css";
import {Stack} from '@mui/material';
import Navbar from "../_global/Navbar"
import ActionCard from "./ActionCard";
import Footer from "../_global/Footer";
import { useState } from "react";


const homeActions = [
    {
        title: "Next Gathering",
        icon: "fa-solid fa-location-dot",
        description: "Find the time and place for our next meeting",
        route:'/gathering'
    },
    {
        title: "Helpful Links",
        icon: "fa-solid fa-list",
        description:"Links that could be useful",
        route:'/links'
    },
    {
        title:'Resources',
        icon:"fa-regular fa-address-book",
        description: "Reach out and get into touch with our hosts",
        route:'/resources'
    },
    {
        title: "About",
        icon: "fa-solid fa-info",
        description: "Who we are and our mission statement",
        route:'/about'
    }
];
/**
 * @description Home/landing page for FAWF
 */
export default function Home() {

    function navigateInstagram() {
        window.open('https://www.instagram.com/indyfwf/');
    }


    return (
        <>
            <Navbar/>
            <div className="home-container">
                <div className="home-hero">
                    <img src="/Indy-Circle-2.jpg" alt="" className="hero-bg" />
                    <div className="home-call-to-action">
                        <h1 className="text hero-text hero-header">Faith and Work Forum</h1>
                        <p className="text hero-text home-hero-quote">
                            “Everyone will be forgotten, nothing we do will make any difference, and all good endeavours, even the best, will come to naught. Unless there is God. If the God of the Bible exists, and there is a True Reality beneath and behind this one, and this life is not the only life, then every good endeavour, even the simplest ones, pursued in response to God's calling, can matter forever.”
                        </p>
                        <p className="home-hero-author">– Tim Keller, Every Good Endeavor: Connecting Your Work to God's Work</p>
                    </div>
                    <img src="/FaithAndForumLogo.jpeg" alt="FaithAndForum" className="hero-logo" />
                </div>
                <div className='home-action-content'>
                    <Stack
                        direction='column'
                        justifyContent='center'
                        alignItems='center'
                        gap={2}
                    >
                        <h1 className="home-action-title">Follow us on Instagram</h1>
                        <div className="insta-image-wrapper">
                            <img src="/Instagram_logo.webp" alt="" className="insta-img" />
                        </div>
                        <p className="text insta-link">@indyfwf</p>
                        <button onClick={navigateInstagram} className="insta-button">
                            View Instagram
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </Stack>
                </div>
                <div className="home-action-content">
                    <div className="home-action-title-wrapper">
                        <h1 className="home-action-title">Stay up to Date With Everything We're Doing</h1>
                    </div>
                    <div className="home-action-container">
                        {
                            homeActions.map(action => {
                                return (
                                    <ActionCard
                                        key={action.title}
                                        title={action.title}
                                        icon={action.icon}
                                        route={action.route}
                                        description={action.description}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}