import React from 'react';
import "./Banner.css";
import Slider1 from "../Images/slide_1.jpg"
import Slider2 from "../Images/slide_2.jpg"
import Slider3 from "../Images/slide_3.jpg";
class Banner extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        imgs: [
                                Slider1, Slider2, Slider3
                        ],
                        currIndex: 0,
                        timer: null,
                        show: false,
                        titleBig: "food-banner__title1",
                        titleSub:"food-banner__title2",
                }
        }
        
        start = () => {
                let {currIndex} = this.state;
                this.setState({
                        show:true,
                        timer:setInterval(() => {
                                currIndex++;
                                if (currIndex === 3) {
                                        currIndex = 0;
                                }
                                this.setState({currIndex});
                        }, 3000)
                })
                this.setState({currIndex});
        }
        
        stop  = ()=> {
               this.setState({
                       show:false
               })
                clearInterval(this.state.timer);
        }

        scrollDown = () => {
                var yH = window.scrollY;
                if (yH > 180) {
                      this.setState({titleBig: "food-banner__title1 to-animate"});
                      this.setState({titleSub:"food-banner__title2 to-animate"});
                } else {
                        this.setState({titleBig: "food-banner__title1"});
                        this.setState({titleSub:"food-banner__title2"});
                }
        }

        componentDidMount() {
                this.start();
                document.getElementById("root").addEventListener("click", () => {
                        console.log("clicked");
                })
        }
        render(){
                console.log(window.screenY);
                const {imgs, currIndex, titleBig, titleSub} = this.state;
                return <div className="food-banner">
                <ul className="food-banner__images">
                        {imgs.map((item, index) => 
                                <li key={index}
                                className = {currIndex === index ? "active" : "hide"}
                                data-stellar-background-ratio="0.5">
                                        <img src={item} alt="lun bo"/>
                                </li>
                        )}
                </ul>
                <div className="food-banner__titles">
                        <h1 className={titleBig}>foodee</h1>
                        <h5 className={titleSub}>Lovely designed by freehtml5.co</h5>
                </div>
        </div>;
        }
}

export default Banner;