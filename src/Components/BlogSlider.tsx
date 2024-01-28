import blog1 from "../Assets/images/blogs/blog1.png";
// import blog2 from '../Assets/images/blogs/blog2.png'
// import blog3 from '../Assets/images/blogs/blog3.png'
import Carousel from "react-multi-carousel";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { blogData, newsLetter, subscriptionUser } from "utils/api_Helper";
import { Blog, formatDateTime } from "views/Blog/layerBox";
import Loader from "./Loader";
import { validateSingle } from "utils/validate";
import { useToast } from "utils/useToast";
import { isEmpty } from "lodash";
import { act } from "react-dom/test-utils";

const blogresponsive = {

  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export function BlogSlider() {
  const [activeBlogIndex, setActiveBlogIndex] = useState(0);

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [userEmail, setUserEmail] = useState<any>();
  const [isloading, setLoading] = useState(false);
  const { toast, toastTypes } = useToast();


  const handleSlideChange = (index: number) => {
    setActiveBlogIndex(index);
  };

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        const { data } = await blogData();
        data.forEach((data) => {
          data.created_at = formatDateTime(data.created_at);
        });
        setBlogs(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    loadBlogs();
  }, []);

  const [validationError, setValidationError] = useState("");
  const changeValue = (value: string, type: string, mandatory = true) => {
    const { value: newValue, error } = validateSingle(value, type, mandatory);
    setValidationError(error);
    setUserEmail(newValue);
  };

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
  console.log(activeBlogIndex,"activeBlogIndex")

  return (
    <>
      <Loader loading={isloading} />
      <section className="home-newsletter-sec p-5">
        <h6 className="my-5">
          Subscribe to our <b>Newsletter</b> to receive updates about Roburna.
        </h6>
        <form className="newsletter-form container">
          <div className="row " style={{width:"85%",marginLeft:"auto"}}>
            <div className="col-7">
              <input
                name="email"
                type="email"
                value={userEmail}
                placeholder="Enter your email address"
                onChange={(e) => changeValue(e.target.value, "email")}
              />
              {/* {error && (<div>{error} </div>)} */}
            </div>
            <div className="col-5">
              <button className="--btn-1" type="submit" onClick={onSubmit}>
                Subscribe
              </button>
            </div>
          </div>

          <h4 className="my-5">Join the Green Revolution</h4>
        </form>
      </section>
      <section className="home-blog-sec p5">
        <h1 className="special-heading">ROBURNA BLOG</h1>
        <div className="blog-slider-wrap-out">
          <div className="blog-slider-wrap">
            <Carousel
              responsive={blogresponsive}
              autoPlay
              infinite
              autoPlaySpeed={3000}
              arrows
              showDots={true}
              afterChange={(index) => handleSlideChange(index)}
            >
              {blogs &&
                blogs.map((blog, index) => {
                  if (index > 5) return null;
                  return (
                    <div className="home-blog-card" key={index}
                    style={{
                      height:"95%",
                    }}
                    >
                      {index}
                      <img
                        className="blogs-images"
                        src={blog.image}
                        alt={blog1}
                        width="100%"
                      />
                      <div
                        className="blog-card-bottom"
                      >
                        <p className="uppercase">{blog.tag}</p>
                        <h5>{blog.title}</h5>
                        <p>{blog.short_description}</p>
                        <NavLink
                          to={`/blog/${blog.id}/${blog.title.replace(
                            /\s+/g,
                            "-"
                          )}`}
                          className="blog-slider-btn gradient-color"
                        >
                          Read more
                        </NavLink>
                      </div>
                    </div>
                  );
                })}
              {/* <div className='home-blog-card'>
                <img src={blog1} alt={blog1} width='100%' />
                <div className='blog-card-bottom'>
                  <p>TUTORIAL</p>
                  <h5>Blockchain gaming:
                    benefits and future</h5>
                  <p>Blockchain technology is changing the landscape of online gaming. In this series, we will explain the main concepts and principles...</p>
                  <NavLink to='/blogpost' className='blog-slider-btn gradient-color'>Read more</NavLink>
                </div>
              </div> */}
              {/* <div className='home-blog-card'>
                <img src={blog2} alt={blog2} width='100%' />
                <div className='blog-card-bottom'>
                  <p>TUTORIAL</p>
                  <h5>Blockchain gaming:
                    benefits and future</h5>
                  <p>Blockchain technology is changing the landscape of online gaming. In this series, we will explain the main concepts and principles...</p>
                  <NavLink to='/blogpost' className='blog-slider-btn gradient-color'>Read more</NavLink>
                </div>
              </div> */}
              {/* <div className='home-blog-card'>
                <img src={blog3} alt={blog3} width='100%' />
                <div className='blog-card-bottom'>
                  <p>TUTORIAL</p>
                  <h5>Blockchain gaming:
                    benefits and future</h5>
                  <p>Blockchain technology is changing the landscape of online gaming. In this series, we will explain the main concepts and principles...</p>
                  <NavLink to='/blogpost' className='blog-slider-btn gradient-color'>Read more</NavLink>
                </div>
              </div> */}
              {/* <div className='home-blog-card'>
                <img src={blog1} alt={blog1} width='100%' />
                <div className='blog-card-bottom'>
                  <p>TUTORIAL</p>
                  <h5>Blockchain gaming:
                    benefits and future</h5>
                  <p>Blockchain technology is changing the landscape of online gaming. In this series, we will explain the main concepts and principles...</p>
                  <NavLink to='/blogpost' className='blog-slider-btn gradient-color'>Read more</NavLink>
                </div>
              </div> */}
              {/* <div className='home-blog-card'>
                <img src={blog2} alt={blog2} width='100%' />
                <div className='blog-card-bottom'>
                  <p>TUTORIAL</p>
                  <h5>Blockchain gaming:
                    benefits and future</h5>
                  <p>Blockchain technology is changing the landscape of online gaming. In this series, we will explain the main concepts and principles...</p>
                  <NavLink to='/blogpost' className='blog-slider-btn gradient-color'>Read more</NavLink>
                </div>
              </div> */}
              {/* <div className='home-blog-card'>
                <img src={blog3} alt={blog3} width='100%' />
                <div className='blog-card-bottom'>
                  <p>TUTORIAL</p>
                  <h5>Blockchain gaming:
                    benefits and future</h5>
                  <p>Blockchain technology is changing the landscape of online gaming. In this series, we will explain the main concepts and principles...</p>
                  <NavLink to='/blogpost' className='blog-slider-btn gradient-color'>Read more</NavLink>
                </div>
              </div> */}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
