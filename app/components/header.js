import React from 'react';
import { IndexLink, Link } from "react-router";

const styles = {
    button: {
        marginLeft: 20
    }
}

export default class Header extends React.Component {

    render() {
        return (
            <div>
                <IndexLink to="/" class="btn">Home</IndexLink>
                <Link style={styles.button} class="btn" to="projects">Projects</Link>
                <Link style={styles.button} class="btn" to="opensource">Open Source</Link>
            </div>
        );
    }

}