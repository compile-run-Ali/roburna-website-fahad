import {useEffect, useState} from "react";
import {UpdatesTypes, formatDateTime, LayerOne, LayerTwo} from "../Updates/layerBoxUpdates";
import {updatesData} from "../../utils/api_Helper";
import Loader from "../../Components/Loader";
import {NavLink} from "react-router-dom";
import './updates.css'
import {Button, Modal} from "react-bootstrap";
import tempImage from '../../Assets/images/modalimagetemp.png'
import ViewModal from "../../Components/modal";



export function Updates() {

    const [updates, setUpdates] = useState<UpdatesTypes[]>([])
    const [isloading, setLoading] = useState(false)

    const [show, setShow] = useState(false);
    const [mdalData,setModalData] = useState<any>()

    // const handleClose = () => setShow(false);
    const handleModal = (input:any) => {
        setShow(true)
        setModalData(input)
    };
    useEffect(() => {
        const loadUpdates = async () => {
            try {
                setLoading(true)
                const {data} = await updatesData()
                setUpdates(data)
                console.log(data)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        loadUpdates()
    }, [])

    const findlayer = (index: number): boolean => {
        if (index === 1 || index === 2 || index === 6 || index === 7 || index === 11 || index === 12) return true
        else return false
    }
    return (
        <div className="updates-page">
            <Loader loading={isloading}/>
            {!!updates.length && (<>
                <section className="Main-blog-Top">
                    <h1 className="special-heading blog-heading">UPDATES</h1>
                    <div className="row m-0 custom-row-blogs">
                        <div className="col-lg-6 px-0 align-self-center latesupdatecols">
                            <div className="latest-blog-content latest-update-content px-5 ">
                                <div className="tag-time">{formatDateTime(updates[0].created_at)}</div>
                                <h2 className='px-lg-5 mt-5 mb-5'>{updates[0].title}</h2>
                                <p className="mb-5 px-lg-5">
                                    {updates[0].short_description}
                                </p>
                                <NavLink to="#"
                                         className='--btn-1' onClick={()=>handleModal(updates[0])}>Read more</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 p-lg-0 latest-updates-image-wrap latesupdatecols">
                            <div className="right-side-update-image">
                                
                            <img src={updates[0].image} alt="latest-blog" className="latest-blog-image updates-latest-blog-image"/>
                            </div>
                        </div>
                    </div>

                </section>
            </>)}
            <section className='blog-page-sec'>
                <div className='row'>
                    {updates && updates.map((updates, index) => {
                        if (index > 0) {
                            if (findlayer(index)) {
                                return <LayerOne handleModal={handleModal} updates={updates} key={index}/>
                            } else {
                                return <LayerTwo handleModal={handleModal} updates={updates} key={index}/>
                            }
                        }
                    })}
                </div>
                <br/><br/>
            </section>
<ViewModal data={mdalData} show={show} setShow={setShow}/>
        </div>
    )
}