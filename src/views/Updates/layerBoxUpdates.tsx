/* eslint-disable jsx-a11y/alt-text */
import moment from 'moment'
import { NavLink } from 'react-router-dom'

export interface UpdatesTypes {
    created_at: string
    deleted_at: string
    id: number
    image: string
    short_description: string
    title: string
    updated_at: string
    description: string
}

interface Iupdates {
    handleModal:(input:any)=>void
    updates: UpdatesTypes
    key: number
}


export const formatDateTime = (date: string) => {
    const momentValue = moment(date, true).format("MMM D, yyyy")
    return momentValue
}

export const LayerOne: React.FC<Iupdates> = ({handleModal, updates, key }) => {
    console.log('ti',updates.id)
    return (
        <div className='col-lg-6 col-12 mb-5'>
            <div className='home-blog-card'>
                <img src={updates.image} />
                <div className='blog-card-bottom'>
                    <span>{formatDateTime(updates.created_at)}</span>
                    <h4>{updates.title}</h4>
                    <p>{updates.short_description}</p>
                    <NavLink to="#" className='--btn-1' onClick={()=>handleModal(updates)}>Read more</NavLink>
                </div>
            </div>
        </div>
    )
}

export const LayerTwo: React.FC<Iupdates> = ({handleModal, updates }) => {
    return (
        <div className='col-lg-4 col-12 mb-5'>
            <div className='home-blog-card'>
                <img src={updates.image} />
                <div className='blog-card-bottom'>
                    <span>{formatDateTime(updates.created_at)}</span>
                    <h5>{updates.title}</h5>
                    <p>{updates.short_description}</p>
                    <NavLink to="#" className='blog-slider-btn gradient-color' onClick={()=>handleModal(updates)}>Read more</NavLink>
                </div>
            </div>
        </div>
    )
}
