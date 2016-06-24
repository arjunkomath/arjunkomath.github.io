import React from "react";
import Markdown from 'react-remarkable';

import Header from '../components/header';
import Footer from  '../components/footer';

export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Markdown>
                    # Arjun Komath
                    {this.props.children}
                </Markdown>
                <Footer />
            </div>
        )
    }

}