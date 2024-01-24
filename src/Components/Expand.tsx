import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import chev from '../Assets/images/chev-down.png'

interface faq {
    id: string;
    Name: string;
    Desc: string;
    Link1: string;
    Link2: string;
}
interface whitepaper {
    id: string;
    Name: string;
    // Desc: string;

}

export function Expand(props: faq) {

    const [open, setOpen] = useState(false);

    return (
        <div className='expand'>
            <button
                onClick={() => setOpen(!open)}
                aria-controls={props.id}
                aria-expanded={open}                
            >
                {props.Name}
                <img src={chev} className='expand-chev' />
            </button>
            
            <Collapse in={open}>
                <div id={props.id} className='expand-desc'>

                    {props.Desc}
                    <a href={props.Link1} className='gradient-color'>{props.Link1}</a>
                    <a href={props.Link2} className='gradient-color'>{props.Link2}</a>
                    <br /><br />
                </div>
            </Collapse>
        </div>
    );
}


export function Expand2(props: whitepaper) {

    const [open, setOpen] = useState(false);

    return (
        <div className='expand'>
            <button
                onClick={() => setOpen(!open)}
                aria-controls={props.id}
                aria-expanded={open}
            >
                {props.Name}
                <img id={props.id} src={chev} className='expand-chev' />
            </button>
            
            <Collapse in={open}>
                <div id={props.id} className='expand-desc'>


                    <p>Roburna is a frictionless blockchain project, deploying the first decentralized frictionless yield
                    blockchain currency, through the novel consensus methodologies Proof-of-Earn and
                    Delegated-Proof-of-Earn.</p>

                    <b>1. The Problem</b>
                    <p>   Blockchains, which were formerly inclusive and open to all, have grown centralized, barring
                    people from earning rewards or participating in validation, unless able to make large initial
                    investments of capital (see the Proof-of-Stake mechanism) or computing power (Proof-of-Work
                    mechanism). These practices harm the environment and slow down crypto adoption.</p>

                    <b>  2. The Solution</b>
                    <p>      By offering a blockchain with a frictionless core token, we hope to increase inclusivity,
                    accessibility, and acceptance. Everyone who uses or interacts with the Roburna blockchain
                    becomes a holder and can earn dividends, while also standing a chance to become a Roburna
                    validator. Roburna allows nodes to run and validate on many devices. Becoming a Roburna
                    validator does not require a huge investment.</p>

                    <b>  3. Consensus Mechanisms</b>
                    <p>        a) PoE (Proof of Earn)
                    Validators are chosen based on their holding and transaction history, not their investment or
                    computing capabilities. This creates both a democratic validation ecosystem and a process that is
                    fully sustainable, as well as environmentally responsible.</p>
                    <p>         b) Delegated-Proof-of-earn (DPoE)
                    Delegated-Proof-of-Earn allows participants to pool resources in order to act as a collective
                    Roburna blockchain validator and share in the validation rewards. No fees are applied in DPoE,
                    an additional advantage for smaller participants, enabling wider participation. Limits on the
                    amounts that can be contributed to a pool will be applied to avoid abuse.</p>

                    <b>           4. Earning dividends</b>
                    <p>       All holders will earn through frictionless tax reflections in the form of RBA digital currency.
                    These earnings are cross main-chain/sub-chain and can be earned no matter where participants
                    reside within the Roburna ecosystem.
                    The second method of earning on the Roburna blockchain is through validator rewards, or by
                    proposing blocks, regardless of position within the Roburna ecosystem.</p>

                    <b>  5. Roburna BaaS (Blockchain as a Service)</b>
                    <p>            The complexities of establishing, managing, and maintaining blockchain infrastructure hinder
                    mainstream adoption of the technology. Roburna’s Blockchain as a Service helps organizations
                    overcome these challenges and put the technology to use without needing to become experts.</p>

                    <br /><br />
                </div>
            </Collapse>
        </div>
    );
}

