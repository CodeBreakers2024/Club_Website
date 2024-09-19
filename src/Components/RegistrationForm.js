import React, { useState } from "react";
import styles from "../Stylesheets/Registration.module.css";
import upi from "../Assets/UPI.jpg";

const RegistrationForm = () => {

    const [teamData, setTeamData] = useState({
        'teamName': '',
        'leader': {
            'name': '',
            'email': '',
            'contact': '',
            'year': ''
        },
        'members': [
            {
                'name': '',
                'email': ''
            },
            {
                'name': '',
                'email': ''
            },
            {
                'name': '',
                'email': ''
            }
        ],
        'payment': {
            'transactionId': ''
        }
    })

    const [page, setPage] = useState(0);

    const handleFormSwitch = (e) => {
        if (e.target.name === "next") setPage((prev) => prev + 1)
        else if (e.target.name === "prev") setPage((prev) => prev - 1)
    }

    const handleLeaderChange = (e) => {
        const { name, value } = e.target;
        setTeamData((prev) => ({
            ...prev,
            leader: {
                ...prev.leader,
                [name]: value,
            },
        }));
    }

    const handleMemberChange = (e) => {
        const { name, value } = e.target;
        setTeamData((prev) => {
            const updatedMembers = [...prev.members];
            updatedMembers[page - 1] = { ...updatedMembers[page - 1], [name]: value };
            return {
                ...prev,
                members: updatedMembers
            };
        });
    }

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setTeamData((prev) => ({
            ...prev,
            payment: {
                ...prev.payment,
                [name]: value,
            },
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    
    return (
        <div className={styles.registrationContainer}>
            <h1 className={styles.title}>Registration Form</h1>
            <div className={styles.formContainer}>
                {page === 0 && <TeamInfoForm handleChange={handleLeaderChange} />}

                {page === 1 && <MemberInfoForm handleChange={handleMemberChange} />}
                {page === 2 && <MemberInfoForm handleChange={handleMemberChange} />}
                {page === 3 && <MemberInfoForm handleChange={handleMemberChange} />}

                {page === 4 && <PaymentInfoForm handleChange={handlePaymentChange} />}

                <div className={styles.buttonGroup}>
                    <button 
                        className={styles.prevButton} 
                        name="prev" 
                        onClick={handleFormSwitch} 
                        disabled={page === 0}>
                        Previous
                    </button>

                    <button 
                        className={styles.nextButton} 
                        name="next" 
                        onClick={handleFormSwitch} 
                        disabled={page === 4}>
                        Next
                    </button>

                    <button 
                        className={styles.submitButton} 
                        type="submit" 
                        disabled={page !== 4}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}


const TeamInfoForm = ({ handleChange }) => {
    return (
        <div className={styles.teamInfoForm}>
            <label className={styles.formLabel}>Team Name:</label>
            <input 
                type="text" 
                placeholder="Team Name" 
                name="teamName" 
                onChange={handleChange} 
                className={styles.formInput} 
            />

            <label className={styles.formLabel}>Leader Details</label>
            <label className={styles.formLabel}>Name:</label>
            <input 
                type="text" 
                placeholder="Leader Name" 
                name="name" 
                onChange={handleChange} 
                className={styles.formInput} 
            />

            <label className={styles.formLabel}>Email:</label>
            <input 
                type="email" 
                placeholder="Email" 
                name="email" 
                onChange={handleChange} 
                className={styles.formInput} 
            />

            <label className={styles.formLabel}>Contact:</label>
            <input 
                type="phone" 
                placeholder="Contact" 
                name="contact" 
                onChange={handleChange} 
                className={styles.formInput} 
            />
        </div>
    )
}

const MemberInfoForm = ({ handleChange }) => {
    return (
        <div className={styles.memberInfoForm}>
            <label className={styles.formLabel}>Member Name:</label>
            <input 
                type="text" 
                placeholder="Member Name" 
                name="name" 
                onChange={handleChange} 
                className={styles.formInput} 
            />

            <label className={styles.formLabel}>Member Email:</label>
            <input 
                type="email" 
                placeholder="Member Email" 
                name="email" 
                onChange={handleChange} 
                className={styles.formInput} 
            />
        </div>
    )
}

const PaymentInfoForm = ({ handleChange }) => {
    return (
        <div className={styles.paymentInfoForm}>
            <label className={styles.formLabel}>Account Details:</label>
            <img src={upi} alt="UPI QR Code" className={styles.upiImage} />

            <label className={styles.formLabel}>Transaction ID:</label>
            <input 
                type="text" 
                placeholder="Transaction ID" 
                name="transactionId" 
                onChange={handleChange} 
                className={styles.formInput} 
            />
        </div>
    )
}

export default RegistrationForm;
