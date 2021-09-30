import React, { Component } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import PropTypes from 'prop-types';

class Navbar extends Component {

    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><i className="fab fa-github"></i> Github Finder</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default Navbar
