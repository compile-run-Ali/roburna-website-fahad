/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import yellowLeaf from '../../Assets/images/yellow-leaf.png'
import chev from '../../Assets/images/chev-down.png'
// import blog1 from '../../Assets/images/blogs/blog5.png'
import blog2 from '../../Assets/images/blogs/blog2.png'

import {NavLink, useParams} from 'react-router-dom'

import './blog.css'
import { blogByID } from 'utils/api_Helper'
import { useEffect, useState } from 'react'
import { Blog, formatDateTime } from './layerBox'
import Loader from 'Components/Loader'

export function Blogpost() {
    const [blog, setBlog] = useState<Blog>()
    const [isloading, setLoading] = useState(false)
    const { id, title } = useParams<string>();
    useEffect(() => {
        const loadBlogs = async () => {
            try {
                setLoading(true)
                const { data } = await blogByID(id, title)
                setBlog(data[0])
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        loadBlogs()
    }, [id, title])

    return (
        <div className="blog-page">
            <Loader loading={isloading} />
            {blog && (<>
            <section className="Main-blog-Top">
            <h1 className='special-heading blog-heading'>
                BLOG
            </h1>
                <div className="row m-0 custom-row-blogs">
                    <div className="col-lg-6 px-0">

                        <div className="latest-blog-content p-md-5 p-3 h-100">
                        <img className='yellowleaf' src={yellowLeaf} />
                            <div className="tag-time">{blog.tag}| {formatDateTime(blog.created_at)}</div>
                            <h2 className='px-lg-5 my-md-5 my-3'>{blog.title}</h2>
                            <p className="mb-md-5 px-lg-5">
                                {blog.short_description}
                            </p>
                            
                        </div>
                    </div>
                    <div className="col-lg-6 p-md-0 latest-blog-image-wrap">
                        <img src={blog.image} alt="latest-blog" className="latest-blog-image"/>
                    </div>
                </div>

            </section>
            </>)}
            <div className='p-md-0 mt-md-5 mt-3 p-4 text-center'><a href='#blogdesc' className='blogpost-scroll'><img src={chev} /></a></div>
            {blog && (<>
                <section id='blogdesc' className='blogpost-main-sec d-flex flex-column'>
                    <div className='blog-description' dangerouslySetInnerHTML={{ __html: blog.description }} />
                </section>
            </>)}

        </div>
    );
}

