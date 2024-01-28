
import yellowLeaf from '../../Assets/images/yellow-leaf.png'
import chev from '../../Assets/images/chev-down.png'
import blog1 from '../../Assets/images/whitepaper-bannerbg.png'
import labsmobileinfopic2 from '../../Assets/images/labsmobileinfopic2.png'

import { NavLink } from 'react-router-dom'


import '../Blockchain/blockchain.css'
import '../Labs//labs.css'
import '../Blog/blog.css'
import {Helmet} from "react-helmet";


export function Bots() {
    return (
        <div className="blog-page">
            <Helmet>
                <title>Roburna - Bots</title>
                <meta name='description' content='Roburna Chat bots act as digital assistants to improve customer experience by streamlining interactions between people and services.'/>
                <meta property="og:image" content="https://roburna.com/static/media/banner.cfea34887d06d9f79b5d.png" />
            </Helmet>
            <button className='blog-slider-btn gradient-color sp-btn'>Read more</button>
            <section className="Main-blog-Top">
                <div className="row m-0 custom-row-blogs">
                    <div className="col-lg-6 px-0">
                        <div className="latest-blog-content px-5 py-5 h-100">
                        <img className='yellowleaf' src={yellowLeaf} />
                        {/* <img className='blogpost-banner-image' src={labsmobileinfopic2} /> */}
                    <span className='mt-5 d-block'>Meet the ROBURNA LABS Buy Bot for Telegram</span>
                    <h2 className='px-5 my-5'>Telegram Bots </h2>
                    <p>Chatbots act as digital assistants to improve customer experience by streamlining interactions between people and services. At the same time, they give businesses fresh chances to optimize client engagement for effectiveness, which can lower traditional support expenses while also decreasing service friction.
                    </p>
                    <a href='#projectdesc' className='blogpost-scroll d-block pt-md-5 mt-5'><img src={chev} /></a>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <img src={blog1} alt="latest-blog" className="latest-blog-image"/>
                    </div>
                </div>
            </section>
            
            <section id='projectdesc' className='blogpost-main-sec d-flex flex-column'>
                <p>ROBURNA LABS Buy Bot for Telegram</p>
                <h2>What can it do?</h2>
                <p>Provide price, marketcap, volume of tokens, and more!</p>
                <h2>Setup</h2>
                <p>Add @RoburnaLabs_bot to your Telegram group</p>
                <h2>Admin setup using these commands:</h2>
                <b>/add TOKEN_ADDRESS</b>
                <p> - Add the token you want me to follow (max 1 per group, must be a Pancakeswap WBNB Pair (eg: not BUSD/USDC). Default is RBA.</p>
                <b>/minbuy MINIMUM_BUY_AMOUNT</b>
                <p> - Change the minimumn amount spend to trigger a buy notification, default is 0.1 BNB.</p>
                <b>/step STEP_AMOUNT</b>
                <p> - Change the 'step' amount, or how much BNB each dot represents. Default is 0.1 BNB (Eg: 1 BNB = 10 tree)</p>
                <b>/emoji EMOJI</b>
                <p> - Change emoji, default is 🌳</p>
                <b>/delete</b>
                <p> - Delete token notifications</p>
                <h2>The Bot can also offer your group members information about the token you are following:</h2>
                <b>/price</b>
                <p> - Get the price of the token</p>
                <b>/info</b>
                <p> - Get Information about the token or project. Default is set for Roburna.</p>
                <b>/help</b>
                <p> - Repeat this message</p>

            </section>
           


        </div>
    );
}

