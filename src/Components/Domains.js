import React from 'react';
import asset1 from '../Assets/firstaaet.svg'
import asset2 from "../Assets/secondasset.svg"
import asset3 from '../Assets/thirdasset.svg'
import asset4 from '../Assets/fourthasset.svg'
import Styles from "../Stylesheets/Domain.module.css"


const Final = () => {

    return (
        <section id={Styles.domains}>
            <div className={Styles.head}>
                <div className={Styles.headText}>
                    Domains Invited
                </div>
            </div>
            <div className={Styles.content}>
                <div className={Styles.leftAligned}>
                    <div className={Styles.container}>
                        <div className={Styles.imgContainer}>
                            <img src={asset1} alt="" />
                        </div>
                        <div className={Styles.card}>
                            <h1>Competetive Programming</h1>
                            <p>
                                Join us on a journey to master the tricks of the trade - popular CP concepts, algorithms and stratagems, boosting your cognitive, logical reasoning and enhancing your coding interview skills along the way. We also hold contests where you can compete with your peers and challenge yourself. We are available 24/7 to clarify your doubts and for any other assistance you may need.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={Styles.rightAligned}>
                    <div className={Styles.container}>
                        <div className={Styles.imgContainer}>
                            <img src={asset2} alt="" />
                        </div>
                        <div className={Styles.card}> <h1>Fullstack Web Development</h1>
                            <p>
                                Rome wasn't built in a day, and neither was our website. Learn state-of-the-art app building and end-to-end full-stack development with zero compromises. Do you have anything in particular you want to learn? No problem! Our team of developers have experience in various fields, and can help out whenever required.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={Styles.leftAligned}>
                    <div className={Styles.container}>
                        <div className={Styles.imgContainer}>
                            <img src={asset3} alt="" />
                        </div>
                        <div className={Styles.card}> <h1>Android Development</h1>
                            <p>
                                More than 78% of people in the world own a smartphone. What are people doing with these gadgets? They make use of apps. App development is similar to other types of software development, such as web apps. The ability of mobile apps to exploit native capabilities on a device is the most significant difference between app development and traditional software development. We have app development enthusiasts, and we aim to grow this community of enthusiastic app developers!
                            </p>
                        </div>
                    </div>
                </div>
                <div className={Styles.rightAligned}>
                    <div className={Styles.container}>
                        <div className={Styles.imgContainer}>
                            <img src={asset4} alt="" />
                        </div>
                        <div className={Styles.card}> <h1>Blockchain</h1>
                            <p>
                                Web3 is a notion for a new version of the World Wide Web that integrates principles like decentralisation, blockchain technology, and token-based economy. Web3 development is a burgeoning new technology, and we have enthusiasts who have already begun working on blockchain, dapps, bitcoin, and so on. Join us in getting ready for the future!
                            </p>
                        </div>
                    </div>
                </div>
            </div> 

        </section>
    );
}

export default Final;