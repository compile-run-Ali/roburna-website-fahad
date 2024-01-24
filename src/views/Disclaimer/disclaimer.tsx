
import yellowLeaf from '../../Assets/images/yellow-leaf.png'
import bgfade from '../../Assets/images/bg-fade.png'
import chev from '../../Assets/images/chev-down.png'
import '../Blockchain/blockchain.css'
import './disclaimer.css'
import grleaf from '../../Assets/images/gradient-leaf.png'
import { Helmet } from "react-helmet";
import { useDisclaimer } from 'utils/hooks'


export function Disclaimer() {

    const disclaimer = useDisclaimer()
    console.log("disclaimer", disclaimer)
    return (
        <div className="blockchain disclaimer-page">
            <Helmet>
                <title>Roburna - Disclaimer</title>
                <meta name='description' content='Roburna uses frictionless earning and elastic validation to introduce the Proof-of-Earn (PoE) and Delegated-Proof-of-Earn (DPoE) consensus mechanisms.' />
                <meta property="og:image" content="https://roburna.com/static/media/banner.cfea34887d06d9f79b5d.png" />
            </Helmet>
            <section className='alt-banner d-flex align-items-center disclaimer-banner'>
                <img className='bg-fade' src={bgfade} />
                {/* <img className='yellowleaf' src={yellowLeaf} /> */}

                <div className='banner-text-box text-center d-flex flex-column align-items-center justify-content-center'>
                    <h2 className='px-5'>DISCLAIMER</h2>
                    <div className='alt-box'>
                        {/* <span>WHITEPAPER</span> */}
                        <img src={grleaf} width='67px' />
                    </div>
                    <p>Our disclaimer was last updated on 16.08.2022.
                        <br /><br />
                        <b>Definitions<br />
                            For this Disclaimer:</b>
                        <br /><br />
                        <b>“Blockchain”</b> refers to Roburna<br />
                        <b> “Service”</b> refers to the website.<br />
                        <b>“You”</b> means the individual accessing the Service, or the Blockchain, or other legal entity on behalf of which such individual is accessing or using the service, as applicable. <br />
                        <b>“Website”</b> refers to Roburna, accessible from     <a href='https://roburna.com/' className='gradient-color'><b>https://roburna.com/</b></a>

                    </p>
                    <a className='blockchain-scroll1' href='#disclaim'><img src={chev} /></a>
                </div>
                <a className='blockchain-scroll' href='#disclaim'><img src={chev} /></a>
            </section>

            <section id='disclaim' className='disclaim-main-sec d-flex flex-column'>
                {!!disclaimer && (<div className='expand-desc' dangerouslySetInnerHTML={{ __html: disclaimer.disclaimer }} />)}
            </section>
            {/* <section id='disclaim' className='disclaim-main-sec d-flex flex-column'>
                <h4>Website Disclaimer </h4>
                <p>The information contained in the Service is for general information purposes only. </p>
                <p>The Blockchain assumes no responsibility for errors or omissions in the contents of the Service.</p>
                <p>In no event shall the company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence, or other torts, arising out of or in connection with the use of the Service or the content of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents of the Service at any time without prior notice.</p>
                <p>The Company does not warrant that the Service is free of viruses or other harmful components. </p>
                <hr />
                <h4>SUBSCRIPTIONS AND QUERIES</h4>
                <p>If you choose to provide us with your email address or any other personally identifiable information, we will use it only to send you our newsletter or respond to your query.</p>
                <p>If you choose to unsubscribe from the newsletters, you’ll stop receiving any newsletters.</p>
                <hr />
                <h4>COPYRIGHT </h4>
                <p>We Roburna, reserve all copyrights on text or images used on the website or in the newsletters. The text or images may not be copied or distributed without the prior permission of Roburna.
                </p>
                <p>If there is any approved use of the content, the following conditions should be followed:
                </p>
                <p>●	The source of copied material should be mentioned as Roburna;</p>
                <p>●	This statement should appear on all forms of distribution.
                </p>
                <hr />
                <h4>E-MAIL</h4>
                <p>You may choose to communicate with us via e-mail to <a href='mailto:info@roburna.com' className='gradient-color'>info@roburna.com</a>However, in case you do so, you should note that the security of e-mail is unreliable. By sending confidential or sensitive e-mail messages which are unencrypted you accept the risks of such uncertainty and possible breach of confidentiality or privacy over the internet.</p>
                <hr />
                <h4>NO WARRANTY</h4>
                <p>The information contained in this website and newsletters is provided by Roburna as a service/promotion to its users, subscribers, customers, and possibly others. It does not contain (legal) advice. Although we try to provide quality information, we do not guarantee results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance for a particular purpose.</p>
                <hr />
                <h4>NO LIABILITY </h4>
                <p>In no way Roburna is liable to the user or any other party for any damages, costs of any character including but not limited to direct or indirect, consequential, incidental, or other costs or damages, via the use of the information contained in the website or newsletters.</p>
                <hr />
                <h4>CHANGES </h4>
                <p>We may make changes to this information at any time without prior notice. We do not commit to updating the information contained in this website or newsletters.</p>
            </section> */}
            <br /><br />

        </div>
    );
}

