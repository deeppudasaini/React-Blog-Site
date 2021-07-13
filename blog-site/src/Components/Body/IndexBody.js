import React from 'react'

export default function IndexBody(props) {
    return (
         <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8">
            <div className="post-preview">
              <a href="">
                <h2 className="post-title">Deep Pudasaini</h2>
                <h3 className="post-subtitle">This is my name</h3>
              </a>
              <p className="post-meta">Posted by&nbsp;<a href="#">Writer on 2041/62/20</a></p>
            </div>
            <hr/>

              <div className="clearfix"><button className="btn btn-primary float-right" type="button">All Posts ⇒</button>
              </div>
          </div>

          </div>
        </div>
      
    )
}
