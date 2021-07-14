import React from 'react'

export default function IndexHeader(props) {
    return (
        <header className="masthead" style={props.IndexStyle}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto">
              <div className="site-heading">
                <h1>{props.title}</h1><span className="subheading">{props.sub}</span></div>
            </div>
          </div>
        </div>
      </header>
    )
}
