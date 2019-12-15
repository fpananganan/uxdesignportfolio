import React, { Component } from 'react'; 

class Footer extends Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <React.Fragment>
            <footer className="site-footer bg-white border-top box-shadow">
                <div className="pt-3 mb-3" />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 mx-auto text-center">
                            <h4 className="text-secondary text-md-center"> Let's Connect! </h4>
                            <p className="text-secondary text-md-center"> Thanks for stopping by. Hopefuly you enjoyed what you saw. If you would like to know more about my work, please drop me a line or let's chat over a cup of coffee!</p>
                            <div className="social-icons">
                                <a className="email icon" a href="/">
                                    <i className="fa fa-envelope-o mr-2 mt-3 text-secondary" aria-hidden="true" />
                                </a>
                                <a className="instagram" a href="/">
                                    <i className="fa fa-instagram ml-2 text-secondary " aria-hidden="true" />
                                </a>
                                <a className="github icon" a href="/">
                                    <i className="fa fa-github ml-3 text-secondary" aria-hidden="true" />
                                </a>
                                <a className="linkedin icon" a href="/">
                                    < i className="fa fa-linkedin ml-3 text-secondary" aria-hidden="true" />
                                </a>
                            </div>
                            <p className="copy right info text-secondary mt-4"> &copy; Designed and Developed by Rico Pananganan </p>
                        </div>
                    </div>
                </div>
            </footer>    
            </React.Fragment>
        ); 
    }
}



export default Footer; 