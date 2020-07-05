import React,{Component} from 'react'
import Services from './ServicesComponent'
import Details from './DetailsComponent'
import AboutComponent from './AboutComponent';
import PortfolioComponent from './PortfolioComponent';
import TechnologyComponent from './TechnologyComponent';
import ContactComponent from './ContactComponent';
import HomeComponent from './HomeComponent';

export default class RouterComponent extends Component {
    render() {
        return (
            <>
                <HomeComponent />
                <AboutComponent />
                <Services />
                <PortfolioComponent />
                <Details />
                <TechnologyComponent />
                <ContactComponent />
            </>
        )
    }
}