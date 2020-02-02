import React from 'react';
import "./Banner.css";
import Slider1 from "./images/slide_1.jpg";
import Slider2 from "./images/slide_2.jpg"
import Slider3 from "./images/slide_3.jpg";
import Slider4 from "./images/slide_4.jpg";
import Swiper from "react-id-swiper"
import anime from "animejs";
class Banner extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        imgs: [
                                Slider1, Slider2, Slider3, Slider4
                        ],
                        showIndex: 0,
                        timer: null,
                        show: false,
                };
        }
        hoverTagEvent = (e) => {
                anime.remove(e.target);
                anime.timeline({
                        targets: e.target,
                })
                .add({
                        translateX: [0, -300],
                        opacity: [1, 0],
                        easing: 'easeInExpo',
                        duration: 500,
                        delay: (el, i) => 100 * i,
                })
                .add({
                        translateX: [350, 0],
                        opacity: [0, 1],
                        easing: 'easeOutExpo',
                        duration: 1100,
                        delay: (el, i) => 100 * i,
                });
        }
        componentDidMount() {
                this.start();
        }
        componentWillMount() {
                this.stop();
        }
        stop = () => {
                let { timer } = this.state;
                clearInterval(timer);
        }
        start = () => {
                this.setState({
                        timer: setInterval(() => {
                                this.next();
                        }, 1000)
                })
        }
        change = (index) => {
                let { showIndex } = this.state;
                showIndex = index;
                this.setState({ showIndex });
        }
        previous = () => {
                let { showIndex, imgs } = this.state;
                if (showIndex <= 0) {
                        showIndex = imgs.length - 1;
                } else {
                        showIndex--;
                }
                this.setState({ showIndex });
        }
        next = () => {
                let { showIndex, imgs } = this.state;
                if (showIndex === imgs.length - 1) {
                        showIndex = 0;
                } else {
                        showIndex++;
                }
                this.setState({ showIndex });
        }
        getIntroduction = (index) => {
                switch (index) {
                        case 0:
                                return <div> <h6 onMouseEnter={this.hoverTagEvent}>Travel</h6>
                                        多事之秋，耶路撒冷的天空。破碎的梦，应许之地消失中。你的眼睛里究竟有多少无奈。</div>;
                        case 1:
                                return <div><h6 onMouseEnter={this.hoverTagEvent}>Study</h6>
                                        末日之后，谁还能牵起我的手。 仇恨随风，带走伤带走我的眼泪。</div>
                        case 2:
                                return <div><h6 onMouseEnter={this.hoverTagEvent}>Experience</h6>
                                        废墟之中，文明和世界支离破碎。秋风萧瑟，为爱流的血印在这绝爱之城。</div>
                        case 3:
                                return <div><h6 onMouseEnter={this.hoverTagEvent}>New Idea</h6>
                                        如有未来，万水千山你愿意陪我一起走吗？记忆光年，陈旧往事都付笑谈。</div>
                        default:
                                return <div></div>
                }
        }
        render() {
                const { imgs, showIndex } = this.state;
                return (
                        <section className="banner-container" id="main-banner" style={{}}>
                                <div className="banner-words">
                                        <h2 className="banner-title">
                                                <div onMouseEnter={this.hoverTagEvent}>Hello I'm Xiaoyang</div> </h2>
                                        <h2 className="banner-title">
                                                <div onMouseOver={this.hoverTagEvent}>I'm a Web Designer</div></h2>
                                </div>
                                <div className="banner-sliders" onMouseOver={() => { this.stop(); }} onMouseLeave={() => { this.start(); }}>
                                        <ul className="banner-images">
                                                {imgs.map((item, index) =>
                                                        <li key={index} className={index === showIndex ? 'active' : ' hide'}>
                                                                <img src={item} alt="alt" />
                                                        </li>
                                                )}
                                        </ul>
                                        <div className="banner-introduction">
                                                <div className="banner-introduction__group">
                                                        <ul className="banner-descriptions" style={{ height: imgs.length * 20 + 'px' }}>
                                                                {imgs.map((item, index) =>
                                                                        <li key={index} className={index === showIndex ? 'active' : ' hide'}>
                                                                                {this.getIntroduction(index)}
                                                                        </li>
                                                                )}
                                                        </ul>
                                                        <ul className="banner-dots">
                                                                {imgs.map((item, index) =>
                                                                        <li key={index} className={index === showIndex ? 'active' : ' '}
                                                                                onClick={() => { this.change(index) }}></li>
                                                                )}
                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                        </section>
                );
        }
}

export default Banner;