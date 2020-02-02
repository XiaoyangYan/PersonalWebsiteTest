import React from 'react';
import SideBar from "./SideBar";
import Banner from "./Banner";
import MyIntro from "./MyIntro";
import "./SideBar.css";
import anime from "animejs";

class Header extends React.Component {
        constructor(props) {
                super(props);
                this.state = {

                }
        }
        componentDidMount() {
                window.addEventListener('scroll', this.scrollDown);
                document.addEventListener('DOMContentLoaded', ()=> {
                        anime.timeline({
                                easing: 'easeOutExpo',
                        })
                        .add({
                                targets:'.sidebar-button__line',
                                translateX: [-500, 0],
                                opacity:[0, 1],
                                duration: 800,
                        })
                        .add({
                                targets: '.banner-words',
                                width: ['0px', '100%'],
                        })
                        .add({
                                targets: ".banner-title div",
                                translateX:[-300, 0],
                                opacity:[0, 1],
                                easing: 'easeInExpo',
                                duration: 500,
                                offset:'-=100'
                        })
                        .add({
                                targets:".banner-sliders",
                                translateY:[800, 0],
                                opacity:[0, 1],
                                duration: 1000,
                                offset: '+=1000',
                        })
                        .add({
                                targets: ".banner-descriptions li",
                                translateX:[-300, 0],
                                opacity: [0, 1],
                                easing: 'easeInExpo',
                                duration: 500,
                                offset:'+=100'
                        })
                        .add({
                                targets: ".banner-dots li",
                                opacity:[0, 1],
                                easing:"easeOutExpo",
                                duration: 600,
                                offset: '+=100'
                        });
                });
        }

        scrollDown = () => {
                var yH = window.scrollY;
                console.log(yH);
                if (yH > 180) {
                      this.setState({titleBig: "food-banner__title1 to-animate"});
                      this.setState({titleSub:"food-banner__title2 to-animate"});
                } else {
                        this.setState({titleBig: "food-banner__title1"});
                        this.setState({titleSub:"food-banner__title2"});
                }
        }
        render() {
                return (
                        <header className="header" id="header">
                                <SideBar/>
                                <div className="main-page">
                                        <Banner/>
                                        <MyIntro/>
                                </div>
                        </header>);
        }
}

export default Header;