import React from 'react';
import toast from 'react-hot-toast';
import { background, contentTest, image } from './types';
import './toast.css';


const Toast: React.FC<contentTest> = ({ type, title, discription }) => (
    <>
        {toast.custom((t) => (
            <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} ${background[type]} toast-div `}>
                <div className="p-2 p-sm-3 "
                    style={{ border: '1px solid #1b2139', padding: '0px', backgroundColor: "#1b2139" }}>
                    <div className="d-flex">
                        <img
                            className="toast-img"
                            src={image[type]} style={{ height: '50px', width: '50px' }}
                            alt="" />
                        <div className="ml-3">
                            <p className="mb-0 toast-name text-light">{title}</p>
                            <p className="mt-1 toast-discription text-light">{discription}</p>
                        </div>
                    </div>
                    <div className="cross">
                        <i className="far fa-times pointer text-light" onClick={() => toast.dismiss(t.id)}></i>
                    </div>
                </div>
            </div>
        ))}
    </>
);

export default Toast;
export { toastTypes } from './types'






