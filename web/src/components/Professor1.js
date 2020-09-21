import React from 'react'
import "./Professor1.scss"
import Professor_img from "../img/Professor/Professor_img.jpg"
import logo from "../img/LOGO/LOGO_1.png";
import Mail_img from "../img/Professor/Mail_img.png"
import Call_img from "../img/Professor/Call_img.png"
import { BackTop } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";



const Professor = () => {
    return (
        <>
            <div className="top" >
                <a href="HomePage"><img className="logo" src={logo}></img></a>

                <div className="list">
                    <ul>
                        <li><Link id="p1" to="/" style={{ color: "black" }}>Back To Home</Link></li>
                        <li><a id="p1" href='#Projects' style={{ color: "black" }}>Projects</a></li>
                        <li><a id="p1" href='#Talks' style={{ color: "black" }}>Talks</a></li>
                        <li><a id="p1" href='#Service' style={{ color: "black" }}>Service</a></li>
                        <li><a id="p1" href='#Conference' style={{ color: "black" }}>Conference</a></li>
                        <li><a id="p1" href='#Awards' style={{ color: "black" }}>Awards</a></li>
                    </ul>
                </div>
            </div>
            <div className="Professor" id="Professor">
                <div className="content">
                    <div className="Pic">
                        <span>Professor</span>
                        <img src={Professor_img} width={'60%'} height={'auto'} ></img>
                    </div>
                    <div className="Info">
                        <div className="Name">
                            <span>Associate Professor</span>
                            <span>Chen, Shih-Yu 陳士煜</span>
                        </div>
                        <span>Department of Computer Science and Information Engineering</span>
                        <span>National Yunlin University of Science and Technology</span>
                        <div className="Mail">
                            <img src={Mail_img} alt="Mail_img"></img>
                            <span >sychen@yuntech.edu.tw</span>
                        </div>
                        <div className="Phone">
                            <img src={Call_img} alt="Call_img"></img>
                            <span className="Number">(work) +886-5-5342601 ext 4514
                            <br></br>(lab) +886-5-5342601 ext 4598
                        </span>
                            <a className="Btn-more" href={'https://scholar.google.com/citations?user=0LxRRawAAAAJ&hl=zh-TW'} target="_blank" rel="noopener noreferrer" >Google Scholar</a>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <BackTop>
                    <i class="fas fa-chevron-up"> </i>
                    <div className="top_button">TOP</div>
                </BackTop>
            </div>

        </>
    )
}

export default Professor;