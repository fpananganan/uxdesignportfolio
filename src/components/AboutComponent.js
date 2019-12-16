import React, { Component } from 'react'; 

class About extends Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <React.Fragment>
                {/*-- Section A: Personal Photo --*/}
                <div className="jumbotron img-md-center bg-white">
                    <div className="container">
                        <div class="row">
                            <div class="col">
                                <img src="/assets/images/profile-image.svg" className="img-fluid img-responsive mx-auto d-block" alt="picture of a person" />
                            </div>
                        </div>
                    </div>
                </div>

                {/*-- Section B: Biography --*/}
                <div className="jumbotron text-md-center bg-white border-top box-shadow">
                    <div classname="pt-2 mb-2" />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 mx-auto">
                                <h4 className="text-left text-primary mb-4 pt-4"> // Where It All Began </h4>
                                <p className="p-0 mb-4 text-left"> You may find this a little funny, but it's the truth. My journey into design started with MySpace. It was 2005, Freshman year at college and I was sitting in front of a computer in the library staring at a blank page of a profile that I had just created earlier. My friends were all on this site and I wanted in on the action, but comparing a blank page to theirs' - full of color, littered with animations or pictures, and different style fonts was nothing short of awesome. Luckily, my roommate knew how to design a page and helped me out. This was where I dabbled with my first lines of code and entered the world of digital design. </p>
                                <p className="p-0 mb-4 text-left"> Since then, I've been drawn to designs of various backgrounds... from the beautiful architectural structures in Dubai, to the intricate wrapping of a Christmas gift that I'd be hesitant to rip into because I'd hate to ruin the beauty of it, down to the simple packaging of a brand new iPhone. </p>

                                <h4 className="text-left text-primary mb-4 pt-4"> // Call To Action </h4>
                                <p className="p-0 mb-4 mt-4 text-left"> Having worked most of my professional life in Corporate America meant spending a lot of time in business meetings, putting out fires, and lots of coffee. When working in an environment like this, it can be quite shocking to know how there are still several people who are struggling with technology - navigating a website or operating a mobile application, for example. </p>
                                <p className="p-0 mb-4 text-left"> I was often approached for assistance; whether it was designing and creating spreadsheets with formulas already prewritten into the worksheet to allow for a better experience when tracking data, creating eye catching emails with images and colors for the sales team - I was helping people and it was a very humbling experience. I wanted more of it. </p>
                                <p className="p-0 mb-4 text-left"> It was during this point in my life that I picked up the call and decided to trade in my cubicle and hang-up the suit & tie in favor of a new change that would bring me satisfaction and joy for the remainder of my professional career. </p>

                                <h4 className="text-left text-primary mb-4 pt-4"> // Chasing UX </h4>
                                <p className="p-0 mb-4 text-left"> I consider myself a business savvy individual. I know and understand the ethics of Corporate America. The goals and visions of a company as well as the values needed to be created for shareholders. I can comprehend a business's needs and speak the language. And as I continue to grow and develop my skills as a UX Designer, I'm looking to connect that skill-set with my business accumen so as to create intuitive solutions that not only addresses the customer's concerns, but would also fall inline with the company's organizational goals. </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*-- Section C: Things I Love --*/}
                <div className="jumbotron text-md-center bg-white border-top box-shadow">
                    <div className="pt-2 mb-2">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-sm-8 pb-4">
                                    <h4 className="text-center text-primary mb-4"> Things I Love </h4>
                                </div>
                                <div className="col-sm-6">
                                    <div className="my-better-half pb-4">
                                        <h5 className="text-secondary text-center"> My Better Half </h5>
                                        <img src="/assets/images/my-better-half.svg" className="rounded mx-auto img-fluid" alt="picture of a girl and boy" />
                                    </div>
                                </div>
                                <div className="col-sm-6 pb-4">
                                    <div className="code">
                                        <h5 className="text-secondary text-center"> Code </h5>
                                        <img src="/assets/images/code.svg" className="rounded mx-auto img-fluid" alt="picture of laptop" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="desserts">
                                        <h5 className="text-secondary text-center"> Desserts </h5>
                                        <img src="/assets/images/desserts.svg" className="rounded mx-auto img-fluid" alt="picture of dessert" />
                                    </div>
                                </div>
                                <div className="col-sm-6 pb-4">
                                    <div className="travel">
                                        <h5 className="text-secondary text-center"> Traveling </h5>
                                        <img src="/assets/images/travel.svg" className="rounded mx-auto img-fluid" alt="picture of plane tickets" />
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

export default About; 