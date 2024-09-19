import React from "react";
// import Image from "../Assets/Aboutbg.svg";
import Style from "../Stylesheets/Pgabout.module.css";
// import Styling from "../Stylesheets/AboutTeam.module.css";
// import logo from "../Assets/tcblogo.jpg";
import Domain from './Domain'
import domains from "../data/Members.json";

// const facultyMembers = [
//   {
//     name: "Ashish Chandak",
//     designation: "Club Incharge",
//     image: logo,
//   },
// ];

// const FacultyMembers = ({ members }) => {
//   return (
//     <div className={Styling.teamContainer}>
//       {members.map((member, index) => (
//         <div key={index} className={Styling.memberCard}>
//           <div className={Styling.mimage}>
//             <img
//               src={member.image}
//               alt={`${member.name}'s picture} className={Styling.memberImage`}
//             />
//           </div>
//           <h3 className={Styling.memberName}>{member.name}</h3>
//           <h4 className={Styling.h4}>{member.designation}</h4>
//         </div>
//       ))}
//     </div>
//   );
// };
// const teamMembers = [
//   {
//     name: "Harsh Diwase",
//     designation: "President",
//     image: logo,
//   },
//   {
//     name: "Muskan Jaiswal",
//     designation: "Vice-President",
//     image: logo,
//   },
// ];
// const TeamMember = ({ members }) => {
//   return (
//     <div>
//       {members.map((member, index) => (
//         <div key={index} className={Styling.memberCard}>
//           <div className={Styling.mimage}>
//             <img
//               src={member.image}
//               alt={`${member.name}'s picture} className={Styling.memberImage`}
//             />
//           </div>
//           <h3 className={Styling.memberName}>{member.name}</h3>
//           <h4 className={Styling.h4}>{member.designation}</h4>
//         </div>
//       ))}
//     </div>
//   );
// };

function PgAbout() {
  return (
    <>
      <div className={Style.contianer}>
        <h2 className={Style.h2}> About Us </h2>
        <p className={Style.para}>
          The CodeBreakers Club is a club of Shri Ramdeobaba College Of
          Engineering And Management, Nagpur, Maharashtra-440013. The
          CodeBreakers Club comes under the Technical Club and has a speciality
          of Programming languages, Competitive coding, Web Developemnt, IOT,
          AIML, Open Source Intelligence and many more. The club is a SRC
          (Student's Representative Counsil) which is a student body ran by the
          cuurent students studying in the college. The club organises many
          events for the college and represents RCOEM in different events held
          over All over India.
        </p>
      </div>
      {/* <div className={Styling.team}>
        <h2 className={Styling.h2}>Meet Our Team</h2>
        <h3 className={Styling.h3}>Faculty Incharge</h3>

        <FacultyMembers members={facultyMembers} />

        <h3 className={Styling.h3}>Core Team</h3>
        <div className={Styling.teamContainer}>
          <TeamMember members={teamMembers} />
        </div>
      </div> */}
      {domains.map((domain, i) => {
            return <Domain key={i} domain={domain} />;
          })}
    </>
  );
}

export default PgAbout;
