// LANDING PAGE
import logo from '../assets/logo.png';
import videoScreen from '../assets/videoScreenshot.png';
import learnPhoto from '../assets/learnPhoto.png';
import testimonial from '../assets/testimonial.png';
import beachView from '../assets/beachView.png';
import coastalView from '../assets/coastalView.png';
import townView from '../assets/townView.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {


    return (
        <div className="wrapper">
            <header>
                <img src={logo} alt="Protips Logo" />
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
                    <button>Sign In</button>
                    <button>Sign Up</button>
                </nav>
            </header>
            <main>
                <section>
                    <div>
                        <h1>A Guide to <strong>Rocky</strong> Mountain Vacations</h1>
                        <p>Maui helicopter tours are a great way to see the island from a different perspective and have a fun adventure. If you have never been on a helicopter before, this is a great place to do it. </p>
                        <Link to ="#" className="get-started-btn">Get started</Link>
                    </div>
                    <img src={videoScreen} alt="Company's intro video screenshot" />
                </section>

                <section>
                    <ul>
                        <li>
                            <h4>First click tests</h4>
                            <p>While most people enjoy casino gambling.</p>
                        </li>
                        <li>
                            <h4>Design surveys</h4>
                            <p>Sports betting, lottery and bingo playing for fun.</p>
                        </li>
                        <li>
                            <h4>Preference tests</h4>
                            <p>The Myspace page defines the individual.</p>
                        </li>
                        <li>
                            <h4>User astronaut</h4>
                            <p>Personal choices and the overall personality of the person.</p>
                        </li>
                    </ul>
                </section>

                <section>
                    <img src={learnPhoto} alt="Company clipart" />
                    <div>
                        <div>
                            <p>About</p>
                            <img src={logo} alt="" />
                        </div>
                        <h2>Learn with Protips</h2>
                        <ul>
                            <li>Beyond the Naked Eye</li>
                            <li>Make Grilling a Healthy Experience</li>
                            <li>Make Sure Your Ice Is Safe And Clean</li>
                            <li>Peace On Earth A Wonderful Wish But No Way</li>
                            <li>Get Best Advertiser In Your Side Pocket</li>
                            <li>What's Under Your Grill</li>
                        </ul>
                        <Link to="#">Know More</Link>
                        <Link to="#">Watch Video</Link>
                    </div>
                </section>

                <section>
                    <h3>Testimonial</h3>
                    <p>Vampies The Romantic Ideology Behind Them</p>
                    <img src={testimonial} alt="Man's professional headshot for testimonial section" />
                    <p>John Doe</p>
                    <p>CEO, PrettyDopeDesigns</p>
                    <p>"When To Use High Heat On Your Barbeque, What's Under Your Grill"</p>
                </section>

                <section>
                    <h3>Our Story</h3>
                    <p>Vampies The romantic Ideology Behind them</p>
                    <div>
                        <h4>Who are we?</h4>
                        <p>There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.</p>
                        <p><span>And part of that is the desire to instill</span> in our children the love of science, of learning and particularly the love of nature.</p>
                    </div>
                    <div>
                        <h4>What's up with the name?</h4>
                        <p>There are advances being made in science and technology everyday, and a good example of this is the LCD monitor. LCD monitors have several benefits over the old chunky <strong>computer</strong> monitors that most users are familiar with. Old computer monitors, take up quite a bit of desktop space, put out a ton of heat, drain a ton of energy, and most often have low picture quality and resolution.</p>
                    </div>
                </section>

                <section>
                    <h4>Our Recent Post</h4>
                    <p>Vampies The Romantic Ideology Behind Them</p>
                    <div>
                        <img src={beachView} alt="Mid-day ocean-front view of a sparse beach" />
                        <h5>Upgrading to Microsoft Windows Vista Tips</h5>
                        <p>By <strong>Abdul Hasan Milon</strong> | 02 Feb 2019</p>
                    </div>
                    <div>
                        <img src={coastalView} alt="View of beautiful, tropical beach inlet from the sky" />
                        <h5>Finally A top Secret Way You Can Get</h5>
                        <p>By <strong>Milon Mahamud</strong> | 06 Feb 2019</p>
                    </div>
                    <div>
                        <img src={townView} alt="Bird's eye view of a small Mediterranean Beach island town" />
                        <p>By <strong>Speed Smith</strong> | 08 Feb 2019</p>
                    </div>
                </section>

                <section>
                    {/* Insert Subscription Component Here */}
                </section>

                <section>
                    <div>
                        <img src={logo} alt="Protips Logo" />
                        <p>Maui helicopter tours are a great way to see the island from a different perspective and have a fun adventure.</p>
                    </div>
                    <div className="bottom-nav">
                        <h4>Quick Links</h4>
                        <Link to="#">About Us</Link>
                        <Link to="#">Blog</Link>
                        <Link to="#">Contact</Link>
                        <Link to="#">FAQ</Link>
                    </div>
                    <div className="bottom-nav">
                        <h4>Pages</h4>
                        <Link to ="">Disclaimer</Link>
                        <Link to ="">Financing</Link>
                        <Link to ="">Privacy Policy</Link>
                        <Link to ="">Terms of Service</Link>
                    </div>
                    <div className="bottom-nav">
                        <h4>Legal Stuff</h4>
                        <Link to ="">Disclaimer</Link>
                        <Link to ="">Financing</Link>
                        <Link to ="">Privacy Policy</Link>
                        <Link to ="">Terms of Service</Link>
                    </div>
                </section>
            </main>

            <footer>
                <p>Design by @ehsan</p>
                <p>Created by Zachary Crooks©</p>
            </footer>
        </div>

    )
}

export default LandingPage;