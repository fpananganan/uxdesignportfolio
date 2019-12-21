import React, { Component } from 'react'; 
import styles from './Styles.module.css'; 
import { keyframes } from './Styles.module.css'; 

class Home extends Component {
    constructor(props) {
        super(props);  
    }

    render() {
        return (
            <React.Fragment>
                <div className="jumbotron text-md-center bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="intro-header px-3 pt-md-5 pb-md-4 mx-auto text-md-center">
                                    <h3> <span className="text-primary"> Hello. </span> <span className="text-secondary"> I'm Rico, a Product Designer from Las Vegas. </span> </h3>
                                </div>
                                <div className="pt-3 mb-2" />
                                <h4 className="text-md-center"> <span className="text-secondary"> I enjoy creating thoughtful, engaging, and memorable <br /> experiences expressed through user-centric design... </span> <span className={styles.blinkingCursor}> | </span> </h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section B: Project Travel RN */}
                <div className="jumbotron bg-white border-top box-shadow">
                    <div className="pt-3 mb-3" />
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-sm-5">
                                <h4 className="text-secondary text-left"> Travel Resource Network </h4>
                                <h5 className="text-secondary text-left"> Where will you go next? </h5>
                                <div className="p-0 mb-4" />
                                <div className="col-sm-5" />
                                <p className="text-secondary text-left"> A mobile application developed and designed for nurses on the go. Travel RN is a dedicated search engine for job listings specifically for the travel nurse industry. Recieve updated notifications regarding the assignments you want and apply instantly through the push of a button via your mobile device. </p>
                                <div className="p-0 mb-4" />
                                <p className="text-secondary text-left"> UX | UI Design | Brand Strategy | Market Research </p>
                                <div className="pt-2 mb-2" />
                                <div className="text-left pb-5">
                                    <button type="button" className="btn btn-primary btn-lg"> View Project </button>
                                </div>    
                            </div>
                            <div className="col-sm-6">
                                <div className="trn image mr-md-3">
                                    <img src="/assets/images/trn-image.svg" class="rounded float-right img-fluid" alt="picture of Travel RN Mobile App" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section C: Project ARCHETYPE */}
                <div className="jumbotron bg-white border-top box-shadow">
                    <div className="archetype-content">
                        <div className="pt-3 mb-3" />
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-sm-6">
                                    <div className="archetype-content mr-md-2">
                                        <img src="/assets/images/archetype-image.svg" class="rounded float-left img-fluid" alt="picture of laptop" />
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div className="archetype-content ml-md-2 pt-2 mb-2">
                                        <h4 className="text-secondary text-left"> ARCHETYPE </h4>
                                        <h5 className="text-secondary text-left"> Your content. Your personality </h5>
                                        <div className="p-0 mb-4" />
                                        <p className="text-secondary text-left"> Developed as a Saas product - storage compartment in the cloud. ARCHETYPE serves as a collaborative outlet for content and design architects to store ideas, work on projects, and share content. </p>
                                        <div className="p-0 mb-3" />
                                        <p className="text-secondary text-left"> UX | UI Design | Brand Strategy | Market Research </p>
                                        <div className="pt-2 mb-2" />
                                        <div className="text-left">
                                            <button className="btn btn-primary btn-lg mt-2"> View Project </button>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        ); 
    }
}
export default Home; 