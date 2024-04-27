import React from "react";
import "../css/Home.css";
import location from "../images/location.png";
import vector from "../images/Vector.png";
import rightarrow from "../images/rightarrow.png";
import smcross from "../images/smcross.png";
import mal from "../images/mal.png";
import star from "../images/star.png";
import hat from "../images/hat.png";
import message from "../images/messsage.png";
import profile from "../images/profile.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const optionscontent = [
    "Expertise",
    "Gender",
    "Fees",
    "Language",
    "All filters",
  ];
  const featurescontent = ["Hair care", "Female", "Rs.0-Rs.500", "Hindi"];

  const cardscontent = [
    {
      id: 1,
      images: profile,
      rating: 4.5,
      name: "Dr. Prerna Narang",
      specialisation: "Male-Female Infertility ",
      experitence: "7 years of Experience",
      language: "English,Hindi,Maraathi",
      videofee: "Rs.₹800",
      chatfee: "Free",
    },
    {
      id: 2,
      images: profile,
      rating: 4.5,
      name: "Dr. Prerna Narang",
      specialisation: "Male-Female Infertility ",
      experitence: "7 years of Experience",
      language: "English,Hindi,Maraathi",
      videofee: "Rs.₹800",
      chatfee: "Free",
    },
    {
      id: 3,
      images: profile,
      rating: 4.5,
      name: "Dr. Prerna Narang",
      specialisation: "Male-Female Infertility ",
      experitence: "7 years of Experience",
      language: "English,Hindi,Maraathi",
      videofee: "Rs.₹800",
      chatfee: "Free",
    },
  ];

  return (
    <main className="homeouter">
      <section className="find">
        <p className="findtext">
          Find Expert Doctors For An In-Clinic Sessin Here
        </p>
        <div className="innerloca">
          <div className="innerleft">
            <img src={location} alt="location" className="location" />
            <p>Select Location</p>
            <img src={vector} alt="vector" className="vector" />
          </div>
          <div className="innerright">
            <p className="eg">eg. Doctor,specialisation,clinic name</p>
            <img src={rightarrow} alt="rightarrow" className="rightarrow" />
          </div>
        </div>
      </section>
      <section className="options">
        {optionscontent.map((content) => (
          <div className="content">
            <p className="optionscontent">{content}</p>
            <img src={vector} alt="vector" className="vector" />
          </div>
        ))}
      </section>
      <section className="feature">
        {featurescontent.map((content) => (
          <div className="featturesc">
            <p className="featurecontent">{content}</p>
            <img src={smcross} alt="vector" className="vector" />
          </div>
        ))}
      </section>
      <section className="cards">
        {cardscontent.map((content) => (
          <div className="cardd">
            <div key={content.id} className="profiless">
              <img src={content.images} alt="profile" className="profile" />
              <div className="rating">
                <p>{content.rating}</p>
                <img src={star} alt="star" className="star" />
              </div>
            </div>
            <p className="namee">{content.name}</p>
            <div className="incontent">
              <img src={mal} className="mal" alt="mal" />
              <span>{content.specialisation}</span>
            </div>
            <div className="incontent">
              <img src={hat} className="mal" alt="hat" />
              <span>{content.experitence}</span>
            </div>
            <div className="incontent">
              <img src={message} className="mal" alt="message" />
              <span>{content.language}</span>
            </div>
            <div className="fees">
              <div className="fee">
                <span className="head">Video Consultation</span>
                <span className="res">{content.videofee}</span>
              </div>
              <div className="fee">
                <span className="head">Chat Consultation</span>
                <span className="res">{content.chatfee}</span>
              </div>
            </div>
            <div className="buttons">
              <button onClick={() => navigate("/profile")} className="btn1 btn">
                <span>View Profile</span>
              </button>
              <button className=" btn">
                <span>Book a consultation</span>
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
