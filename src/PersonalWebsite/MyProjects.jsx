import React from "react";
import anime from "animejs"
import { Swiper, Navigation, Pagination } from 'swiper/js/swiper.esm';
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';
import Project1 from "./images/project_1.jpg";
import Project2 from "./images/project_2.jpg";
import Project4 from "./images/project_4.jpg";
import Project3 from "./images/project_3.jpg";
import Project5 from "./images/project_5.jpg";
import Project6 from "./images/project_6.jpg";
import "./MyProjects.css";
class MyProjects extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        projectName:["Html5 Phaser Game", "Meal Recommender(New Meal)", "JavaFx Game(Let's Amazing)",
                                                        "Shield Tasker Application", "Blossom Season Blog Site", "Xiao's Mall(Shopping mall)" ],
                        projectPictures:[Project1, Project2, Project3, Project4, Project5, Project6],
                        backgroundColors:["#9B308C","#080822","#6B554C","#519960", "#003D6C", "#f4c20a" ],
                        currBackgroundColor: "#9B308C",
                        currProjectIndex: 0,
                }
        }
        render(){
            const {projectName, projectPictures, currBackgroundColor,backgroundColors, currProjectIndex} = this.state;
                return (
                        <>
                        <h1 className="projects-title">My Projects</h1>
                        <section className="myprojects"  style={{backgroundColor: `${currBackgroundColor}`}}
                        onMouseLeave = {(e) => {
                            anime.remove(".myprojects-images");
                            anime.timeline({targets: ".myprojects-images"}).add({
                                translateX:[0],
                                translateY:[0],
                                scale: 1,
                                duration: 500,
                                elasticity: 300
                            })
                        }}
                        onMouseOver ={(e) => {
                            const mousePos = {
                                x: e.pageX ? e.pageX : document.body.scrollLeft - document.body.clientLeft, 
                                y: e.pageY? e.pageY : document.body.scrollLeft - document.body.clientTop,
                            }
                            console.log(mousePos);
                            anime.remove(".myprojects-images");
                            if (mousePos.x > 1250 && mousePos.y < 350) {
                                anime.timeline({ targets: ".myprojects-images"})
                                    .add({
                                        translateX: [0, 60],
                                        translateY: [0, -60],
                                        scale: 0.85,
                                        duration: 2000,
                                        elasticity: 300
                                    })
                            } else if (mousePos.x > 1250 && mousePos.y > 750) {
                                anime.timeline({ targets: ".myprojects-images" })
                                    .add({
                                        translateX: [0, 60],
                                        translateY: [0, 60],
                                        scale: 0.85,
                                        duration: 2000,
                                        elasticity: 300
                                    })
                            } else if (mousePos.x < 650 && mousePos.y < 350) {
                                anime.timeline({ targets: ".myprojects-images" })
                                    .add({
                                        translateX: [0, -100],
                                        translateY: [0, -60],
                                        scale: 0.85,
                                        duration: 2000,
                                        elasticity: 300
                                    })
                            } else if (mousePos.x < 650 && mousePos.y > 750) {
                                anime.timeline({ targets: ".myprojects-images" })
                                    .add({
                                        translateX: [0, -100],
                                        translateY: [0, 60],
                                        scale: 0.85,
                                        duration: 2000,
                                        elasticity: 300
                                    })
                            } else {
                                anime.timeline({ targets: ".myprojects-images" })
                                    .add({
                                        translateX: [0],
                                        translateY: [0],
                                        scale: 1,
                                        duration: 2000,
                                    })
                            }
                        }}
                        >
                                <div className="myprojects-nav">
                                    { projectName.map((item, index) => 
                                            <p key={index} className="myprojects-tags" onMouseOver={(e) => {
                                                    this.setState({
                                                        currBackgroundColor:backgroundColors[index],
                                                        currProjectIndex: index
                                                    });
                                                e.currentTarget.style.opacity = "1";
                                            }} onMouseOut={(e) => {e.currentTarget.style.opacity = "0.5"}}>{item}</p>
                                    )}
                                </div>
                                <div className="myprojects-banner" >
                                    <img className="myprojects-images" src={projectPictures[currProjectIndex]} alt="Alternate Text" />
                                </div>
                        </section>
                    </>
                );
        }
}

export default MyProjects;