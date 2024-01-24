import React, { useMemo, useState } from 'react';
import './arborswap.css'
import { Helmet } from "react-helmet";
import yellowleaf from 'Assets/images/yellow-leaf.png'
import arborlogo from 'Assets/images/arborlogo.png'
import validate from 'utils/validate';
import { isEmpty } from 'lodash';
import { postListWaiting, waitingList } from 'utils/api_Helper';
import ReactSelect, { components } from "react-select";

import countryList from 'react-select-country-list'
import { useToast } from 'utils/useToast';

const options = [
    // { name: "You are interested in DeFi because (select all the answers that", id: "You are interested in DeFi because (select all the answers that" },
    { label: "It’s a source of income", value: "It’s a source of income" },
    { label: "It’s a better way to invest", value: "It’s a better way to invest" },
    { label: "It’s my long-term retirement / savings fund", value: "It’s my long-term retirement / savings fund" },
    { label: "It’s my chance to run my own business", value: "It’s my chance to run my own business" },
    { label: "I just don’t want to deal with banks and governments", value: "I just don’t want to deal with banks and governments" },
    { label: "It’s the future", value: "It’s the future" },
    { label: "None of the above / don’t want to answer", value: "None of the above / don’t want to answer" },
];

const Option = (props: any) => {
    return (
        <div>
            <components.Option {...props}>
                <div className='custom-input'>
                    <label>
                        <input
                            type="checkbox"
                            checked={props.isSelected}
                            onChange={() => null}
                        />{" "}
                        {props.label}</label>
                </div>
            </components.Option>
        </div>
    );
};

