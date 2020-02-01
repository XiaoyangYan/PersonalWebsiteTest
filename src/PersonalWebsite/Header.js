import React from 'react';
import SideBar from "./SideBar";
import Banner from "./Banner";
import "./SideBar.css";
import anime from "animejs";

class Header extends React.Component {

        constructor(props) {
                super(props);
                this.state = {

                }
        }

        componentDidMount() {
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

        render() {
                return (
                        <header className="header">
                                <SideBar/>
                                <Banner/>
                        </header>);
        }
}

export default Header;