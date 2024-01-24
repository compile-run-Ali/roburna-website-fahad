/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */

import yellowLeaf from '../../Assets/images/yellow-leaf.png'
import nosearchres from '../../Assets/images/nosearchres.png'
import { NavLink } from 'react-router-dom'
import './blog.css'
import { useEffect, useState } from 'react'
import { blogData, categories, searchblogs } from 'utils/api_Helper'
import { Blog, formatDateTime, LayerOne, LayerTwo } from './layerBox'
import Loader from 'Components/Loader'

export function Blogs() {
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [cotegoriesList, setCotegories] = useState<any[]>([])
    const [selectCategory, setCatetory] = useState('all')
    const [title, settitle] = useState('')
    const [isloading, setLoading] = useState(false)

    useEffect(() => {
        const loadBlogs = async () => {
            try {
                setLoading(true)
                const { data } = await blogData()
                console.log('data', data)
                const { data: categoriesData } = await categories()
                const { data: blogs } = await searchblogs(selectCategory, title)
                setBlogs(blogs)
                setCotegories(categoriesData)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        loadBlogs()
    }, [])

    const findlayer = (index: number): boolean => {
        if (index === 1 || index === 2 || index === 6 || index === 7 || index === 11 || index === 12) return true
        else return false
    }

    const handleFilter = async (event: any) => {
        event.preventDefault()
        try {
            setLoading(true)
            const { data: blogs } = await searchblogs(selectCategory, title)
            setBlogs(blogs)
            console.log(blogs)
        } catch (err) {
            console.log('error', err)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="blog-page">
            <div className="col-lg-8 col-md-12 offset-lg-2">
                <div className="blog-search-section">
                    <form className="form-search-blog" action="">
                        <select
                            className="blog-search-field"
                            defaultValue={"Select Type"}
                            onChange={(e) => setCatetory(e.currentTarget.value)}
                        >
                            <option value="all">All Categories</option>
                            {!!cotegoriesList.length && cotegoriesList.map((category, ind) =>
                                <option key={ind} value={category.tag}>{category.tag}</option>
                            )}
                        </select>
                        <input
                            className="blog-search-input-field"
                            type='text'
                            name='name'
                            placeholder='Search Blogs'
                            onChange={(e) => settitle(e.target.value)}
                            required
                        />
                        <button type='submit' className='--btn-1 labs-btn1 search-blog-btn' onClick={handleFilter}>
                            Search
                        </button>
                    </form>
                </div>
            </div>
            <Loader loading={isloading} />
            {!!blogs.length && (<>
                <section className="Main-blog-Top">
                    <h1 className='special-heading blog-heading'>
                        BLOG
                    </h1>
                    <div className="row m-0 custom-row-blogs">
                        <div className="col-lg-6 px-0">
                            <div className="latest-blog-content p-md-5 p-3 h-100">
                                <img className='yellowleaf' src={yellowLeaf} />
                                <div className="tag-time">{blogs[0].tag} | {formatDateTime(blogs[0].created_at)}</div>
                                <h2 className='px-lg-5 my-md-5 my-3'>{blogs[0].title}</h2>
                                <p className="mb-5 px-lg-5">
                                    {blogs[0].short_description}
                                </p>
                                <NavLink to={`/blog/${blogs[0].id}/${blogs[0].title.replace(/\s+/g, '-')}`} className='--btn-1'>Read more</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 p-lg-0 latest-blog-image-wrap">
                            <img src={blogs[0].image} alt="latest-blog" className="latest-blog-image" />
                        </div>
                    </div>
                </section>
            </>)}
            <section className='blog-page-sec'>
                <div className='row'>
                    {isloading ? null:<>
                        {blogs.length ? blogs.map((blog, index) => {
                        if (index > 0) {
                            if (findlayer(index)) {
                                return <LayerOne blog={blog} key={index} />
                            } else {
                                return <LayerTwo blog={blog} key={index} />
                            }
                        }
                    }) :
                        <div className='text-center'>
                            <img src={nosearchres} alt="nosearchres" style={{width:"110px"}}/>
                            <p className='mt-2' style={{fontSize:"25px"}}>Nothing Matches your search result. Please try again!</p>
                        </div>
                    }
                    </>}
                </div>
                <br /><br />
            </section>
        </div >
    );
}

