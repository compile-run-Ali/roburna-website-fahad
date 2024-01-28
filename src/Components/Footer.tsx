/* eslint-disable jsx-a11y/anchor-is-valid */
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { blogData, newsLetter } from "utils/api_Helper";
import { useToast } from "utils/useToast";
import { validateSingle } from "utils/validate";
import { Blog } from "views/Blog/layerBox";
import blog1 from "../Assets/images/blogs/blog1.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  const [latestBlog, setLatestBlog] = useState<Blog>();
  const [userEmail, setUserEmail] = useState<any>();
  const { toast, toastTypes } = useToast();

  const [validationError, setValidationError] = useState("");
  const changeValue = (value: string, type: string, mandatory = true) => {
    const { value: newValue, error } = validateSingle(value, type, mandatory);
    setValidationError(error);
    setUserEmail(newValue);
  };

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const { data } = await blogData();
        setLatestBlog(data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    loadBlogs();
  }, []);

  const onSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (validationError) toast(toastTypes.error, "ERROR", validationError);
    else if (isEmpty(userEmail))
      toast(toastTypes.error, "ERROR", "email is required");
    else {
      const status = await newsLetter(userEmail);
      if (status) toast(toastTypes.success, "Success", "request has been sent");
      else toast(toastTypes.error, "ERROR", "someting went wrong");
      setUserEmail("");
    }
  };

  return (
    <footer className="px-lg-5 pt-lg-5 px-md-2 pt-md-5">
      <div className="row">
        <div className="col-xl-2 col-md-6 footer-nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "item" : ""} mb-1 mb-lg-0`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/blockchain"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "item" : ""} mb-1 mb-lg-0`
            }
          >
            BLOCKCHAIN
          </NavLink>
          <NavLink
            to="/whitepaper"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "item" : ""} mb-1 mb-lg-0`
            }
          >
            WHITEPAPER
          </NavLink>
          <NavLink
            to="/labs"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "item" : ""} mb-1 mb-lg-0`
            }
          >
            ROBURNA LABS
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "item" : ""} mb-1 mb-lg-0`
            }
          >
            BLOG
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "item" : ""} mb-1 mb-lg-0`
            }
          >
            FAQ
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "item" : ""} mb-1 mb-lg-0`
            }
          >
            CONTACT
          </NavLink>
        </div>
        {latestBlog && (
          <div className="col-md-4 footer-blog">
            <h5>OUR LATEST BLOG POST</h5>
            <p className="pr-20">
              <img
                src={latestBlog.image}
                alt={blog1}
                width="95px"
                height="95px"
              />
              <NavLink
                to={`/blog/${latestBlog.id}/${latestBlog.title.replace(
                  /\s+/g,
                  "-"
                )}`}
              >
                <b>{latestBlog.title}</b>
              </NavLink>
              <p>{latestBlog.short_description}</p>
            </p>
          </div>
        )}
        <div className="col-md-3 footer-projects">
          <h5>LATEST PROJECTS</h5>
          <NavLink to="/labs">ArborSwap</NavLink>
          <NavLink to="/bots">Roburna Army Bot</NavLink>
          <NavLink to="/labs">RobuPay</NavLink>
            <NavLink to="/blockchain">Visit Roadmap</NavLink>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <a
              href="https://t.me/roburna"
              target="_blank"
              style={{ color: "black" }}
            >
              <FaTelegramPlane size={30} />
            </a>
            <a
              href="https://discord.gg/roburna"
              target="_blank"
              style={{ color: "black" }}
            >
              <FaDiscord size={30} />
            </a>
            <a
              href="https://www.facebook.com/roburna"
              target="_blank"
              style={{ color: "black" }}
            >
              <FaFacebookF size={30} />
            </a>
            <a
              href="https://www.instagram.com/roburna"
              target="_blank"
              style={{ color: "black" }}
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCVv6mQ8Zw3sQYfJ3hG5mU7w"
              target="_blank"
              style={{ color: "black" }}
            >
              <FaYoutube size={30} />
            </a>
            <a
              href="https://www.linkedin.com/company/roburna"
              target="_blank"
              style={{ color: "black" }}
            >
              <FaLinkedinIn size={30} />
            </a>
            <a
              href="https://www.tiktok.com/@roburna"
              target="_blank"
              style={{ color: "black" }}
            >
              <FaTiktok size={30} />
            </a>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 d-flex align-items-end flex-column gap-30 footer-form">
          <h6 className="text-md-end text-center">
            The power of green energy put to work on real-world problems
          </h6>
          <p className="text-md-end text-center">
            Subscribe to our Newsletter to receive updates about Roburna.
          </p>
          <form className="footer-newsletter">
            <input
              name="email"
              type="email"
              value={userEmail}
              placeholder="Email address"
              onChange={(e) => changeValue(e.target.value, "email")}
            />
            <button className="--btn-1" type="submit" onClick={onSubmit}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="align-items-end flex-column gap-30 footer-form mobile-form">
        <h6 className="text-md-right tex-center">
          The power of green energy put to work on real-world problems
        </h6>
        <p className="text-md-right tex-center">
          Subscribe to our Newsletter to receive updates about Roburna.
        </p>
        {/* <form className='footer-newsletter'>
                    <input name='email' type='email' placeholder='Email address' required />
                    <button className='--btn-1' type='submit'>Subscribe</button>
                </form> */}
        <form className="footer-newsletter">
          <input
            name="email"
            type="email"
            value={userEmail}
            placeholder="Email address"
            onChange={(e) => changeValue(e.target.value, "email")}
          />
          <button className="--btn-1" type="submit" onClick={onSubmit}>
            Subscribe
          </button>
        </form>
      </div>
      <div className="copyright">
        © 2022 All Right Reserved. Roburna is a registered trademark of ROBURNA
        LABS.
        <span>
          <NavLink to="/terms-and-conditions" className="gradient-color">
            {" "}
            Privacy & Terms
          </NavLink>{" "}
          |
          <NavLink to="/disclaimer" className="gradient-color">
            {" "}
            Cookie Preferences
          </NavLink>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
