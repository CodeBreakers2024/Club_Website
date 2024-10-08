// import React, { useState, useEffect } from "react";
// import styles from "../Stylesheets/Registration.module.css";
// import upi from "../Assets/UPI.jpg";
// import { useNavigate } from "react-router-dom";
// import firebase from "firebase/compat/app";
// import "firebase/compat/database";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }

// const contactFormDB = firebase.database().ref("registrationForm");

// const members = 3;

// const RegistrationForm = () => {
//     const navigate = useNavigate();

//     const [teamData, setTeamData] = useState({
//         'teamName': '',
//         'leader': {
//             'name': '',
//             'email': '',
//             'contact': '',
//             'year': ''
//         },
//         'members': [],
//         'payment': {
//             'transactionId': ''
//         }
//     })

//     useEffect(() => {

//         let memberlist = [];

//         for (let i = 0; i < members; i++) {
//             memberlist.push({
//                 'name': '',
//                 'email': ''
//             })
//         }

//         setTeamData(prev => ({
//             ...prev,
//             members: memberlist
//         }))
//     }, [])

//     const [page, setPage] = useState(0);

//     const handleFormSwitch = (e) => {
//         if (e.target.name === "next") setPage((prev) => prev + 1)
//         else if (e.target.name === "prev") setPage((prev) => prev - 1)
//     }

//     const handleTeamChange = (e) => {
//         const { name, value } = e.target;

//         if (name === "teamName") {
//             setTeamData((prev) => ({
//                 ...prev,
//                 [name]: value
//             }))
//         }

//         else setTeamData((prev) => ({
//             ...prev,
//             leader: {
//                 ...prev.leader,
//                 [name]: value
//             },
//         }));

//     }

//     const handleMemberChange = (e) => {
//         const { name, value } = e.target;
//         setTeamData((prev) => {
//             const updatedMembers = [...prev.members];
//             updatedMembers[page - 1] = { ...updatedMembers[page - 1], [name]: value };
//             return {
//                 ...prev,
//                 members: updatedMembers
//             };
//         });
//     }

//     const handlePaymentChange = (e) => {
//         const { name, value } = e.target;
//         setTeamData((prev) => ({
//             ...prev,
//             payment: {
//                 ...prev.payment,
//                 [name]: value,
//             },
//         }));
//     }

//     const saveMessages = (teamData) => {
//         const newContactForm = contactFormDB.push();
//         // const newContactForm = null;
//         newContactForm.set(teamData);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const allDataSnapshot = await contactFormDB.once("value");
//         // const allDataSnapshot = null;
//         const allData = allDataSnapshot.val();

//         let emails = [];

//         Object.values(allData).forEach((data) => {
            
//             emails.push(data.leader.email);
//             data.members.forEach((member) => {
//                 emails.push(member.email);
//             })

//             if (data.teamName === teamData.teamName) {
//                 alert("Team name already exists!");
//                 return;
//             }

//             if (data.leader.contact === teamData.leader.contact) {
//                 alert("Leader's contact number already exists!");
//                 return;
//             }
//         })

//         if (emails.includes(teamData.leader.email)) {
//             alert("Leader's Email already exists!");
//             return;
//         }

//         for (let i = 0; i < teamData.members.length; i++) {
//             if (emails.includes(teamData.members[i].email)) {
//                 alert(`Member ${i + 1}'s email already exists!`);
//                 return;
//             }
//         }

//         saveMessages(teamData);
//         navigate("/");
//     };
//     return (
//         <div className={styles.registrationContainer}>
//             <h1 className={styles.title}>Registration Form</h1>
//             <div className={styles.formContainer} onSubmit={handleSubmit}>

//                 {page === 0 && <TeamInfoForm teamData={teamData} handleChange={handleTeamChange} />}

//                 {page > 0 && page <= members && (
//                     <MemberInfoForm page={page} memberlist={teamData.members} handleChange={handleMemberChange} />
//                 )}

//                 {/* {page === members + 1 && <PaymentInfoForm payment={teamData.payment} handleChange={handlePaymentChange} />} */}

//                 <div className={styles.buttonGroup}>
//                     <button
//                         className={styles.prevButton}
//                         name="prev"
//                         onClick={handleFormSwitch}
//                         disabled={page === 0}>
//                         Previous
//                     </button>

//                     <button
//                         className={styles.nextButton}
//                         name="next"
//                         onClick={handleFormSwitch}
//                         disabled={page === members}>
//                         Next
//                     </button>

//                     <button
//                         className={styles.submitButton}
//                         type="submit"
//                         disabled={page !== members}
//                         onClick={handleSubmit} >
//                         Submit
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// };

// const TeamInfoForm = ({ teamData, handleChange }) => {
//     return (
//         <div className={styles.teamInfoForm}>
//             <label className={styles.formLabel}>Team Name:</label>
//             <input
//                 type="text"
//                 placeholder="Team Name"
//                 name="teamName"
//                 value={teamData.teamName}
//                 onChange={handleChange}
//                 className={styles.formInput}
//             />

//             <label className={styles.formLabel}>Leader Details</label>
//             <label className={styles.formLabel}>Name:</label>
//             <input
//                 type="text"
//                 placeholder="Leader Name"
//                 name="name"
//                 value={teamData.leader.name}
//                 onChange={handleChange}
//                 className={styles.formInput}
//             />

//             <label className={styles.formLabel}>Email:</label>
//             <input
//                 type="email"
//                 placeholder="Email"
//                 name="email"
//                 value={teamData.leader.email}
//                 onChange={handleChange}
//                 className={styles.formInput}
//             />

//             <label className={styles.formLabel}>Contact:</label>
//             <input
//                 type="phone"
//                 placeholder="Contact"
//                 name="contact"
//                 value={teamData.leader.contact}
//                 onChange={handleChange}
//                 className={styles.formInput}
//             />
//         </div>
//     )
// }

// const MemberInfoForm = ({ page, memberlist, handleChange }) => {
//     return (
//         <div className={styles.memberInfoForm}>
//             <label className={styles.formLabel}>Member {page} </label>
//             <label className={styles.formLabel}>Member Name:</label>
//             <input
//                 type="text"
//                 placeholder="Member Name"
//                 name="name"
//                 value={memberlist[page - 1].name}
//                 onChange={handleChange}
//                 className={styles.formInput}
//             />

//             <label className={styles.formLabel}>Member Email:</label>
//             <input
//                 type="email"
//                 placeholder="Member Email"
//                 name="email"
//                 value={memberlist[page - 1].email}
//                 onChange={handleChange}
//                 className={styles.formInput}
//             />
//         </div>
//     )
// }

// const PaymentInfoForm = ({ payment, handleChange }) => {
//     return (
//         <div className={styles.paymentInfoForm}>
//             <label className={styles.formLabel}>Account Details:</label>
//             <img src={upi} alt="UPI QR Code" className={styles.upiImage} />

//             <label className={styles.formLabel}>Transaction ID:</label>
//             <input
//                 type="text"
//                 placeholder="Transaction ID"
//                 name="transactionId"
//                 value={payment.transactionId}
//                 onChange={handleChange}
//                 className={styles.formInput}
//             />
//         </div>
//     )
// }

// export default RegistrationForm;