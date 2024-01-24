import {Modal} from "react-bootstrap";
import React from "react";
import {UpdatesTypes} from "../views/Updates/layerBoxUpdates";

interface props{
    data:UpdatesTypes
    show:boolean,
    setShow:any
    // handleClose:()=>void
}

const ViewModal:React.FC<props> =({data, show,setShow})=>{
    const handleClose =()=>setShow(!show)
    console.log('abc',data)
    return(
        <>
        {data && (
            <Modal show={show} onHide={handleClose} className="custom-modal px-lg-5">

                <Modal.Header closeButton className="modal-header-custom">
                </Modal.Header>
                <Modal.Body>
                    <div className="row px-lg-5 pb-5">
                        <div className="col-lg-6 align-self-center">
                            <div className="updates-content-modal text-center">
                                <div className="tag-time">{data.created_at}</div>
                                <h2 className='px-lg-5 mt-5 mb-5'>{data.title}</h2>

                                <div className="long-desc-text" dangerouslySetInnerHTML={{ __html: data.description }} />

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={data.image} alt="modal-update-image" className="w-100"/>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        )}
        </>

    )
}
export default ViewModal;