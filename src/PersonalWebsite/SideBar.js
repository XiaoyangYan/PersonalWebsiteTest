import React from 'react';
import anime from "animejs";
import "../../node_modules/font-awesome/css/font-awesome.css";
import {FaToriiGate, FaBook, FaChild, FaGlobe, FaProjectDiagram} from "react-icons/fa"
import Swiper from "swiper";
import banner_1 from "./images/banner_1.jpg";
import banner_2 from "./images/banner_2.jpg";
import banner_3 from "./images/banner_3.jpg";
import banner_4 from "./images/banner_4.jpg";
import banner_5 from "./images/banner_5.jpg";
class SideBar extends React.Component {

        constructor(props) {
                super(props);
                this.state = {
                        show: false,
                        imgs: [
                                banner_1, banner_2, banner_3, banner_4, banner_5
                        ],
                        display:[false, false, false, false, false],
                        imgsClassName: ["banner_1", "banner_2", "banner_3", "banner_4", "banner_5"],
                        words: ["Study", "Travel", "Projects", "Experience", "MyLife"],
                        icons:[<FaBook onClick={this.iconOnClick} onMouseEnter={this.iconOnMouseEnter}/>
                                ,<FaToriiGate onClick={this.iconOnClick} onMouseEnter={this.iconOnMouseEnter}/>
                                ,<FaProjectDiagram onClick={this.iconOnClick} onMouseEnter={this.iconOnMouseEnter}/>
                                ,<FaGlobe onClick={this.iconOnClick} onMouseEnter={this.iconOnMouseEnter}/>
                                ,<FaChild onClick={this.iconOnClick} onMouseEnter={this.iconOnMouseEnter}/>
                        ],
                };
        }
        sideBarOnMouseEnter = (e) => {
                anime.remove(e.target);
                anime.timeline({
                }).add({
                        targets: e.target,
                        rotate: {value: -180},
                        duration: 500,
                        easing: "easeInExpo",
                        delay:(el, i) => 30*i
                }).add({
                        targets: e.target,
                        rotate:{value: 180},
                        duration: 500,
                        easing: "easeOutExpo",
                        delay:(el, i) => 30*i
                })
        }
        sideBarOnClick = (e) =>{
                anime.remove(e.target);
                let {show} = this.state;
                show = show ? false : true;
                document.getElementById("nav-menu").style.display = show ? "flex" : "none";
                document.getElementById("main-banner").style.display = show ? "none" : "block";
                this.setState({show});
                anime.timeline({
                }).add({
                        targets: ".sidebar-button",
                        rotate: show ? {value: 90} : {value: 180},
                        duration: 500,
                        easing: "easeInExpo",
                        delay:(el, i) => 30*i
                })
                .add({
                        targets: ".side",
                        width: show ? ["0px", "100%"] :["100%", "6.785rem"],
                        offset:"-=500"
                })
                .add({
                        targets: ".nav-menu",
                        width:show? ["0px", "100%"]:["100%", "0px"],
                }).add({
                        targets: ".menu-category",
                        translateX:  [-800, 0],
                        opacity: [0, 1],
                })
                .add({
                        targets: ".menu-category .menu-stretch ul li",
                        rotate: {value: 360},
                        opacity: [0, 1],
                        delay: (el, i) => 30*i,
                })
        }
        iconOnMouseEnter = (e) => {
                anime.remove(e.target);
                anime.timeline({})
                .add({
                        targets: e.target,
                        rotate: {value: -180},
                        duration: 500,
                        easing: "easeInExpo",
                        delay:(el, i) => 30*i
                }).add({
                        targets: e.target,
                        rotate:{value: 0},
                        scale: 1,
                        duration: 500,
                        easing: "easeOutExpo",
                        delay:(el, i) => 30*i
                })
        }
        iconOnClick = (e)=> {
                anime.remove(e.target);
                anime.timeline({})
                .add({
                        targets: e.target,
                        rotate: {value: -180},
                        duration: 500,
                        easing: "easeInExpo",
                        delay:(el, i) => 30*i
                }).add({
                        targets: e.target,
                        rotate:{value: 0},
                        duration: 500,
                        easing: "easeOutExpo",
                        delay:(el, i) => 30*i
                })
        }
        subTitleOnClick = (e, index) => {
                let {imgsClassName, display} = this.state;
                anime.remove(e.target);
                display = display.map((item, index) => false);
                display[index] = true;
                this.setState({display: display});
                anime.timeline({
                        targets: e.target,
                })
                .add({
                        translateX: [0, 100],
                        easing: 'easeInExpo',
                        scale:1.2,
                        duration: 100,
                        delay:(el, i)=> 30*i,
                })
                .add({
                        targets: ".take-cover",
                        translateX:[0, 400],
                        duration: 1200,
                        easing: 'easeInExpo',
                })
                .add({
                        translateX: [100, 0],
                        scale: 1,
                        easing: 'easeOutExpo',
                        duration: 500,
                        delay:(el, i)=> 30*i,
                        offset:"+=600"
                })
                .add({
                        targets: ".swiper-container",
                        opacity:[0, 1],
                        offset:"+=300"
                })
        }
        subTitleOnLeave = (e) => {
                let {display} = this.state;
                display = display.map((item, index) => false);
                this.setState({display: display});
                anime.timeline({
                        targets: e.target,
                })
                .add({
                        targets: ".take-cover",
                        translateX:[0],
                        duration:1200,
                        easing: 'easeOutExpo',
                })
        }
        render() {
                const {imgs, icons, words, imgsClassName, display} = this.state;
                return (
                        <section className="side" id="side">
                                <aside className="side-bar">
                                        <div className="sidebar-button" 
                                                onClick = {this.sideBarOnClick}
                                                onMouseEnter={(e) => { this.sideBarOnMouseEnter(e); }}>
                                                <div className="sidebar-button__line"></div>
                                                <div className="sidebar-button__line"></div>
                                                <div className="sidebar-button__line"></div>
                                        </div>
                                </aside>
                                <nav className='nav-menu '  id="nav-menu" style={{}}>
                                        <div className="menu-category">
                                                <div className="menu-stretch">
                                                        {icons.map((item, index) => 
                                                                <a href="#study" className="menu-item"
                                                                onMouseEnter={(e) => {this.subTitleOnClick(e, index)}} onMouseLeave={(e) =>{this.subTitleOnLeave(e)}}>{item}
                                                                        <div key={index} style={display[index]?{fontWeight:600}:{fontWeight:200}}>{words[index]}</div>
                                                                </a>
                                                        )}
                                                        <ul>
                                                                <li><a href="#" className="inline"><i className="fa fa-facebook" onClick={this.iconOnClick} onMouseEnter={this.iconOnMouseEnter}></i></a></li>
                                                                <li><a href="#" className="inline"><i className="fa fa-twitter" onClick={this.iconOnClick} onMouseEnter={this.iconOnMouseEnter}></i></a></li>
                                                                <li><a href="#" className="inline"><i className="fa fa-snapchat" onClick={this.iconOnClick} onMouseEnter={this.iconOnMouseEnter}></i></a></li>
                                                                <li><a href="#" className="inline"><i className="fa fa-instagram" onClick={this.iconOnClick} onMouseEnter={this.iconOnMouseEnter}></i> </a></li>
                                                                <li><a href="#" className="inline"><i className="fa fa-youtube" onClick={this.iconOnClick} onMouseEnter={this.iconOnMouseEnter}></i></a></li>
                                                        </ul>
                                                </div>
                                                <ul className="swiper-container">
                                                        <li className="take-cover" id="take-cover"></li>
                                                        {imgs.map((item, index) => 
                                                                <li key={index} className={imgsClassName[index]}
                                                                style={display[index]?{opacity: 1} :{opacity: 0}}><img src={item} alt="alt"/></li>
                                                        )}
                                                </ul>
                                        </div>
                                </nav>
                        </section>
                );
        }
}

export default SideBar;