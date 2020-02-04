import React, { Component } from "react";
import "./MyTimeLine.css";
class MyTimeLine extends Component {
  componentDidMount() {
    document.querySelector(".tl-wrapper").scrollIntoView({
      behavior: "smooth"
    });
    const container = document.querySelector(".tl-wrapper");
    const navs = document.querySelectorAll("a");
    Array.from(navs).forEach(nav => {
      nav.addEventListener("click", function onClick() {
        document.querySelectorAll(".nav li").forEach(li => {
          li.classList.remove("active");
        });
        this.parentElement.classList.add("active");
      });
    });
    document.getElementById("header").addEventListener("scroll", function(event){
        const { target } = event;
        const top = target.scrollTop;
        console.log(top);
        if (top >= 500) {
                document.getElementById("navbar-example").style.position = "absolute";
        } else if (top >= 1000) {
                document.getElementById("navbar-example").style.translate = "100px";
        }
    })
    container.addEventListener("scroll", function onScroll(event) {
      const { target } = event;
      const top = target.scrollTop;
      const index = Math.ceil(top / 600);
      if (index - top / 600 < 0.2) {
        document.querySelectorAll(".nav li").forEach(li => {
          li.classList.remove("active");
        });
        document
          .querySelector(`a[href='#section${index + 1}']`)
          .parentElement.classList.add("active");
      }
    });
  }

  render() {
    return (
      <div className="tl-wrapper">
        <div className="wrapper">
          <nav className="nav__wrapper" id="navbar-example">
            <ul className="nav">
              <li role="presentation" className="active">
                <a href="#section1">
                  <span className="nav__counter">01</span>
                  <h3 className="nav__title">Intro</h3>
                  <p className="nav__body">
                    <strong>Timeline-style navigation</strong>. Scroll down to
                    see what happens, or click on a number in the nav.
                  </p>
                </a>
              </li>
              <li role="presentation">
                <a href="#section2">
                  <span className="nav__counter">02</span>
                  <h3 className="nav__title">Section 2 Title</h3>
                  <p className="nav__body">
                    Sed sit amet justo sed odio tempus tempus. Vestibulum sed
                    varius mi, sit amet condimentum lacus.
                  </p>
                </a>
              </li>
              <li role="presentation">
                <a href="#section3">
                  <span className="nav__counter">03</span>
                  <h3 className="nav__title">Section 3 Title</h3>
                  <p className="nav__body">
                    Sed sit amet justo sed odio tempus tempus. Vestibulum sed
                    varius mi, sit amet condimentum lacus.
                  </p>
                </a>
              </li>
              <li role="presentation">
                <a href="#section4">
                  <span className="nav__counter">04</span>
                  <h3 className="nav__title">Section 4 Title</h3>
                  <p className="nav__body">
                    Sed sit amet justo sed odio tempus tempus. Vestibulum sed
                    varius mi, sit amet condimentum lacus.
                  </p>
                </a>
              </li>
              <li role="presentation">
                <a href="#section5">
                  <span className="nav__counter">05</span>
                  <h3 className="nav__title">Section 5 Title</h3>
                  <p className="nav__body">
                    Sed sit amet justo sed odio tempus tempus. Vestibulum sed
                    varius mi, sit amet condimentum lacus.
                  </p>
                </a>
              </li>
              <li role="presentation">
                <a href="#section6">
                  <span className="nav__counter">06</span>
                  <h3 className="nav__title">Section 6 Title</h3>
                  <p className="nav__body">
                    Sed sit amet justo sed odio tempus tempus. Vestibulum sed
                    varius mi, sit amet condimentum lacus.
                  </p>
                </a>
              </li>
            </ul>
          </nav>
          <section className="section section1" id="section1">
            Scroll down or use the nav.
          </section>
          <section className="section section2" id="section2">
            Section 2
          </section>
          <section className="section section3" id="section3">
            Section 3
          </section>
          <section className="section section4" id="section4">
            Section 4
          </section>
          <section className="section section5" id="section5">
            Section 5
          </section>
          <section className="section section6" id="section6">
            Section 6
          </section>
        </div>
      </div>
    );
  }
}
export default MyTimeLine;