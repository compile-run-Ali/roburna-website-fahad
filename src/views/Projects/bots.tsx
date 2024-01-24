
import yellowLeaf from '../../Assets/images/yellow-leaf.png'
import chev from '../../Assets/images/chev-down.png'
import blog1 from '../../Assets/images/whitepaper-bannerbg.png'
import labsmobileinfopic2 from '../../Assets/images/labsmobileinfopic2.png'

import { NavLink } from 'react-router-dom'


import '../Blockchain/blockchain.css'
import '../Labs//labs.css'
import '../Blog/blog.css'
import { Helmet } from "react-helmet";


export function Bots() {
    return (
        <div className="blog-page">
            <Helmet>
                <title>Roburna - Bots</title>
                <meta name='description' content='Roburna Chat bots act as digital assistants to improve customer experience by streamlining interactions between people and services.' />
                <meta property="og:image" content="https://roburna.com/static/media/banner.cfea34887d06d9f79b5d.png" />
            </Helmet>
            <section className="Main-blog-Top">
                <div className="row m-0 custom-row-blogs">
                    <div className="col-lg-6 px-0">
                        <div className="latest-blog-content px-5 py-5 h-100">
                            <img className='yellowleaf' src={yellowLeaf} />
                            {/* <img className='blogpost-banner-image' src={labsmobileinfopic2} /> */}
                            <span className='mt-5 d-block'>Meet the RBA LABS Buy Bot for Telegram</span>
                            <h2 className='px-5 my-5'>Telegram Bots </h2>
                            <p>Chatbots act as digital assistants to improve customer experience by streamlining interactions between people and services. At the same time, they give businesses fresh chances to optimize client engagement for effectiveness, which can lower traditional support expenses while also decreasing service friction.
                            </p>
                            <button className='--btn-1 mt-5'>Read more</button>
                            <a href='#projectdesc' className='blogpost-scroll d-block pt-md-5 mt-5'><img src={chev} /></a>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <img src={blog1} alt="latest-blog" className="latest-blog-image" />
                    </div>
                </div>
            </section>

            <section id='projectdesc' className='blogpost-main-sec d-flex flex-column gap-5'>
                <div>
                    <h2>
                        Roburna Buy Bot: Facilitating Token Buys Overview
                    </h2>

                    <span>
                        Roburna Buy bot - <a href='https://t.me/RoburnaLabs_bot '>https://t.me/RoburnaLabs_bot</a>  is simply a tool designed to announce token buys in groups where it's installed.
                        <br />Tutorial:
                        <br /><a href='https://youtu.be/5EvE4GvFIWU'>https://youtu.be/5EvE4GvFIWU</a>
                    </span>
                </div>
                <div>
                    <h2>
                        Robuna Mint Bot: Announcing NFT Mints Overview
                    </h2>

                    <span>
                        Roburna Mint bot - <a href='https://t.me/rba_mintbot'>https://t.me/rba_mintbot</a>
                        &nbsp;is a tool used to announce NFT mints in groups where it's installed. It contributes to generating excitement and visibility for NFT projects during their minting events.
                        <br />Tutorial:
                        <br /><a href='https://youtu.be/DPD8HY8HPSA'>https://youtu.be/DPD8HY8HPSA</a>
                    </span>
                </div>

                <div>
                    <h2>
                    ArborBot: Boosting Social Media Engagement Overview 
                    </h2>

                    <span>
                    ArborBot - <a href='https://t.me/arborswapbot'>https://t.me/arborswapbot</a>
                    &nbsp;is an innovative social engagement bot offered by Arborswap. Its purpose is to enhance social media engagement for blockchain projects. By leveraging ArborBot, projects can amplify their social media posts, reaching a broader audience within the crypto community. This increased visibility can lead to heightened interest and engagement, potentially attracting more investors and supporters.
                        <br />Tutorial:
                        <br /><a href='https://youtu.be/Z3pX28XxXjU'>https://youtu.be/Z3pX28XxXjU</a>
                    </span>
                </div>
            </section>



        </div>
    );
}

