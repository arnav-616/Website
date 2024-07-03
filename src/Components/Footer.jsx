export default function Footer() {
    return (
        <>
            <footer class="homeFooter abtFooter">
                <div className="wrapper">
                    <div className="links-container">
                    <div className="links">
                        <h3>Quick Links</h3>

                        <ul>
                        <li>
                            <a href="about">About Us</a>
                        </li>

                        <li>
                            <a href="mailto:support@projectucode.org" target="_blank">Contact Us</a>
                        </li>

                        <li>
                            <a href="https://drive.google.com/file/d/1mMSoepA8uy4SQNZyev5_NRNcS3eTLolC/view?usp=sharing" target="_blank">Privacy Policy</a>
                        </li>

                        <li>
                            <a href="https://drive.google.com/file/d/1__1xeszHEW3GdMBzNBrDQOD61SleHgkS/view?usp=sharing" target="_blank">Terms & Conditions</a>
                        </li>
                        </ul>
                    </div>

                    <div className="links">
                        <h3>Socials</h3>

                        <ul>
                        <li>
                            <a href="https://www.youtube.com/channel/UCIKvJ8iM6Q7Py8JSqOwAMUQ" target="_blank">Youtube</a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/company/project-ucode/" target="_blank">Linkedin</a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/projectucode/" target="_blank">Instagram</a>
                        </li>

                        <li>
                            <a href="https://discord.gg/SE8m5xsuay" target="_blank">Discord</a>
                        </li>
                        </ul>
                    </div>

                    <div className="links">
                        <h3>Contact Us</h3>

                        <ul>
                        <li>info@projectucode.org</li>
                        </ul>

                        <div className="social">
                        <a href="#">
                            
                        </a>

                        <a href="#">
                            
                        </a>
                        </div>

                        <form action="mailto:support@projectucode.org">
                        <input type="text" placeholder="Email Address" />
                        <button className="submit-btn">Submit</button>
                        </form>
                    </div>
                    </div>

                    <p className="copyright">This website is developed by Project UCode</p>
                </div>
            </footer>
        </>
    )
}
