import { FooterBlog } from '../../Components/FooterBlog'
import Accordion from 'react-bootstrap/Accordion';
import '../Blockchain/blockchain.css'
import { Helmet } from "react-helmet";
import { useFAQs } from 'utils/hooks';





export function Faq() {
    const FAQs = useFAQs()
    return (

        <section className='faq-sec'>
            <h1 className='special-heading faq1'>
                <span>ROBURNA</span> FAQ
            </h1>
            <Helmet>
                <title>Roburna - Faq</title>
                <meta name='description' content='Roburna uses frictionless earning and elastic validation to introduce the Proof-of-Earn (PoE) and Delegated-Proof-of-Earn (DPoE) consensus mechanisms.' />
                <meta property="og:image" content="https://roburna.com/static/media/banner.cfea34887d06d9f79b5d.png" />
            </Helmet>
            <div className='faq-wrap'>
                <Accordion alwaysOpen>
                    {!!FAQs.length && FAQs.map((FAQ) => {
                        return (
                            <Accordion.Item eventKey={FAQ.id.toString()} className='expand' key={FAQ.id}>
                                <Accordion.Header>{FAQ.question}</Accordion.Header>
                                <Accordion.Body>
                                    <div className='expand-desc'>
                                        <div dangerouslySetInnerHTML={{ __html: FAQ.answer }} />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })}
                </Accordion>
                {/* <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0" className='expand'>
                        <Accordion.Header>What is Roburna Blockchain and how was it created?</Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>Roburna blockchain is an EVM network. It was created by making a fork from multiple blockchains
                                    enhanced with customised unique validation systems called PoE - proof of earn – and DPoE – delegated
                                    proof of earn.
                                </p>
                                <h3>How can I buy Roburna?</h3>
                                <p>Roburna can be purchased on Pancakswap.<br />
                                    We have made tutorials to help you. The links below will guide you on how to purchase Roburna</p>
                                <a href='https://roburna.com/how-to-buy-roburna-tokens-on-pancakeswap-to-a-metamask-wallet/' className='gradient-color'>https://roburna.com/how-to-buy-roburna-tokens-on-pancakeswap-to-a-metamask-wallet/</a>
                                <a href='https://roburna.com/how-to-buy-rba-using-pancakeswap-with-trust-wallet/' className='gradient-color'>https://roburna.com/how-to-buy-rba-using-pancakeswap-with-trust-wallet/</a>
                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='expand'>
                        <Accordion.Header>What is the slippage?</Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>Slippage is between 21% and 23% depending on the size of the order.
                                </p>

                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='expand'>
                        <Accordion.Header>How do I find Roburna contract address?</Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>The contract address of Roburna can be found on an explorer
                                </p>
                                <a href='https://bscscan.com/token/0x72A80De6cB2C99d39139eF789c1f5E78a70345aB?a=0x45CCA48eF7a4ebBd1d21b7890Dee3D8dC6c6c50D' className='gradient-color'>https://bscscan.com/token/0x72A80De6cB2C99d39139eF789c1f5E78a70345aB?a=0x45CCA48eF7a4ebBd1d21b7890Dee3D8dC6c6c50D</a>
                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='expand'>
                        <Accordion.Header>Is Roburna providing or offering faucets?</Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>Roburna features a fully operational faucet, which can be accessed at <a href="https://faucet.roburna.com/" className='gradient-color link-break-control'>https://faucet.roburna.com/</a>
                                </p>
                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className='expand'>
                        <Accordion.Header>How to add Roburna to my wallet?</Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>When some tokens are purchased on a DEX, it is sometimes required of you to add them as custom
                                    tokens to your wallet before you can see it. This also applies to Roburna. Follow the link below for the
                                    tutorial on how to add Roburna to your wallet
                                </p>
                                <a href='https://roburna.com/how-to-add-the-roburna-token-in-trust-wallet/' className='gradient-color'>https://roburna.com/how-to-add-the-roburna-token-in-trust-wallet/</a>
                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className='expand'>
                        <Accordion.Header>How does the dividend tracker work?</Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>The dividend tracker pushes out airdrops of USDT rewards to holders of Roburna of at least 10k tokens;
                                    the airdrops depend on the transaction amount.
                                </p>
                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6" className='expand'>
                        <Accordion.Header>Where do taxes go?</Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>This is how the 20% tax is divided: 4% USDT goes to rewards, 3% goes to liquidity, 5% goes to marketing,
                                    and the remaining 8% goes to buyback.
                                </p>
                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7" className='expand'>
                        <Accordion.Header>How will a holder earn dividends?</Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>With Proof of Earn (PoE), a combination of RBA holdings and validator earnings are used to generate an
                                    earnings profile, and this earnings profile is then used to establish odds of validator selection for each
                                    transaction that takes place on Roburna. As holdings and earnings increase, so too does the earning
                                    profile and, consequently, validator revenue potential. Similarly, Delegated Proof of Earn (DPoE)
                                    functions in much the same way; however, instead of being selected as a sole validator, holders/wallets
                                    may combine their earnings profiles into staked pools to increase odds of validator selection, where
                                    validator earnings are then distributed across all participating holders/wallets
                                </p>
                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8" className='expand'>
                        <Accordion.Header>Who can be a validator in Roburna Blockchain? Are there any enhancements to traditional validator
                            selection mechanisms?</Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>Anyone and everyone can become a validator on Roburna through the network’s uniquely dynamic and
                                    inclusive consensus mechanism: Proof of Earn (PoE), and Delegated Proof of Earn (DPoE). Additionally,
                                    Roburna’s frictionless elastic validation mechanism ensures that as the price of Roburna increases, the
                                    minimum holding requirements to participate in validator activities decreases, thereby ensuring the
                                    price of entry remains open and accessible to all. Roburna will implement protocol upgrades that will
                                    make the network more scalable, more secure, and more sustainable
                                </p>
                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9" className='expand'>
                        <Accordion.Header>Why an Eco-friendly blockchain?
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>Government institutions and the general public are becoming increasingly concerned with industrial
                                    operations which negatively contribute to documented environmental factors associated with global
                                    warming. By running on 100% green energy, Roburna is strategically positioned to ensure sustainable
                                    operations in the event of increasingly stringent government restrictions, and actively contribute to
                                    collective effort towards combating global warming. Roburna also provides businesses across the globe
                                    with an intuitive mechanism for transitioning operations to an eco-friendly structure as they seek
                                    compliance with environmental mandates.
                                </p>
                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="10" className='expand'>
                        <Accordion.Header>How does Roburna track Co2 emissions reduction?</Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>All Roburna blockchain nodes are run through green facilities which have been specifically designed and
                                    structured to run on 100% green energy. Additionally, these nodes are stringently tracked to monitor
                                    consumption and use metadata, which may then be converted into relevant and necessary metrics,
                                    including Co2 equivalent units. In this way, each Co2 equivalent unit associated with Roburna blockchain
                                    power consumption can be factored against the amount of Co2 units that would have been otherwise
                                    powered through emission-producing means, thereby resulting in a calculation of emissions reduction
                                    through operating on Roburna.
                                </p>
                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="11" className='expand'>
                        <Accordion.Header>Is it more costly to invest in Roburna since it is run by using green energy?</Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>Running on green energy does not make Roburna more costly to invest in. All Roburna infrastructure is
                                    funded through private capital investments, and any planned expansion in infrastructure associated with
                                    Roburna blockchain’s growth will be funded through earmarked revenue streams, meaning Roburna
                                    independently assumes all costs associated with ensuring this mode of operations without passing on
                                    these costs to the investor
                                </p>
                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="12" className='expand'>
                        <Accordion.Header>Can Roburna become a stable cryptocurrency?</Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>TRoburna’s rich portfolio of utilities, services, and use-cases will ensure consistent demand of $RBA,
                                    thereby establishing a more stable and perpetually increasing value over time. While Roburna does not
                                    have the goal of turning RBA into a stable coin, the option of launching a separate stable coin is valid.
                                </p>
                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="13" className='expand'>
                        <Accordion.Header>Does Roburna have its own oracle system for estimating NFT value?</Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>Yes, Roburna will have its own Network Oracle
                                </p>
                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="14" className='expand'>
                        <Accordion.Header>What is Roburna BaaS? How will BaaS solve the waste of human resources and capital?</Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>Roburna is designed as BaaS (blockchain as a service), meaning that the Roburna blockchain network can
                                    be copied and given to another individual/company. Consequently, this reduces the wastage of human
                                    resources as the cost of building a new blockchain network from scratch has been taken care of
                                </p>
                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="15" className='expand'>
                        <Accordion.Header>Is Roburna safe from hacking and fraud?</Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>TRoburna blockchain network is safe from hacking. While fraud is never 100% preventable, Roburna is
                                    making all necessary efforts to both screen and educate against fraudulent activities on its blockchain.
                                </p>
                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="16" className='expand'>
                        <Accordion.Header>Is Roburna open for cross-breaching network support?</Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>Roburna is prepared for breaching both in and out with other networks.
                                </p>
                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="17" className='expand'>
                        <Accordion.Header>What happens if the integrity-check fails?</Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>The validator/node that has processed the incorrect block will lose all rewards accumulated in the last
                                    block creation period, which is measured with frequent snapshots.
                                </p>
                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="18" className='expand'>
                        <Accordion.Header>What is the interaction and relation between Roburna main-chain and sub-chains?</Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>Roburna blockchain features a main-chain that can support an infinite number of sub-chains for BaaS
                                    (Blockchain as a Service). For more detailed information, please review the Whitepaper.
                                </p>
                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="19" className='expand'>
                        <Accordion.Header>Can Roburna sustain large numbers of transactions at a time?</Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>The elastic frictionless validator mechanism works with a function that scales requirements up and down
                                    based on the RBA digital currency price and market capitalization.
                                </p>
                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="20" className='expand'>
                        <Accordion.Header>Should we expect lags during transactions?</Accordion.Header>
                        <Accordion.Body>
                            <div className='expand-desc'>
                                <p>No, Roburna POE consensus mechanism is highly scalable, so the network can achieve high numbers of
                                    transactions per second without compromising network security or stability.
                                </p>
                                <br />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>


                </Accordion> */}
            </div>
            <FooterBlog />
            <br /><br />

        </section>
    );
}

