import labs from "../../Assets/images/labs.png";
import yellowLeaf from "../../Assets/images/yellow-leaf.png";
import chev from "../../Assets/images/chev-down.png";
import arborswap from "../../Assets/images/ArborSwap.png";
import { Link, NavLink } from "react-router-dom";
import { FooterBlog } from "../../Components/FooterBlog";
import { useState } from "react";
import "../Blockchain/blockchain.css";
import "./labs.css";
import { Helmet } from "react-helmet";
import { useLAB } from "utils/hooks";
import { isNull, isUndefined } from "lodash";

export function Labs() {
  const { LABs, projects } = useLAB();
  const [show, setShow] = useState(false);

  return (
    <div className="blockchain">
      <Helmet>
        <title>Roburna - Labs</title>
        <meta
          name="description"
          content="ROBURNA LABS is the development arm of the Roburna ecosystem, on a mission to open up the Web3 horizon to a wide range of corporate and industrial sectors, including energy management, healthcare, agriculture and natural resources, retail, e-commerce, gaming, industrial production, and many others."
        />
        <meta
          property="og:image"
          content="https://roburna.com/static/media/banner.cfea34887d06d9f79b5d.png"
        />
      </Helmet>
      <div className="blockchain-tophalf labs-page">
        {!isUndefined(LABs) && (
          <section className="alt-banner d-flex align-items-center labs-banner">
            <img className="yellowleaf" src={yellowLeaf} />
            <div className="banner-text-box-labs banner-text-box text-center d-flex flex-column align-items-center justify-content-center">
              <img className="logo" src={labs} alt={labs} />
              <h2 className="px-5">{LABs.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: LABs.description }} />
              <a href={LABs.link} target="_blank" className="--btn-1">
                Visit Roburna Labs
              </a>
              <a className="blockchain-scroll" href="#labs">
                <img src={chev} />
              </a>
            </div>
          </section>
        )}

        <section id="labs" className="mt-lg-5 p-md-5 pt-5 p-3 text-center">
          <span>AS THE PROVERB SAYS</span>
          <h2 className="mt-2 mb-4">
            “The best time to plant a tree was 20 years ago.
            <br />
            The second best time is now.”
          </h2>
          <a href="https://roburnaforest.com/" className="--btn-1 labs-btn1">
            Visit Roburna Forest
          </a>
          <NavLink to="/contact" className="--btn-1 labs-btn2">
            Contact us
          </NavLink>
          <p className="labs-btntext">
            and start developing your next project today!
          </p>
        </section>
      </div>
      <section className="projects-sec">
        <h1 className="special-heading">PROJECTS & CASES</h1>

        {!!projects.length &&
          projects.map((project) => {
            console.log(project.project_link);
            return (
              <div className="labs-info-card mb-5">
                <img className="mobile-img" src={project.image} />
                <img className="labs-bg-img" src={project.image} />
                {project?.sub_title}
                <h2>{project.title}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />

                {/* Button container */}
                <div className="button-container">
                  {!isNull(project.project_link) ? (
                    <a
                      href={project.project_link}
                      className="--btn-1"
                      target="_blank"
                    >
                      {project.project_link === "arborswap" ||
                      project.project_link ===
                        "https://roburna.com/wallet-signup"
                        ? "Sign Up"
                        : project.project_link === "https://roburnalabs.com/"
                        ? "Request Custom Telegram Bot"
                        : project.project_link === "https://arborswap.org/"
                        ? "Visit ArborSwap"
                        : "Learn More"}
                    </a>
                  ) : // if project title is Battle of the Renegades, no button
                  project.title ===
                    "Battle of the Renegades" ? null : project.title ===
                    "Roburnalis Metaverse" ? (
                    <button onClick={() => setShow(true)} className="--btn-1">
                      Sign Up for Early Access
                    </button>
                  ) : (
                    <button className="--btn-1">Coming Soon</button>
                  )}

                  {/* Another button for "Learn More" */}
                  {!isNull(project.project_link) &&
                  project.project_link === "https://arborswap.org/" ? (
                    <a
                      href="https://arborswap.gitbook.io/product-docs/introducing/arborswap"
                      className="--btn-1"
                      target="_blank"
                    >
                      Learn More
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        <FooterBlog />
        <br />
        <br />
      </section>
      {show && (
        // simple pop up sign up asking for name email and comment/questions
        <div className="popup">
          <div className="popup_inner">
            <button className="btn btn-success" onClick={() => setShow(false)}>X</button>
            <h1>Sign Up for Early Access</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="comment" className="form-label">
                  Comment/Questions:
                </label>
                <textarea
                  className="form-control"
                  id="comment"
                  name="comment"
                  rows= {3}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
