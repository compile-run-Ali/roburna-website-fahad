/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import chat from '../Assets/images/icons/chat.png'
import discord from '../Assets/images/icons/discord.png'
import git from '../Assets/images/icons/git.png'
import instagram from '../Assets/images/icons/instagram.png'
import linkedin from '../Assets/images/icons/linkedin.png'
import m from '../Assets/images/icons/m.png'
import telegram from '../Assets/images/icons/telegram.png'
import twitter from '../Assets/images/icons/twitter.png'
import youtube from '../Assets/images/icons/youtube.png'
import facebook from '../Assets/images/icons/facebook.png'

import Draggable from "react-draggable";

export function Floatbar() {

    const [open, setOpen] = useState(false);
    const handlefloatbar = (e: any) => {
        e.preventDefault();
        setOpen(!open)
    }

    return (
        <div className={`${open ? "floatbar-show" : ""}`}>
            <Draggable>
                <div className={`floatbar-wrap floatbar-desktop`}>
                    <button
                        type='button'
                        onClick={handlefloatbar}
                    aria-controls='#floatbar'
                    aria-expanded={open}
                    >
                        <img className='chat-icon' src={chat} width='54px' onClick={handlefloatbar} />
                    </button>
                    <Collapse in={open} dimension="height">
                        <div id='floatbar' className={`floatbar-inner `}>
                            <a target="_blank" href='https://t.me/Roburna' rel="noreferrer"><img src={telegram} height='28px' /></a>
                            <a target="_blank" href='https://discord.com/invite/d8qVn3ca2q' rel="noreferrer"><img src={discord} height='28px' /></a>
                            <a target="_blank" href='https://www.youtube.com/channel/UCO5Fn9KbNmWoB0hQC3xj2iQ' rel="noreferrer"><img src={youtube} height='28px' /></a>
                            <a target="_blank" href='https://twitter.com/roburnaofficial' rel="noreferrer"><img src={twitter} height='28px' /></a>
                            <a target="_blank" href='https://web.facebook.com/RoburnaBlockchain' rel="noreferrer"><img src={facebook} height='28px' /></a>
                            <a target="_blank" href='https://www.linkedin.com/company/roburna-official/about/' rel="noreferrer"><img src={linkedin} height='28px' /></a>
                        </div>
                    </Collapse>
                </div >
            </Draggable >
            <div className={`floatbar-wrap floatbar-mobile`}>
            <button
                        type='button'
                        onClick={handlefloatbar}
                    aria-controls='#floatbar'
                    aria-expanded={open}
                    >
                        <img className='chat-icon' src={chat} width='54px' onClick={handlefloatbar} />
                    </button>
            <Collapse in={open} dimension="height">
                        <div id='floatbar' className={`floatbar-inner `}>
                            <a target="_blank" href='https://t.me/Roburna' rel="noreferrer"><img src={telegram} height='28px' /></a>
                            <a target="_blank" href='https://discord.com/invite/d8qVn3ca2q' rel="noreferrer"><img src={discord} height='28px' /></a>
                            <a target="_blank" href='https://www.youtube.com/channel/UCO5Fn9KbNmWoB0hQC3xj2iQ' rel="noreferrer"><img src={youtube} height='28px' /></a>
                            <a target="_blank" href='https://twitter.com/roburnaofficial' rel="noreferrer"><img src={twitter} height='28px' /></a>
                            <a target="_blank" href='https://web.facebook.com/RoburnaBlockchain' rel="noreferrer"><img src={facebook} height='28px' /></a>
                            <a target="_blank" href='https://www.linkedin.com/company/roburna-official/about/' rel="noreferrer"><img src={linkedin} height='28px' /></a>
                        </div>
                    </Collapse>
                    
                    
                </div >
        </div>
    );
}

