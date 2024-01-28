/* eslint-disable jsx-a11y/alt-text */

import yellowLeaf from '../../Assets/images/yellow-leaf.png'

// import bgfade from '../../Assets/images/bg-fade.png'
// import chev from '../../Assets/images/chev-down.png'
import { BlogSlider } from '../../Components/BlogSlider'


import '../Blockchain/blockchain.css'
import './contact.css'
import { useMemo, useState } from 'react'
import validate from 'utils/validate'
import { isEmpty } from 'lodash'
import { ContactInfo, contactUs } from 'utils/api_Helper'
import { useToast } from 'utils/useToast'
import {Helmet} from "react-helmet";


export function Contact() {

    const [contact, setContact] = useState<Partial<ContactInfo>>({})
    const { toast, toastTypes } = useToast()

    const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({})
    const onChange = (value: string, name: string, type: string) => {
        const { newValue, newErrors } = validate(contact, validationErrors, value, name, type)
        setContact(newValue)
        setValidationErrors(newErrors)
    }
    const mandatoryErrors = useMemo(() => {
        const _errors: { [key: string]: string } = {}
        if (isEmpty(contact.name)) _errors.name = 'This field is required'
        if (isEmpty(contact.email)) _errors.email = 'This field is required'
        if (isEmpty(contact.option)) _errors.option = 'select any one type'
        if (isEmpty(contact.message)) _errors.message = 'This field is required'
        return _errors
    }, [contact])

    const [submitClicked, setSubmitClicked] = useState(false)
    const errors: { [key: string]: string } = useMemo(() => {
        const _errors = { ...(submitClicked ? mandatoryErrors : {}), ...validationErrors }
        return _errors
    }, [submitClicked, mandatoryErrors, validationErrors])

    const valid = useMemo(() => isEmpty(errors) && isEmpty(mandatoryErrors), [errors, mandatoryErrors])
    const onSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        if (!submitClicked) setSubmitClicked(true)
        if (valid) {
            setSubmitClicked(false)
            setContact({ name: '', email: '', message: '', option: "Select Type" })
            const status = await contactUs(contact)
            if (status) {
                toast(toastTypes.success, "Success", "request has been sent")
                setSubmitClicked(false)
                setContact({})
            } else {
                toast(toastTypes.error, "Error", "something went wrong")
            }
        }
    }

    return (
        <div className="blockchain contact-page">
            <Helmet>
                <title>Roburna - Contact us</title>
                <meta name='description' content='Roburna blockchain uses a new Proof-of-Earn (PoE) consensus mechanism, offering frictionless earning and elastic validation without extensive initial investments or technical know-how.'/>
            </Helmet>
            <section className='alt-banner d-flex justify-content-center contact-banner flex-column mb-md-0 mb-5'>
                <img className='yellowleaf' src={yellowLeaf} />
                <div className='d-flex justify-content-center flex-column contact-banner-box'>
                   
                    <form className='row'>
                    <div className="col-md-6">
                    <div className='banner-text-box text-center d-flex flex-column align-items-center justify-content-center mt-md-2 mt-5 pt-md-0 pt-5'>
                        <h2>CONTACT US</h2>
                        <p>Fill out the required fields and share your thoughts with us.</p>
                        <p>Your email address will not be published. Required fields are marked *</p>
                    </div>
                    </div>
                    <div className="col-md-6"></div>
                        <div className='col-lg-6 col-12'>
                        
                            <input
                                type='text'
                                name='name'
                                value={contact.name || ""}
                                placeholder='Name*'
                                required
                                onChange={(e) => onChange(e.target.value, "name", "string")} />
                            {errors.name && (<div className='text-danger'> {errors.name} </div>)}
                            <input
                                type='email'
                                name='contact'
                                value={contact.email}
                                placeholder='Email address or Telegram handle*'
                                required
                                onChange={(e) => onChange(e.target.value, "email", "email")}
                            />
                            {errors.email && (<div className='text-danger'> {errors.email} </div>)}
                            <select
                                defaultValue={"Select Type"}
                                value={contact.option}
                                onChange={(e) => onChange(e.target.value, "option", "string")}>
                                <option hidden disabled>Select Type</option>
                                <option value="Project or partnership proposal">Project or partnership proposal</option>
                                <option value="Suggestion / Comment">Suggestion / Comment</option>
                                <option value="Question">Question</option>
                            </select>
                            {errors.option && (<div className='text-danger'> {errors.option} </div>)}
                            <button type='submit' className='--btn-1 labs-btn1 mb-4' onClick={onSubmit}>
                                Send message
                            </button>
                        </div>
                        <div className='col-lg-6 col-12'>
                            <textarea
                                name='message'
                                value={contact.message || ""}
                                required
                                placeholder='Message*'
                                onChange={(e) => onChange(e.target.value, "message", "string")} />
                            {errors.message && (<div className='text-danger'> {errors.message} </div>)}
                            <button className='--btn-1 labs-btn2' onClick={onSubmit}>Send message</button>
                        </div>
                    </form>
                </div>
            </section>
            <BlogSlider />
        </div>
    );
}

