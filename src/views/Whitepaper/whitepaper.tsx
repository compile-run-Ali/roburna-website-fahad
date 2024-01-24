
import yellowLeaf from '../../Assets/images/yellow-leaf.png'
import bgfade from '../../Assets/images/bg-fade.png'
import grleaf from '../../Assets/images/gradient-leaf.png'
import poe1 from '../../Assets/images/roburna-PoE-txval.jpg'
import poe2 from '../../Assets/images/roburna-PoE-blockval.jpg'
import poe3 from '../../Assets/images/roburna-PoE-blockver.jpg'
import baas1 from '../../Assets/images/baas1.jpg'
import baas2 from '../../Assets/images/baas2.jpg'
import { FooterBlog } from '../../Components/FooterBlog'
import chev from '../../Assets/images/chev-down.png'
import Accordion from 'react-bootstrap/Accordion';


import '../Blockchain/blockchain.css'
import '../Disclaimer/disclaimer.css'
import { Helmet } from "react-helmet";
import { useWhitePaper } from 'utils/hooks'
import {isUndefined} from "lodash";
import {whitepaperbannerLAB} from "../../utils/api_Helper";


export function Whitepaper() {

    const {WhitePaper, WhitePaperbanner} = useWhitePaper()
    console.log(WhitePaperbanner)
    return (
        <div className="blockchain disclaimer-page">
            <Helmet>
                <title>Roburna - Whitepaper</title>
                <meta name='description' content='Roburna is a frictionless blockchain project, deploying the first decentralized frictionless yield blockchain currency, through the novel consensus methodologies Proof-of-Earn and Delegated-Proof-of-Earn.' />
                <meta property="og:image" content="https://roburna.com/static/media/banner.cfea34887d06d9f79b5d.png" />
            </Helmet>
            {!!WhitePaperbanner.length && (
            <section className='alt-banner d-flex align-items-center disclaimer-banner whitepaper-banner'>
                <img className='bg-fade' src={bgfade} />
                <img className='yellowleaf' src={yellowLeaf} />

                <div className='banner-text-box-labs banner-text-box text-center d-flex flex-column align-items-center justify-content-center'>
                    <div className='alt-box'>
                        {/* <span>WHITEPAPER</span> */}
                        <img src={grleaf} width='67px' />
                    </div>
                    <h2 className='px-md-5 mx-md-5 mt-md-3'>{WhitePaperbanner[0].title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: WhitePaperbanner[0].description }} />
                </div>
                <a className='blockchain-scroll' href='#whitepaper'><img src={chev} /></a>
            </section>
            )}
            <div id='whitepaper' className='faq-wrap whitepaper-faq-wrap'>
                <Accordion alwaysOpen>
                    {!!WhitePaper.length && WhitePaper.map((faq) => {
                        return (
                            <Accordion.Item eventKey={faq.id.toString()} className='expand' key={faq.id}>
                                <Accordion.Header>{faq.question}</Accordion.Header>
                                <Accordion.Body>
                                    <div className='expand-desc' dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })}
                </Accordion>
                <FooterBlog />
                <br /><br />
            </div>
        </div>
    );
}

