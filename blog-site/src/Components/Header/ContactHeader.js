import React from 'react'

export default function ContactHeader(props) {
    return (
        <header className="masthead" style={props.ContactStyle}>
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-lg-8 mx-auto">
                    <div className="site-heading">
                        <h1>Contact Me</h1><span className="subheading">Want to Join Me?</span></div>
                </div>
            </div>
        </div>
    </header>
    )
}
