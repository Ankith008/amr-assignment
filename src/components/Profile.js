import React, { useState } from "react";
import profiles from "../images1/profiles.png";
import "../css/Profile.css";
import rating from "../images1/rate.png";
import tick from "../images1/tick.png";
import follow from "../images1/follow.png";
import socialmedia from "../images1/socialmedia.png";
import health from "../images1/health.png";
import skin from "../images1/skin.png";
import immunity from "../images1/immunity.png";
import hair from "../images1/hair.png";
import house from "../images1/house.png";
import calender from "../images1/calender.png";
import leftarrow from "../images1/leftarrow.png";
import rightarrow from "../images1/rightarrow.png";
import star from "../images1/5star.png";
import reprofile from "../images1/reprofile.png";

export default function Profile() {
  const [selectsession, setselectsession] = useState(null);
  const [selecttime, setselecttime] = useState(null);
  const [mrgtime, setmrgtime] = useState(null);
  const [evetime, setevetime] = useState(null);
  const profiledetail = {
    id: 1,
    image: profiles,
    name: "Dr. Bruce Willis",
    specialisation: "Gynecologist",
    rating: rating,
    followers: 850,
    following: "18k",
    post: 250,
  };

  const languages = ["English", "Hindi", "Telugu"];

  const specialisation = [
    {
      id: 1,
      image: health,
      name: "Women's Health",
    },
    {
      id: 2,
      image: skin,
      name: "Skin Care",
    },
    {
      id: 3,
      image: immunity,
      name: "Immunity",
    },
    {
      id: 4,
      image: hair,
      name: "Hair Care",
    },
  ];

  const concerns = [
    "Skin Treatment",
    "Pregnancy",
    "Period Doubts",
    "Endometriosis",
    "Pelvic Pain",
    "Ovarian Cysts",
    "+5 More",
  ];

  const workexperience = [
    {
      id: 1,
      image: house,
      name: "Midtown Medical Clinic",
      role: "Senior doctor",
      duration: "2016 - Present",
    },
    {
      id: 2,
      image: house,
      name: "Midtown Medical Clinic",
      role: "Senior doctor",
      duration: "2010 - 2015",
    },
  ];

  const session = [
    {
      id: 1,
      type: "In-Clinic",
      time: "45 mins",
    },
    {
      id: 2,
      type: "Video ",
      time: "45 mins",
    },
    {
      id: 3,
      type: "Chat",
      time: "10 mins",
    },
  ];

  const timeslot = [
    {
      id: 1,
      time: "Mon,10 Oct",
      howmany: "10 slots",
    },
    {
      id: 2,
      time: "Tue,11 Oct",
      howmany: "02 slots",
    },
    {
      id: 3,
      time: "Wed,12 Oct",
      howmany: "05 slots",
    },
  ];

  const morning = [
    {
      id: 1,
      time: "09:00 AM",
    },
    {
      id: 2,
      time: "09:30 AM",
    },
    {
      id: 3,
      time: "10:00 AM",
    },
    {
      id: 4,
      time: "10:15 AM",
    },
    {
      id: 5,
      time: "10:45 AM",
    },
    {
      id: 6,
      time: "11:00 AM",
    },
  ];

  const Evening = [
    {
      id: 1,
      time: "04:00 PM",
    },
    {
      id: 2,
      time: "04:15 PM",
    },
    {
      id: 3,
      time: "04:30 PM",
    },
    {
      id: 4,
      time: "04:45 PM",
    },
    {
      id: 5,
      time: "05:15 PM",
    },
  ];

  const reviews = [
    {
      id: 1,
      image: reprofile,
      name: "Alicent Hightower",
      consultation: "Consulted for Skin care",
      rating: star,
      date: "20 Januray 2023",
      review:
        "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
    },
    {
      id: 2,
      image: reprofile,
      name: "Alicent Hightower",
      consultation: "Consulted for Skin care",
      rating: star,
      date: "20 Januray 2023",
      review:
        "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
    },
  ];

  const handlemrgclick = (id) => {
    setmrgtime(id);
  };

  const handleeveclick = (id) => {
    setevetime(id);
  };

  const handletimeclick = (id) => {
    setselecttime(id);
  };

  const handlesessionclick = (id) => {
    setselectsession(id);
  };

  return (
    <main>
      <section className="box"></section>
      <section className="profilecard">
        <div className="upper"></div>
        <div className="lower">
          <div className="mainimg">
            <img
              src={profiledetail.image}
              alt="profile"
              className="profileimg"
            />
            <div className="detai">
              <span className="names">
                {profiledetail.name}
                <img src={tick} className="tick" alt="tick" />
              </span>
              <span className="special">{profiledetail.specialisation}</span>
              <img src={profiledetail.rating} alt="rating" className="rate" />
            </div>
          </div>
          <div className="social">
            <div className="followers detal">
              <span className="head">Followers</span>
              <span className="res">{profiledetail.followers}</span>
            </div>
            <div className="following detal">
              <span className="head">Following</span>
              <span className="res">{profiledetail.following}</span>
            </div>
            <div className="post detal">
              <span className="head">Posts</span>
              <span className="res">{profiledetail.post}</span>
            </div>
          </div>
          <button className="book">
            <span>Book an Appointment</span>
          </button>
        </div>
      </section>
      <section className="remainingdetails">
        <div className="remleft">
          <div className="aboutme">
            <div className="heading">
              <span className="ab">A Little About me</span>
              <img src={follow} className="follow" alt="follow" />
            </div>
            <p className="desc">
              Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
              Surat. love to work with all my hospital staff and seniour
              doctors. Completed my graduation in Gynaecologist Medicine from
              the
            </p>
            <div className="read">
              <span className="line"></span>
              <span className="re">Read More</span>
            </div>
            <div className="languages">
              <span className="lanhed">Languages Spoken</span>
              <div className="lang">
                {languages.map((lang) => (
                  <span key={lang} className="lan">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <img src={socialmedia} className="socialmedia" alt="socialmedia" />
          </div>
          <div className="specialization">
            <span className="heading">I Specialize In</span>
            <div className="speccontent">
              {specialisation.map((spec) => (
                <div key={spec.id} className="spec">
                  <img src={spec.image} alt="specialisation" />
                  <span>{spec.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="concerns">
            <span className="heading">The Concerns I Treat</span>
            <div className="concerncontent">
              {concerns.map((concern) => (
                <span key={concern} className="concern">
                  {concern}
                </span>
              ))}
            </div>
          </div>
          <div className="work">
            <span className="heading">Work Experience</span>
            <div className="workcontent">
              {workexperience.map((work) => (
                <div key={work.id} className="workexp">
                  <div className="workmain">
                    <img src={work.image} alt="work" className="workimg" />
                    <div className="workdetails">
                      <span className="workname">{work.name}</span>
                      <span className="workrole">{work.role}</span>
                    </div>
                  </div>
                  <span className="workduration">{work.duration}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reviews">
            <span className="heading">Featured Reviews (102)</span>
            {reviews.map((review) => (
              <div className="outerreview">
                <div className="outerpro">
                  <div className="pro">
                    <img src={review.image} alt="reviewer" className="reimag" />
                    <div className="prodetalis">
                      <span className="proname">{review.name}</span>
                      <span className="prorole">{review.consultation}</span>
                    </div>
                  </div>
                  <span className="date">{review.date}</span>
                </div>
                <div className="ratings">
                  <img src={review.rating} alt="rating" className="ratingimg" />
                  <p className="reviewdesc">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="remright">
          <div className="appfee">
            <span className="head">Appointment Fee</span>
            <span className="res">₹699.00</span>
          </div>
          <div className="session">
            <span className="head">Select your mode of session</span>
            <div className="lines"></div>
          </div>
          <div className="sessioncontent">
            {session.map((sess) => (
              <div
                key={sess.id}
                className="sessiontype"
                onClick={() => handlesessionclick(sess.id)}
                style={{
                  backgroundColor:
                    selectsession === sess.id ? "#CEE0D2" : "transparent",
                  border:
                    selectsession === sess.id
                      ? "1px solid #4D8A6F"
                      : "1px solid #E5E5E5",
                }}
              >
                <span className="type">{sess.type}</span>
                <span className="time">{sess.time}</span>
              </div>
            ))}
          </div>
          <div className="timeslot">
            <span className="head">Select your time slot</span>
            <div className="lines"></div>
            <img src={calender} alt="calender" className="calender" />
          </div>
          <div className="times">
            <img src={leftarrow} alt="leftarrow" className="leftarrow" />
            <div className="tislot">
              {timeslot.map((time) => (
                <div
                  key={time.id}
                  onClick={() => handletimeclick(time.id)}
                  style={{
                    backgroundColor:
                      selecttime === time.id ? "#CEE0D2" : "transparent",
                    border:
                      selecttime === time.id
                        ? "1px solid #4D8A6F"
                        : "1px solid #E5E5E5",
                  }}
                  className="timess"
                >
                  <span className="day">{time.time}</span>
                  <span className="slots">{time.howmany}</span>
                </div>
              ))}
            </div>
            <img src={rightarrow} alt="rightarrow" className="rightarrow" />
          </div>
          <div className="morning">
            <span className="headinng">Morning</span>
            <div className="morningtime">
              {morning.map((time) => (
                <span
                  key={time.id}
                  onClick={() => handlemrgclick(time.id)}
                  style={{
                    backgroundColor:
                      mrgtime === time.id ? "#CEE0D2" : "transparent",
                    border:
                      mrgtime === time.id
                        ? "1px solid #4D8A6F"
                        : "1px solid #E5E5E5",
                  }}
                  className="mrgtime"
                >
                  {time.time}
                </span>
              ))}
            </div>
          </div>
          <div className="evening">
            <span className="headinng">Evening</span>
            <div className="eveningtime">
              {Evening.map((time) => (
                <span
                  key={time.id}
                  onClick={() => handleeveclick(time.id)}
                  style={{
                    backgroundColor:
                      evetime === time.id ? "#CEE0D2" : "transparent",
                    border:
                      evetime === time.id
                        ? "1px solid #4D8A6F"
                        : "1px solid #E5E5E5",
                  }}
                  className="evetime"
                >
                  {time.time}
                </span>
              ))}
            </div>
          </div>
          <button className="confirm">
            <span>Make An Appointment</span>
          </button>
        </div>
      </section>
    </main>
  );
}
