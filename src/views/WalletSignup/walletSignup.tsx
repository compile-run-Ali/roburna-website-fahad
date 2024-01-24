import React, { useMemo, useState } from 'react';
import './walletSignup.css'
import { Helmet } from "react-helmet";
import yellowleaf from 'Assets/images/yellow-leaf.png'
import mountain from 'Assets/images/mountain.png'
import validate from 'utils/validate';
import { isEmpty } from 'lodash';
import {postwalletWaiting, waitingList, walletwaitingList} from 'utils/api_Helper';

import ReactSelect, { components } from "react-select";

import countryList from 'react-select-country-list'
import { useToast } from 'utils/useToast';

const options = [
    { label: "Store and trade cryptocurrencies", value: "Store and trade cryptocurrencies" },
    { label: "Store and trade NFTs", value: "Store and trade NFTs" },
];
const options2 = [
    { label: "Metamask", value: "Metamask" },
    { label: "TrustWallet", value: "TrustWallet" },
    { label: "Coinbase", value: "Coinbase" },
    { label: "Binance", value: "Binance" },
    { label: "Exodus", value: "Exodus" },
    { label: "Other software wallet", value: "Other software wallet" },
    { label: "A hardware (cold storage) wallet", value: "A hardware (cold storage) wallet" },
    { label: "None of the above", value: "None of the above" },
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

export function WalletSignup() {

    const { toast, toastTypes } = useToast()
    const countrylist = useMemo(() => countryList().getData(), [])
    const [listData, setListData] = useState<Partial<walletwaitingList>>({})
    const [selected, setSelected] = useState<any[]>([]);
    const [selected2, setSelected2] = useState<any[]>([]);
    var cryptowallet = selected2.map(function (select) {
        return select['value'];
    });
    var primarywallet = selected.map(function (select) {
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
        if (isEmpty(listData.relationship_with_roburna)) _errors.relationship_with_roburna = 'select any option'
        if (isEmpty(listData.plan_to_use_roburna_wallet)) _errors.plan_to_use_roburna_wallet = 'this field required'
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
        event.preventDefault()
        if (!submitClicked) setSubmitClicked(true)
        if (valid) {
            const status = await postwalletWaiting({ ...listData, crypto_wallet: cryptowallet.join(', '), primarily_using_wallet: primarywallet.join(', ') })
            if (status) {
                toast(toastTypes.success, "Success", "request has been sent")
                setSubmitClicked(false)
                setListData({})
            } else {
                console.log('')
                toast(toastTypes.error, "Error", "something went wrong")
            }
        }
    }
    return (
        <div className="walletSignup">
            <section className='align-items-center position-relative wallet-signup-background'>
                <div className="arbor-banner-content2">
                    <div className="arbor-banner-text-content2">
                        <h2 className="mb-5">Sign up for the Roburna Wallet - your safe passage to a greener, more inclusive and accessible DeFi.</h2>
                        <p className="mb-5">
                            Planning on <b>earning dividends</b> through Roburna’s PoE / dPoE mechanisms?
                            <br/>
                            <br/>
                            How about using <b>RBA in gas-free transactions?</b>
                            <br/>
                            <br/>
                            <b>Swapping RBA</b> for Roburna game tokens or… any other tokens?
                            <br/>
                            <br/>

                            <strong>Then you’ll want the Roburna Wallet!</strong>
                            <br/>
                            <br/>

                            Our custom Wallet will be <b>launched when Roburna reaches MAINNET</b>, but you can <b>sign up for it now for a chance to get exclusive
                            access at Beta launch.</b>

                        </p>
                        <a href="#wallet-signup-form" className='--btn-1 custom-button-style'>SIGN UP FOR THE ROBURNA WALLET</a>
                    </div>
                </div>
            </section>
            <div className="arborswap-main2 arborswap-page2">
                <Helmet>
                    <title>Roburna - Arborswap</title>
                    <meta name='description'
                          content='Roburna blockchain uses a new Proof-of-Earn (PoE) consensus mechanism, offering frictionless earning and elastic validation without extensive initial investments or technical know-how.' />
                </Helmet>
                <div className="col-lg-10 offset-lg-1 arborswap-column2">
                    <img src={yellowleaf} alt="" className="flower2" />
                    <section className='arborswap-banner2'>
                        <div className='d-flex justify-content-center flex-column arborswap-banner-box mt-5'>
                            <div
                                className='banner-text-box text-center d-flex flex-column align-items-center justify-content-center mt-md-0'>
                                <h2>SIGN UP<span> TO GET EXCLUSIVE ACCESS</span></h2>
                                <h5>Fill out the sign-up form for a chance to get exclusive access at Beta launch!</h5>
                                <p>Your email address will not be published. Required fields are marked *</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div id="wallet-signup-form" className="arbor-form-box2">
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
                                                    className={`${!isEmpty(errors.country) ? 'validationError' : ""}
                                                    ${listData.country ? "selected" : ""}
                                                    `}
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
                                                    className={`${!isEmpty(errors.age) ? 'validationError' : ""}
                                                    ${listData.age ? "selected" : ""} `}
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
                                    <div className={`select-wrap`}>
                                        <select
                                            defaultValue={"Income range, compared to your country of residence (optional)"}
                                            className={`${!isEmpty(errors.income_range) ? 'validationError' : ""}${
                                                listData.income_range ? "selected" : ""
                                            } `}
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
                                    <div className="select-wrap multi-wrap multi-wrap-6">
                                        <ReactSelect
                                            className="react-select-2"
                                            options={options2}
                                            isMulti
                                            closeMenuOnSelect={false}
                                            hideSelectedOptions={false}
                                            components={{ Option }}
                                            onChange={(selected2: any) => setSelected2(selected2)}
                                            value={selected2}
                                        />
                                    </div>
                                    <div className="select-wrap multi-wrap multi-wrap-6">
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
                                        name='plan_to_use_roburna_wallet'
                                        className={`${!isEmpty(errors.plan_to_use_roburna_wallet) ? 'validationError' : ""} `}
                                        value={listData.plan_to_use_roburna_wallet}
                                        onChange={(e) => onChange(e.target.value, "plan_to_use_roburna_wallet", "string")}
                                        placeholder='How do you plan to use the Roburna Wallet?*'
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