export function Arborswap() {

    const { toast, toastTypes } = useToast()
    const countrylist = useMemo(() => countryList().getData(), [])
    const [listData, setListData] = useState<Partial<waitingList>>({})
    const [selected, setSelected] = useState<any[]>([]);
    var interest = selected.map(function (select) {
        return select['value'];
    });

    const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({})
    const onChange = (value: string, name: string, type: string) => {
        const { newValue, newErrors } = validate(listData, validationErrors, value, name, type)
        setListData(newValue)
        setValidationErrors(newErrors)
    }
    const mandatoryErrors = useMemo(() => {
        const _errors: { [key: string]: string } = {}
        if (isEmpty(listData.name)) _errors.name = 'This field is required'
        if (isEmpty(listData.email)) _errors.email = 'This field is required'
        // if (isEmpty(listData.interest_in_defi)) _errors.interest_in_defi = 'select any option'
        if (isEmpty(listData.relationship_with_roburna)) _errors.relationship_with_roburna = 'select any option'
        if (isEmpty(listData.interest_in_arborswap)) _errors.interest_in_arborswap = 'this field required'
        if (isEmpty(listData.gender)) _errors.gender = 'this field required'
        return _errors
    }, [listData])

    const [submitClicked, setSubmitClicked] = useState(false)
    const errors: { [key: string]: string } = useMemo(() => {
        const _errors = { ...(submitClicked ? mandatoryErrors : {}), ...validationErrors }
        return _errors
    }, [submitClicked, mandatoryErrors, validationErrors])

    const valid = useMemo(() => isEmpty(errors) && isEmpty(mandatoryErrors), [errors, mandatoryErrors])
    const onSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!submitClicked) setSubmitClicked(true)
        if (valid) {
            const status = await postListWaiting({ ...listData, interest_in_defi: interest.join(', ') })
            if (status) {
                toast(toastTypes.success, "Success", "request has been sent")
                setSubmitClicked(false)
                setListData({})
                window.location.reload();
            } else {
                console.log('')
                toast(toastTypes.error, "Error", "something went wrong")
            }
        }
    }
    return (
        <div className="arborswap">
            <section className='d-md-flex align-items-center arbor-main-banner'>
                <span className='arbor-banner-feature lottery'>Lottery</span>
                <span className='arbor-banner-feature launchpad'>Launchpad</span>
                <span className='arbor-banner-feature exchange'>Exchange</span>
                <span className='arbor-banner-feature marketplace'>Marketplace</span>
                <div className="arbor-banner-content">
                    <img src={arborlogo} alt="arbor-swap-logo" className="arbor-swap-logo" />
                    <div className="arbor-banner-text-content">
                        <h2 className="mb-5">ArborSwap: one-stop-shop for your basic – and not so basic – DeFi needs.</h2>
                        <p className="mb-5">ArborSwap is one multi-chain platform integrating many DeFi protocols: DEX, IDO, marketplace
                            (including for the RBA LABS games) and more. It will feature tools for businesses and
                            individuals, and be open to everything, from trading a new skin for a game to launching an
                            entire blockchain project.
                        </p>
                        <h3 className="mb-4">
                            Want exclusive early access to the Launchpad?
                        </h3>
                        <a href="#arbor-form" className='--btn-1 custom-button-style'>SIGN UP TO THE WAITING LIST
                        </a>
                    </div>
                </div>
            </section>
            <div className="arborswap-main arborswap-page">
                <Helmet>
                    <title>Roburna - Arborswap</title>
                    <meta name='description'
                        content='Roburna blockchain uses a new Proof-of-Earn (PoE) consensus mechanism, offering frictionless earning and elastic validation without extensive initial investments or technical know-how.' />
                </Helmet>
                <div className="col-lg-10 offset-lg-1 arborswap-column">
                    <img src={yellowleaf} alt="" className="flower" />
                    <section className='arborswap-banner'>
                        <div className='d-flex justify-content-center flex-column arborswap-banner-box mt-5'>
                            <div
                                className='banner-text-box text-center d-flex flex-column align-items-center justify-content-center mt-md-0'>
                                <h2>SIGN UP <span>TO THE WAITING LIST</span></h2>
                                <h5>Fill out the sign-up form.</h5>
                                <p>Your email address will not be published. Required fields are marked *</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div id="arbor-form" className="arbor-form-box">
                            <form className="row">
                                <div className="gender-radio">
                                    <div className="form-check form-check-inline pb-3">
                                        <label className="form-check-label" htmlFor="inlineRadio1">Gender*</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input radio-input"
                                            type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                            onChange={(e) => setListData({ ...listData, gender: "Mr" })} />
                                        <label className="form-check-label" htmlFor="inlineRadio1">Mr</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input radio-input"
                                            type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                            onChange={(e) => setListData({ ...listData, gender: "Ms" })} />
                                        <label className="form-check-label" htmlFor="inlineRadio2">Ms</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input radio-input"
                                            type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                            onChange={(e) => setListData({ ...listData, gender: "Mx" })} />
                                        <label className="form-check-label" htmlFor="inlineRadio2">Mx</label>
                                    </div>
                                    {errors.gender ? <div className='text-danger'>{errors.gender}</div> : null}
                                </div>
                                <div className="col-lg-6">
                                    <input
                                        type='text'
                                        name='name'
                                        className={`${!isEmpty(errors.name) ? 'validationError' : ""} `}
                                        value={listData.name || ""}
                                        placeholder='Name*'
                                        onChange={(e) => onChange(e.target.value, "name", "string")}
                                        required
                                    />
                                    <input
                                        type='email'
                                        name='Email'
                                        className={`${!isEmpty(errors.email) ? 'validationError' : ""} `}
                                        value={listData.email}
                                        placeholder='Email Address*'
                                        onChange={(e) => onChange(e.target.value, "email", "email")}
                                        required
                                    />
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="select-wrap">
                                                <select
                                                    className={`${!isEmpty(errors.country) ? 'validationError' : ""}`}
                                                    onChange={(e) => setListData({ ...listData, country: e.target.value })}
                                                    value={listData.country}
                                                >
                                                    <option hidden >Country of Residence</option>
                                                    {countrylist.map(country => <option value={country.value}>{country.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="select-wrap">
                                                <select
                                                    defaultValue={"Age"}
                                                    className={`${!isEmpty(errors.age) ? 'validationError' : ""} `}
                                                    onChange={(e) => setListData({ ...listData, age: e.target.value })}
                                                    value={listData.age}>
                                                    <option hidden>Age</option>
                                                    <option value="18-24">18-24</option>
                                                    <option value="25-34">25-34</option>
                                                    <option value="35-44">35-44</option>
                                                    <option value="45-54">45-54</option>
                                                    <option value="55-64">55-64</option>
                                                    <option value="65+">65+</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="select-wrap">
                                        <select
                                            defaultValue={"Income range, compared to your country of residence (optional)"}
                                            className={`${!isEmpty(errors.income_range) ? 'validationError' : ""} `}
                                            onChange={(e) => setListData({ ...listData, income_range: e.target.value })}
                                            value={listData.income_range}
                                        >
                                            <option hidden>Income range, compared to your country of residence (optional)
                                            </option>
                                            <option value="Below average">Below average</option>
                                            <option value="About average">About average</option>
                                            <option value="Above average">Above average</option>
                                            <option value="I’m rich">I’m rich</option>
                                            <option value="I could buy my country">I could buy my country</option>
                                        </select>
                                    </div>
                                    <div className="select-wrap">
                                        <select
                                            defaultValue={"Your relationship with the DeFi space"}
                                            className={`${!isEmpty(errors.relationship_with_defi) ? 'validationError' : ""} `}
                                            onChange={(e) => setListData({ ...listData, relationship_with_defi: e.target.value })}
                                            value={listData.relationship_with_defi}>
                                            <option hidden>Your relationship with the DeFi space</option>
                                            <option value="Total beginner">Total beginner</option>
                                            <option value="Starting to invest">Starting to invest</option>
                                            <option value="Involved with tools and investments for 1-2 years">Involved with
                                                tools and investments for 1-2 years
                                            </option>
                                            <option value="Experienced user and investor">Experienced user and investor
                                            </option>
                                            <option value="I run my own projects">I run my own projects</option>
                                            <option value="Influencer">Influencer</option>
                                        </select>
                                    </div>
                                    <div className="select-wrap multi-wrap multi-wrap-5">
                                        <ReactSelect
                                            options={options}
                                            isMulti
                                            closeMenuOnSelect={false}
                                            hideSelectedOptions={false}
                                            components={{ Option }}
                                            onChange={(selected: any) => setSelected(selected)}
                                            value={selected}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="select-wrap">
                                        <select
                                            defaultValue={"Your relationship with Roburna*"}
                                            className={`${!isEmpty(errors.relationship_with_roburna) ? 'validationError' : ""} `}
                                            onChange={(e) => onChange(e.target.value, "relationship_with_roburna", "string")}
                                            value={listData.relationship_with_roburna}>
                                            <option hidden>Your relationship with Roburna*</option>
                                            <option value="Just found out about it">Just found out about it</option>
                                            <option value="Interested, but not invested">Interested, but not invested
                                            </option>
                                            <option value="Investor">Investor</option>
                                        </select>
                                    </div>
                                    <input
                                        type='text'
                                        name='interest'
                                        className={`${!isEmpty(errors.interest_in_arborswap) ? 'validationError' : ""} `}
                                        value={listData.interest_in_arborswap}
                                        onChange={(e) => onChange(e.target.value, "interest_in_arborswap", "string")}
                                        placeholder='Your interest in ArborSwap*'
                                        required
                                    />
                                    <textarea
                                        name='message'
                                        className={`${!isEmpty(errors.message) ? 'validationError' : ""} custom-textarea`}
                                        onChange={(e) => onChange(e.target.value, "message", "string")}
                                        value={listData.message}
                                        required
                                        // className="custom-textarea"
                                        placeholder='Anything else you want to tell us? (optional)'
                                    />
                                    <div>
                                        <div className="form-check mb-4">
                                            <input className="form-check-input"
                                                type="checkbox" value="" id="defaultCheck1"
                                                defaultChecked
                                                onChange={(e) => e.target.checked ? setListData({
                                                    ...listData,
                                                    newsletter_roburna: "Yes"
                                                }) : setListData({ ...listData, newsletter_roburna: "No" })} />
                                            <label className="form-check-label">
                                                Sign Up for roburna Newsletter
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                id="defaultCheck2"
                                                onChange={(e) => e.target.checked ? setListData({
                                                    ...listData,
                                                    allow_data_use: "Yes"
                                                }) : setListData({ ...listData, allow_data_use: "No" })} />
                                            <label className="form-check-label custom-label-style" htmlFor="defaultCheck2">
                                                Allow Roburna to use my data for personalized communication (not to be
                                                shared with third parties)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <button className='--btn-1 custom-button-style mt-5' onClick={onSubmit}>Sign Up</button>
                        </div>
                    </section>
                </div>
            </div >
        </div >
    );
}