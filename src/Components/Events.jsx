export default function Events() {
    return (
        <>
        <header id="eventsHeader">
            <div className="wrapper">
            <div id="aboutHeroSection" className="hero-section">
                <div className="middle">
                <h1 id="abt_txt">Events</h1>
                </div>
            </div>
            </div>
        </header>

        {/* <!-- End of the header section --> */}

        <div className="wrapper">
            <section id="chapter-testimonials-section" className="testimonials-section">
            <div className="left">
                <img src="Images/wghscsa.png" alt="volunteer-photo" />
            </div>

            <div className="right">

                <div className="features">
                    <h2>WGHS CSA Review</h2>
                    <p>
                        Volunteers went over AP Computer Science A review material at Walnut Grove High School.
                    </p>
                    </div>
                </div>
            </section>
            <section id="" className="testimonials-section">
            <div className="left">
                <div className="features">
                        <h2>PHS CSA Review</h2>
                        <p>
                            Volunteers assisted students staying after school for Computer Science A tutoring at Prosper High School. 
                        </p>
                </div>
            </div>

            <div className="right">
                <img className="phscsa" src="Images/phscsa.png" alt="volunteer-photo" />
            </div>
            </section>
            <section id="chapter-testimonials-section" className="testimonials-section">
            <div className="left">
                <img src="Images/onlinecsa.png" alt="volunteer-photo" />
            </div>

            <div className="right">

                <div className="features">
                    <h2>CSA Review Webinar</h2>
                    <p>
                        Project UCode hosted an global webinar preparing students for the AP Computer Science A AP Exam. Former students who recieved a 5
                        on the original test shared their tips for the exam. 
                    </p>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}
