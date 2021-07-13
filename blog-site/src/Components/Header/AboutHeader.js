import React from 'react'

export default function AboutHeader(props) {
    return (
        <header class="masthead" style={props.AboutStyle}>
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <div class="site-heading">
                        <h1>About Me</h1><span class="subheading">This is what I do</span></div>
                </div>
            </div>
        </div>
    </header>
    )
}
