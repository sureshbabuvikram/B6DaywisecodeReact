import React from 'react';
import './LandingPage.css';
// import heroLady from '../assets/Images/hero-lady-image.png'

const LandingPage = () => {
    return (
        <div>
              <header>
        <div className="wrapper">
            {/* <!-- nav links --> */}
            <nav>
                <div className="logo">GUVI.</div>
                <ul>
                    <li> <a href="#">About</a> </li>
                    <li> <a href="#">Service</a> </li>
                    <li> <a href="#">Our Work</a> </li>
                    <li> <a href="#" className="btn dark">Enroll Now</a> </li>
                </ul>
            </nav>
            {/* <!-- hero section --> */}
            <div className="hero-section">
                <div className="left">
                    <h1>Learn the art of <br></br> Web Dev</h1>
                    <p>This is a comprehensive course on Game Development. You will learn everything from generating an
                        idea to publishing your games to different platforms.</p>
                    <a href="#" className="btn light enroll-icon">Enroll Now</a>
                </div>

                <div className="right">
                    <img src="Images/hero-lady-image.png" alt="hero image"/>
                </div>

                <div className="acheivement-cards">
                    {/* <!--stu-enroll  --> */}
                    <div className="acheivement-card student-enroll">
                        <div className="content">
                            <div>
                                <h3>32k</h3>
                            </div>
                            <p>Students Enrolled</p>
                        </div>
                        <div className="bg"></div>
                    </div>
                    {/* <!-- overall rating --> */}
                    <div className="acheivement-card overall-rating">
                        <div className="content">
                            <div>
                                <h3>4.7</h3>
                                <img src="Images/Vector-star.svg" alt="star icon"/>
                            </div>
                            <p>Overall Rating</p>
                        </div>
                        <div className="bg"></div>
                    </div>
                </div>
            </div>

        </div>
    </header>

    {/* <!-- testimonial section--> */}
    <div className="wrapper">
        <section className="testimonial-section">
            {/* <!-- left --> */}
            <div className="left">
                <div className="testimonial-card">
                    <div className="content">
                        This is a great course. It helped me a lot. Thank you :
                    </div>
                    <div className="info">
                        <h4>Jane Cooper</h4>
                        <p>Developer, Sony</p>
                    </div>
                    <img src="Images/testimonial-girl-img.png" alt="testimonial"/>
                </div>

                <div className="testimonial-card">
                    <div className="content">
                        Amazing Work! Well done!
                    </div>
                    <div className="info">
                        <h4>Jacob Jones</h4>
                        <p>Designer, Facebook</p>
                    </div>
                    <img src="Images/testimonial-boy-img.png" alt="testimonial"/>
                </div>
                {/* <!-- Background border --> */}
                {/* <!-- <div className="bg-border"></div>  --> */}
            </div>

            <div className="right">
                <h2>What our students say</h2>
                <div className="features">
                    <p>All students get access to all the videos and also the source code of the projects.</p>
                    <p>You will also have access to a private Discord channel where you can discuss your doubts.</p>
                </div>
                <a href="#" className="btn light desktop-btn">Learn More</a>
            </div>

        </section>
    </div>

    {/* <!-- courses section --> */}
    <div className="course-section">
        <div className="wrapper">
            <h2>Our Courses</h2>
            {/* <!-- Course cars --> */}
            <div className="course-cards">
                {/* <!-- Card-1 --> */}
                <div className="course-card">
                    <img src="Images/Rectangle-toy1-img.png" alt="course image"/>
                    <div className="info">
                        <h3>Game Design Essentials </h3>
                        <div className="duration">8 HRS</div>
                    </div>
                </div>
                {/* <!-- card-2 --> */}
                <div className="course-card">
                    <img src="Images/Rectangle-toy2-img.png" alt="course image"/>
                    <div className="info">
                        <h3>Unity Game Engine Fundamentals</h3>
                        <div className="duration">8 HRS</div>
                    </div>
                </div>
            </div>
            <a href="#" className="btn light">All Courses</a>
        </div>
    </div>

    {/* <!-- app section --> */}
    <div className="wrapper">
        <section className="app-section">
            <h2>Get our App</h2>
            <p>You can use our App for better experience on smartphones</p>
            <div className="app-buttons">
                <div className="app-btn">
                    <img src="Images/Vector-appstore.svg" alt="apple icon"/>
                    <span>App Store</span>
                </div>
                <div className="app-btn">
                    <img src="Images/vector-playstore.svg" alt="playstore icon"/>
                    <span>Google Play</span>
                </div>
            </div>
        </section>
    </div>

    {/* <!-- footer section --> */}
    <footer>
        <div className="wrapper">
            <div className="links-container">
                <div className="links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="links">
                    <h3>Course</h3>
                    <ul>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Download</a></li>
                        <li><a href="#">All Courses</a></li>

                    </ul>
                </div>
                <div className="links">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><a href="#">contact@gmail.com</a></li>

                    </ul>
                    <div className="social">
                        <a href="#">
                            <img src="Images/Vector-facebook.svg" alt="facebook"/>
                        </a>
                        <a href="#">
                            <img src="Images/Vector-insta.svg" alt="instagram"/>
                        </a>
                    </div>
                    <form action="#">
                        <input type="text" placeholder="Email Address" />
                        <button className="submit-btn">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </footer>
        </div>
    );
};

export default LandingPage;