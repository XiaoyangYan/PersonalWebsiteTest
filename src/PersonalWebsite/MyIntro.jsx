import React from 'react';
import "./MyIntro.css";
class MyIntro extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        storyTime: ["2017", "2018", "2019", "2020"],
                        storyTitle: ["Start New Life", "Who Am I", "In me Tiger", "Strive for Future"],
                        storyBrief: [ "我想要赚钱搬到市中心，你想要赚钱搬到市中心，他想要赚钱搬到市中心。",
                                "这个年代笑贫不笑娼，比较暴力比较黄。你只要房子不要窗， 无神论者开教堂",
                                "我讨厌穿制服我讨厌学校的制度，我讨厌学校老师的嘴脸讨厌被束缚。",
                                "你可曾困惑在你身旁谁是敌是友，对你落井下石的可能就是你的挚友"],
                        storyPicture:["http://pic.netbian.com/uploads/allimg/190322/225206-15532663266fdc.jpg",
                                                "https://data.1freewallpapers.com/detail/sci-fi-city-on-the-ocean.jpg",
                                                "https://images.alphacoders.com/208/thumb-1920-208681.jpg",
                                                "https://www.10wallpaper.com/wallpaper/1366x768/1201/Final_Fantasy_XIII-2_Game_HD_Wallpaper_10_1366x768.jpg"]
                }
        }
        render() {
                const { storyBrief,  storyTime, storyTitle,storyPicture} = this.state;
                return (
                        <>
                        <h1 className="timeline-banner">My TimeLine</h1>
                        <section id="timeline">
                                {storyBrief.map((item, index) => 
                                        <div className="tl-item" key={index}>
                                                <div className="tl-bg" style={{ backgroundImage: `url(${storyPicture[index]})` }}></div>
                                                <div className="tl-year">
                                                        <p className="f2 heading--sanSerif">{storyTime[index]}</p>
                                                </div>
                                                <div className="tl-content">
                                                        <h1>{storyTitle[index]}</h1>
                                                         <p>{storyBrief[index]}</p>
                                                </div>
                                        </div>
                                )}      
                        </section>
                        </>
                );
        }
}

export default MyIntro;