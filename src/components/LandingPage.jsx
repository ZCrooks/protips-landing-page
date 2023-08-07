// LANDING PAGE
import logo from '../assets/logo.png';
import videoScreen from '../assets/videoScreenshot.png';
import learnPhoto from '../assets/learnPhoto.png';
import testimonial from '../assets/testimonial.png';
import beachView from '../assets/beachView.png';
import coastalView from '../assets/coastalView.png';
import townView from '../assets/townView.png';
import bird from '../assets/bird.png';
import biohazard from '../assets/biohazard.png';
import handshake from '../assets/handshake.png';
import hamsa from '../assets/hamsa.png';
import atlas from '../assets/atlas.png';
import astronaut from '../assets/user-astronaut.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Newsletter from '../components/Newsletter';
import AuthDetails from "./AuthDetails";

const LandingPage = () => {



    return (
        <div className="wrapper">
            <main>
                <AuthDetails />
                <section className='intro'>
                    <div>
                        <h1>A Guide To <strong>Rocky</strong> Mountain Vacations</h1>
                        <p className='intro-p'>Maui helicopter tours are a great way to see the island from a different perspective and have a fun adventure. If you have never been on a helicopter before, this is a great place to do it. </p>
                        <Link to ="#" className="btn">Get started</Link>
                    </div>
                    <img src={videoScreen} alt="Company's intro video screenshot" />
                </section>

                <section className='features'>
                    <ul>
                        <li>
                            <div className='icon-box'>
                                <img src={atlas} alt="globe icon" />
                            </div>
                            <h4>First click tests</h4>
                            <p>While most people enjoy casino gambling.</p>
                        </li>
                        <li>
                            <div className='icon-box' id="biohazard" >
                                <img src={biohazard}alt="biohazard icon"/>
                            </div>
                            <h4>Design surveys</h4>
                            <p>Sports betting, lottery and bingo playing for fun.</p>
                        </li>
                        <li>
                            <div className='icon-box'>
                                <img src={handshake} alt="handshake icon" />
                            </div>
                            <h4>Preference tests</h4>
                            <p>The Myspace page defines the individual.</p>
                        </li>
                        <li>
                            <div className='icon-box'>
                                <img src={astronaut} alt="astronaut icon" />
                            </div>
                            <h4>User astronaut</h4>
                            <p>Personal choices and the overall personality of the person.</p>
                        </li>
                    </ul>
                </section>

                <section className='learn'>
                    <img src={learnPhoto} alt="Company clipart" />
                    <div className='protips'>
                        <div className='sub-header'>
                            <p>About</p>
                            <img src={logo} alt="" />
                        </div>
                        <h2>Learn with Protips</h2>
                        <ul className='protips-list'>
                            <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#ee5f5b",}} />  Beyond the Naked Eye</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#ee5f5b",}} />  Make Grilling a Healthy Experience</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#ee5f5b",}} />  Make Sure Your Ice Is Safe And Clean</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#ee5f5b",}} />  Peace On Earth A Wonderful Wish But No Way</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#ee5f5b",}} />  Get Best Advertiser In Your Side Pocket</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} style={{color: "#ee5f5b",}} />  What's Under Your Grill</li>
                        </ul>
                        <div className="button-container">
                            <Link to="#" className='btn'>Know More</Link>
                            <div>
                                <Link className='video-play' to="#">Watch Video </Link> 
                                <FontAwesomeIcon icon={faPlay} style={{color: "#ee5f5b",}} />        
                            </div>
                        
                        </div>
                    </div>
                </section>

                <section className='testimonial'>
                    <h3>Testimonial</h3>
                    <p>Vampies The Romantic Ideology Behind Them</p>
                    <div className='profile'>
                        <img src={testimonial} alt="Man's professional headshot for testimonial section" />
                        <p className='ceo'>John Doe</p>
                        <p className='title'>CEO, PrettyDopeDesigns</p>
                        <p className="quote">"When To Use High Heat On Your Barbeque, What's Under Your Grill"</p>
                        <ul className="carousel-indicators">
                            <li></li>
                            <li className="active"></li>
                            <li></li>
                    </ul>
                    </div>

                </section>

                <section className="story">
                    <h3>Our Story</h3>
                    <p className="subheader">Vampies The romantic Ideology Behind them</p>
                    <div className="story-answers">
                        <div className="story-answer">
                            <div className="story-question">
                                <img src={bird} alt="bird icon" />
                                <h4>Who are we?</h4>  
                            </div>
                            <p>There is something about parenthood that gives us a sense of history and a deeply rooted desire to send on into the next generation the great things we have discovered about life.</p>
                            <p><span>And part of that is the desire to instill</span> in our children the love of science, of learning and particularly the love of nature.</p>
                        </div>
                        <div className="story-answer-2">
                            <div className="story-question">
                                <img src={hamsa} alt="hamsa icon" />
                                <h4>What's up with the name?</h4>     
                            </div>
                        
                            <p>There are advances being made in science and technology everyday, and a good example of this is the LCD monitor. LCD monitors have several benefits over the old chunky <strong>computer</strong> monitors that most users are familiar with. Old computer monitors, take up quite a bit of desktop space, put out a ton of heat, drain a ton of energy, and most often have low picture quality and resolution.</p>
                        </div>
                    </div>  
                </section>

                <section className="blog">
                    <h3>Our Recent Post</h3>
                    <p className='subheader'>Vampies The Romantic Ideology Behind Them</p>
                    <div className='posts'>
                        <div className='blog-post'>
                            <img src={beachView} alt="Mid-day ocean-front view of a sparse beach" />
                            <h5>Upgrading To Microsoft Windows Vista Tips</h5>
                            <p className='blog-p'>By <strong>Abdul Hasan Milon</strong> | 02 Feb 2019</p>
                        </div>
                        <div className='blog-post'>
                            <img src={coastalView} alt="View of beautiful, tropical beach inlet from the sky" />
                            <h5>Finally A Top Secret Way You Can Get</h5>
                            <p className='blog-p'>By <strong>Milon Mahamud</strong> | 06 Feb 2019</p>
                        </div>
                        <div className='blog-post'>
                            <img src={townView} alt="Bird's eye view of a small Mediterranean Beach island town" />
                            <h5>The Universe Through A Child's Eyes</h5>
                            <p className='blog-p'>By <strong>Speed Smith</strong> | 08 Feb 2019</p>
                        </div>
                    </div>
                        <ul className="carousel-indicators">
                            <li></li>
                            <li className="active"></li>
                            <li></li>
                        </ul>
                </section>

                <section>
                    {/* Newsletter Subscription Component */}
                    <Newsletter />
                </section>

                <section className='bottom-nav'>
                    <div className='bottom-logo'>
                        <img src={logo} alt="Protips Logo" />
                        <p>Maui helicopter tours are a great way to see the island from a different perspective and have a fun adventure.</p>
                    </div>
                    <div className="columns"> 
                        <div className="bottom-nav-list">
                            <h4>Quick Links</h4>
                            <Link to="#">About Us</Link>
                            <Link to="#">Blog</Link>
                            <Link to="#">Contact</Link>
                            <Link to="#">FAQ</Link>
                        </div>
                        <div className="bottom-nav-list">
                            <h4>Pages</h4>
                            <Link to ="">Disclaimer</Link>
                            <Link to ="">Financing</Link>
                            <Link to ="">Privacy Policy</Link>
                            <Link to ="">Terms of Service</Link>
                        </div>
                        <div className="bottom-nav-list">
                            <h4>Legal Stuff</h4>
                            <Link to ="">Disclaimer</Link>
                            <Link to ="">Financing</Link>
                            <Link to ="">Privacy Policy</Link>
                            <Link to ="">Terms of Service</Link>
                        </div> 
                    </div>        
                </section>
            </main>

            <footer>
                <p>Design by <span className="designer">@ehsan</span></p>
                <p>Developed by Zachary Crooks©</p>
            </footer>
        </div>
    )
}

export default LandingPage;