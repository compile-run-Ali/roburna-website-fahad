

import labs from '../../Assets/images/labs.png'
import yellowLeaf from '../../Assets/images/yellow-leaf.png'
import chev from '../../Assets/images/chev-down.png'
import arborswap from '../../Assets/images/ArborSwap.png'
import { Link, NavLink } from 'react-router-dom'
import { FooterBlog } from '../../Components/FooterBlog'

import '../Blockchain/blockchain.css'
import './labs.css'
import { Helmet } from "react-helmet";
import { useLAB } from 'utils/hooks'
import { isNull, isUndefined } from 'lodash'



export function Labs() {

    const { LABs, projects } = useLAB()

    return (
        <div className="blockchain">
            <Helmet>
                <title>Roburna - Labs</title>
                <meta name='description' content='RBA LABS is the development arm of the Roburna ecosystem, on a mission to open up the Web3 horizon to a wide range of corporate and industrial sectors, including energy management, healthcare, agriculture and natural resources, retail, e-commerce, gaming, industrial production, and many others.' />
                <meta property="og:image" content="https://roburna.com/static/media/banner.cfea34887d06d9f79b5d.png" />
            </Helmet>
            <div className='blockchain-tophalf labs-page'>
                {!isUndefined(LABs) && (
                    <section className='alt-banner d-flex align-items-center labs-banner'>
                        <img className='yellowleaf' src={yellowLeaf} />
                        <div className='banner-text-box-labs banner-text-box text-center d-flex flex-column align-items-center justify-content-center'>
                            <img className='logo' src={labs} alt={labs} />
                            <h2 className='px-5'>{LABs.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: LABs.description }} />
                            <a href={LABs.link} target="_blank" className='--btn-1'>ROBURNA SCHOOL</a>
                            <a className='blockchain-scroll' href='#labs'><img src={chev} /></a>
                        </div>
                    </section>
                )}

                <section id='labs' className='mt-lg-5 p-md-5 pt-5 p-3 text-center'>
                    <span>AS THE PROVERB SAYS</span>
                    <h2 className='mt-2 mb-4'>“The best time to plant a tree was 20 years ago.<br />
                        The second best time
                        is now.”
                    </h2>
                    <NavLink to='/contact' className='--btn-1 labs-btn1'>Contact us and start developing your next project today! </NavLink>
                    <NavLink to='/contact' className='--btn-1 labs-btn2'>Contact us</NavLink>
                    <p className='labs-btntext'>and start developing your next project today!</p>

                </section>
            </div>
            <section className='projects-sec'>
                <h1 className='special-heading'>
                    PROJECTS & CASES
                </h1>

                {!!projects.length && projects.map((project => {
                    console.log(project.project_link)
                    return (
                        <div className='labs-info-card mb-5'>
                            <img className='mobile-img' src={project.image} />
                            <img className='labs-bg-img' src={project.image} />
                            {project?.sub_title}
                            {/* <span className='mb-3'>{project?.sub_title}</span> */}
                            <h2>{project.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: project.description }} />
                            {!isNull(project.project_link) ?
                                <a href={project.project_link} className='--btn-1' target="_blank">
                                    {project.project_link === "arborswap" || project.project_link === "https://roburna.com/wallet-signup" ? "Sign Up" : "Learn More"}
                                </a> : <button className='--btn-1'>Coming soon</button>}
                        </div>
                    )
                }))}
                <FooterBlog />
                <br /><br />
            </section>

        </div>
    );
}

