import React from 'react';
import "./MyIntro.css";
class MyIntro extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        storyTime: ["2017", "2018", "2019", "2020"],
                        storyTitle: ["Start New Life", "Who Am I", "In me Tiger", "Strive for Future"],
                        storyBrief: [ "清晨起来，对新的一天会有期待，在时代和命运面前，挣扎出一条平凡之路",
                                "微光过后，在黑暗中不断挣扎，凌晨四点，期待一轮红日，鸟语花香",
                                "经历绝望，虽千万人吾亦往也。丢掉对这个世界的童话幻想，每天都是战斗",
                                "冲破枷锁， 打破冥顽需悟空。去你妈的所谓功名利禄，我名由我不由天"],
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