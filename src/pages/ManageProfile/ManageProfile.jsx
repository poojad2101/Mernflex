import React, { useEffect, useState } from "react"
import "../ProfilePage/ProfilePage.css"
import * as ProfileAPI from "../../utilities/profiles-api";
import { Link } from 'react-router-dom'

const propic1 = require("../../images/profile-icon1.png")
const propic2 = require("../../images/profile-icon2.png")
const propic3 = require("../../images/profile-icon3.png")
const propic4 = require("../../images/profile-icon4.png")
const propic5 = require("../../images/profile-icon5.png")
const propic6 = require("../../images/profile-icon6.png")

export default function ProfilePage({profiles, clickedProfile, setClickedProfile}) {
    const [visible, setVisible] = useState(false)
    const [profilesTry, setProfilesTry] = useState([])
    console.log(profilesTry)
    const [profileList, setProfileList] = useState([])
    const [profile, setProfile] = useState({
        ProfileName: ''
      });
      const [error, setError] = useState('');

      const images = [propic1,propic2,propic3,propic4,propic5,propic6]
      

      let ran
      function randomimg (){
       ran = Math.floor(Math.random() * images.length)
       return ran
      }
    
      function handleChange(evt) {

        const newProfile= {
          imgClr: randomimg(),
          [evt.target.name]: evt.target.value
        }
        console.log(newProfile)

        setProfile({ ...profile, [evt.target.name]: evt.target.value });
        setError('');
      }
    
      async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
            const newProfile = await ProfileAPI.createProfile(profile);
            setProfile(newProfile);
        } catch {
          setError('Profile creation failed');
        }
      }

      async function handleClick(evt){
        await setClickedProfile(evt)
        console.log("clicked Profile:", clickedProfile)
      }

      // console.log(profiles)

      //// used for the original showprofiles  ////
    
      useEffect(function(){
          async function getTheProfiles(){
          const profiles = await ProfileAPI.getProfiles();
          console.log(profiles)
          setProfilesTry(profiles) 
        }
        getTheProfiles()
      },[])

      useEffect(() => {
        setProfileList(profiles)
      }, [profiles]);
    
    return(
        <div class="profile-page">
            <h1>Who's Watching?</h1>
            <div className="profiles">
              {profiles.map((profile) => {
                randomimg()
            return <div className="profile-cont">
                      {/* <div class="profile-icon"></div> */}
                      <Link to={`/profiles/manage/${profile.ProfileName}`}><img className = "profile-icon" src={images[ran]} alt="" onClick={() => handleClick(profile)}/></Link>
                      <h4>{profile.ProfileName}</h4>
                  </div>
          })}
          <div className="profile-cont">
            <a className="profile-icon create-profile text-standards hover" onClick={() => setVisible(!visible)}>{visible ? '-' : '+'}</a>
                {visible && 
                    <div>
                        <form className="form" onSubmit={handleSubmit}>
                            <input type="text"
                            placeholder="Create Profile" 
                            name="ProfileName" 
                            value={profile.ProfileName}
                            onChange={handleChange}>
                            </input>
                            {/* <input type="checkbox" value="autoPlay"></input> */}
                            <input type="submit" className="hover"></input>
                        </form>
                    </div> }
            <h4>Create Profile</h4>
          </div>
        </div>
            <Link className="manage-btn" to="/profiles/manage" profiles={profiles}><button>Manage Profiles</button></Link>
        </div>
    );
  }