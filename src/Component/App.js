import React from 'react';
import { Image, Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import Tvelia from '../Images/Tvelia.png';
import youngWoman from '../Images/youngWoman.png';
import Rectangle from '../Images/Rectangle.png';
import Rectangle97 from '../Images/Rectangle97.png';
import Rectangle98 from '../Images/Rectangle98.png';
import manhike from '../Images/manhike.png';
import rockmountains from '../Images/rockmountains.png';
import hikerstop from '../Images/hikerstop.png';
import rockmountainss from '../Images/rockmountainss.png';
import Mumbai from '../Images/Mumbai.png';
import Goa from '../Images/Goa.png';
import Ooty from '../Images/Ooty.png';
import perfectImg from '../Images/perfectImg.jpg';
import Vector3 from '../Images/Vector3.png';
import Vector2 from '../Images/Vector2.png';
import Vector1 from '../Images/Vector1.png';
import Vector from '../Images/Vector.png';
import manriding from '../Images/manriding.png';
import Bangalore from '../Images/Bangalore.png';
import Kabini from '../Images/Kabini.png';
import Coorg from '../Images/Coorg.png';
import LaraNosworthy from '../Images/LaraNosworthy.png';
import AlanaBaldessin from '../Images/AlanaBaldessin.png';
import EmmaFritzsche from '../Images/EmmaFritzsche.png';
import JoelLynas from '../Images/JoelLynas.png';
import fb from '../Images/fb.svg';
import Google from '../Images/Google.svg';
import Instagram from '../Images/Instagram.svg';
import Twitter from '../Images/Twitter.svg';
import Group from '../Images/Group.svg';
import Group38 from '../Images/Group38.svg';
import callVector from '../Images/callVector.svg';

import './App.css';
const App = () => {
    return (
        <>
            <Navbar expand="lg" className='py-0'>
                <Container className='my-0'>
                    <Navbar.Brand href="#home"><Image src={Tvelia} thumbnail /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbar-nav">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Adventures</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            <Nav.Link href="#link">Signup</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className='bannerImg'>
                <div className='banner'>
                    <div className='banner-img'> <Image src={youngWoman} thumbnail /> </div>
                    <div className='banner-title'> Its Time For New Adventures,Escapes thrills & experiences</div>
                </div>
            </Container>

            <Container>
                <Row className='number'>
                    <Col>
                        <Image src={Vector3} className='imgStyle' />
                        <span>24000</span>
                        <li>Travel Experiences</li>
                    </Col>

                    <Col>
                        <Image src={Vector2} className='imgStyle' />
                        <span>55+</span>
                        <li>Countries</li>
                    </Col>

                    <Col>
                        <Image src={Vector1} className='imgStyle' />
                        <span>Best Price</span>
                        <li>Guaranteed</li>
                    </Col>

                    <Col>
                        <Image src={Vector} className='imgStyle' />
                        <span>84 Million+</span>
                        <li>User per year</li>
                    </Col>
                </Row>
            </Container>

            <Container classNmae="Rating" aria-label="Rating of this item is 3 out of 5">
                <Row className='Perfect-Place'>
                    <Col xs={6} md={6}>
                        <h1>Find The Perfect Place</h1>
                        <p>A list of the top 75 tourist places to see in the world for a perfect holiday or trip</p>
                        <Button variant="success">Find More</Button>{' '}
                    </Col>

                    <Col xs={6} md={2} className='adv-place'>
                        <img src={perfectImg} alt="fireSpot" />
                        <li>Bangalore</li>
                        <div className='fiveStar'>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </Col>

                    <Col xs={6} md={2} className='adv-place'>
                        <img src={perfectImg} alt="fireSpot" />
                        <li>Coorg</li>
                        <div className='fiveStar'>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </Col>

                    <Col xs={6} md={2} className='adv-place'>
                        <img src={perfectImg} className="Rating--Star" alt="fireSpot" />
                        <li>Island</li>
                        <div className='fiveStar'>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <div className='text-center TopTravelTitle'> Top rated Experiences on Travel </div>
                <Row>
                    <Col className="TopTravelImg">
                        <Image className="w-100" src={Rectangle} />
                        <div className="TopTravelDiscription"> Beautiful luxury outdoor swimming pool hotel resort </div>
                        <div className='TopTravelCity'>Bangalore</div>
                        <span class="fa fa-star Travelchecked"></span>
                        <span class="fa fa-star Travelchecked"></span>
                        <span class="fa fa-star Travelchecked"></span>
                        <span class="fa fa-star Travelchecked"></span>
                        <span class="fa fa-star"></span>
                    </Col>
                    <Col className="TopTravelImg">
                        <Image className="w-100" src={Rectangle} />
                        <div className="TopTravelDiscription"> Patio balcony with chair around sea ocean view </div>
                        <div className='TopTravelCity'>Island</div>
                        <span class="fa fa-star Travelchecked"></span>
                        <span class="fa fa-star Travelchecked"></span>
                        <span class="fa fa-star Travelchecked"></span>
                        <span class="fa fa-star Travelchecked"></span>
                        <span class="fa fa-star"></span>
                    </Col>
                    <Col className="TopTravelImg">
                        <Image className="w-100" src={Rectangle} />
                        <div className="TopTravelDiscription"> Beautiful hikers top mountain view  </div>
                        <div className='TopTravelCity'>South East Asia</div>
                        <span class="fa fa-star Travelchecked"></span>
                        <span class="fa fa-star Travelchecked"></span>
                        <span class="fa fa-star Travelchecked"></span>
                        <span class="fa fa-star "></span>
                        <span class="fa fa-star"></span>
                    </Col>
                    <Col className="TopTravelImg">
                        <Image className="w-100" src={Rectangle} />
                        <div className="TopTravelDiscription"> athletic man floats red boat river </div>
                        <div className='TopTravelCity'>Himalayan</div>
                        <span class="fa fa-star Travelchecked"></span>
                        <span class="fa fa-star Travelchecked"></span>
                        <span class="fa fa-star Travelchecked"></span>
                        <span class="fa fa-star "></span>
                        <span class="fa fa-star"></span>
                    </Col>
                </Row>
            </Container>

            {/* Near destination html */}

            <Container className='neardestination'>
                <div className='destTitle'> Destinations near you </div>
                <Row className='destRow'>
                    <Col className='destCol'>
                        <Image className="destImg" src={manriding} />
                        <div className='destDiscription'>Island</div>
                        <div className='destStar'>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </Col>
                    <Col className='destCol'>
                        <Image className="destImg" src={Bangalore} />
                        <div className='destDiscription'>Bangalore</div>
                        <div className='destStar'>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </Col>
                    <Col className='destCol'>
                        <Image className="destImg" src={Kabini} />
                        <div className='destDiscription'>Kabini</div>
                        <div className='destStar'>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </Col>
                    <Col className='destCol'>
                        <Image className="destImg" src={Coorg} />
                        <div className='destDiscription'>Coorg</div>
                        <div className='destStar'>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </Col>
                </Row>

                <Row className='destRow'>
                    <Col className='destCol'>
                        <Image className="destImg" src={rockmountainss} />
                        <div className='destDiscription'>Lonavala</div>
                        <div className='destStar'>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </Col>
                    <Col className='destCol'>
                        <Image className="destImg" src={Mumbai} />
                        <div className='destDiscription'>Mumbai</div>
                        <div className='destStar'>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </Col>
                    <Col className='destCol'>
                        <Image className="destImg" src={Goa} />
                        <div className='destDiscription'>Goa</div>
                        <div className='destStar'>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </Col>
                    <Col className='destCol'>
                        <Image className="destImg" src={Ooty} />
                        <div className='destDiscription'>Ooty</div>
                        <div className='destStar'>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star destinationChecked"></span>
                            <span class="fa fa-star "></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <div className='text-center sectionTitle'> Best Places on Earth </div>
                <Row className='bestPlace'>
                    <Col xs={6} md={6}>
                        <Image className="w-100" src={Rectangle} />
                    </Col>
                    <Col xs={6} md={6}>
                        <Row >
                            <Col sm={4} md={4}>
                                <Image className="w-100" src={Rectangle97} />
                                <Image className="w-100" src={Rectangle98} />
                            </Col>
                            <Col sm={4} md={4}>
                                <Image className="w-100" src={Rectangle97} />
                                <Image className="w-100" src={Rectangle98} />
                            </Col>
                            <Col sm={4} md={4}>
                                <Image className="w-100" src={Rectangle97} />
                                <Image className="w-100" src={Rectangle98} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container >
                <Row className='marginbottom'>
                    <Col sm={7} md={7}>
                        <Row className='latestTravel'>
                            <Col sm={4} md={4} className='pe-0'>
                                <Image className="w-100" src={manhike} />
                            </Col>
                            <Col sm={4} md={4} className='px-0'>
                                <Image className="w-100 imgScale" src={rockmountains} />
                            </Col>
                            <Col sm={4} md={4} className='ps-0'>
                                <Image className="w-100" src={hikerstop} />
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={5} md={5}>
                        <h1>Latest Travel Trends</h1>
                        <div className='travelContent'>there are real opportunities for companies that keep pace with the latest travel trends and embrace new ways of doing business.</div>
                        <Button variant="success">Find More</Button>{' '}
                    </Col>
                </Row>
            </Container>

            <Container className='neardestination'>
                <div className='destTitle'> Our Partners </div>
                <Row className='destRow'>
                    <Col className='destCol'>
                        <Image className="destImg" src={LaraNosworthy} />
                        <div className='ourPartner'>Lara Nosworthy</div>
                    </Col>
                    <Col className='destCol'>
                        <Image className="destImg" src={AlanaBaldessin} />
                        <div className='ourPartner'>Alana Baldessin</div>
                    </Col>
                    <Col className='destCol'>
                        <Image className="destImg" src={EmmaFritzsche} />
                        <div className='ourPartner'>Emma Fritzsche</div>
                    </Col>
                    <Col className='destCol'>
                        <Image className="destImg" src={JoelLynas} />
                        <div className='ourPartner'>Joel Lynas</div>
                    </Col>
                </Row>
            </Container>

            <footer>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image className="" src={Tvelia} />
                            <p>An adventure is an exciting experience that is typically bold, sometimes risky or undertaking. Adventures may be activities with some potential for physical danger such as traveling, exploring, skydiving, mountain climbing, scuba diving, river rafting or participating in extreme sports.</p>
                            <div className='socialIconList'>
                                <a href="https://www.facebook.com/"><Image className="socialIcon" src={fb} /></a>
                                <a href="https://www.facebook.com/"><Image className="socialIcon" src={Google} /></a>
                                <a href="https://www.facebook.com/"><Image className="socialIcon" src={Twitter} /></a>
                                <a href="https://www.facebook.com/"><Image className="socialIcon" src={Instagram} /></a>
                            </div>
                        </Col>
                        <Col xs={6} md={8}>
                            <Row className='usefullLink'>
                                <Col xs={6} md={4}>
                                    <div className='newAdd'>Useful Links</div>
                                    <ul className='footerlist'>
                                        <li> <a href="#"></a>Home</li>
                                        <li> <a href="#"></a>About</li>
                                        <li> <a href="#"></a>Contact</li>
                                        <li> <a href="#"></a>Blog</li>
                                        <li> <a href="#"></a>Adventure</li>
                                    </ul>
                                </Col>
                                <Col xs={6} md={4}>
                                    <div className='newAdd'>Support Links</div>
                                    <ul className='footerlist'>
                                        <li> <a href="#"></a>FAQ</li>
                                        <li> <a href="#"></a>Help</li>
                                        <li> <a href="#"></a>Terms & Conditions</li>
                                    </ul>
                                </Col>
                                <Col xs={6} md={4}>
                                    <div className='newAdd'>Newsletter Subscription</div>
                                    <div className='add'> <Image className="icon" src={Group} /><span>569 bangalore Auroville Beach, 560001</span> </div>
                                    <div className='add'> <Image className="icon" src={Group38} /><span>Redliodesigns@gmail.com</span></div>
                                    <div className='add'> <Image className="icon" src={callVector} /><span>5659875689</span></div>
                                </Col>
                            </Row>
                        </Col>
                        <Row>
                        </Row>
                    </Row>

                </Container>
            </footer>


        </>
    );
};

export default App;