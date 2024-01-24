/* eslint-disable jsx-a11y/alt-text */

import yellowLeaf from '../../Assets/images/yellow-leaf.png'
import bgfade from '../../Assets/images/bg-fade.png'
import chev from '../../Assets/images/chev-down.png'
import '../Blockchain/blockchain.css'
import './disclaimer.css'
import grleaf from '../../Assets/images/gradient-leaf.png'
import { Helmet } from "react-helmet";
import { useTermAndCondition } from 'utils/hooks'


export function Terms() {
    const terms = useTermAndCondition()
    console.log('terms', terms)
    return (
        <div className="blockchain disclaimer-page">
            <Helmet>
                <title>Roburna - Terms</title>
                <meta name='description' content='Roburna uses frictionless earning and elastic validation to introduce the Proof-of-Earn (PoE) and Delegated-Proof-of-Earn (DPoE) consensus mechanisms.' />
                <meta property="og:image" content="https://roburna.com/static/media/banner.cfea34887d06d9f79b5d.png" />
            </Helmet>
            <section className='alt-banner d-flex align-items-center disclaimer-banner'>
                <img className='bg-fade' src={bgfade} />
                {/* <img className='yellowleaf' src={yellowLeaf} /> */}
                <div className='banner-text-box text-center d-flex flex-column align-items-center justify-content-center'>
                    <h2 className='px-5'>TERMS AND CONDITIONS OF USE</h2>
                    <div className='alt-box'>
                        {/* <span>WHITEPAPER</span> */}
                        <img src={grleaf} width='67px' />
                    </div>
                    <p>Our terms & conditions were last updated on 16.08.2022.</p>
                    <a className='blockchain-scroll1' href='#disclaim'><img src={chev} /></a>
                </div>
                <a className='blockchain-scroll' href='#disclaim'><img src={chev} /></a>
            </section>
            <section id='disclaim' className='disclaim-main-sec d-flex flex-column'>
                {!!terms && (<div className='expand-desc' dangerouslySetInnerHTML={{ __html: terms.terms }} />)}
            </section>
            <br /><br />
        </div>
    );
}

