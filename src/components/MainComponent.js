import React, { Component } from 'react'; 
import Header from './HeaderComponent'; 
import Home from './HomeComponent'; 
import Footer from './FooterComponent'; 
import About from './AboutComponent';
import { BrowserRouter, Switch, Route, } from 'react-router-dom'; 

class Main extends Component {
    constructor(props) {
        super(props); 
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            ); 
        }

        return (
            <BrowserRouter>
                <div className="Main">
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/about' component={About} />  
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        ); 
    }
}

export default Main; 