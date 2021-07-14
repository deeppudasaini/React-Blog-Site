import React from 'react'

export default function AddPost() {
    return (
        <div>
            <form id="contactForm" name="sentMessage" novalidate="novalidate" method="POST">
               
               <div className="control-group">
                   <div className="form-group floating-label-form-group controls"><label>Name</label><input className="form-control" type="text" id="name" required="" name="name" placeholder="Name" /><small className="form-text text-danger help-block"></small></div>
               </div>
               <div className="control-group">
                   <div className="form-group floating-label-form-group controls"><label>Email Address</label><input className="form-control" type="email" id="email" name="email" required="" placeholder="Email Address" /><small className="form-text text-danger help-block"></small></div>
               </div>
               <div className="control-group">
                   <div classNameName="form-group floating-label-form-group controls"><label>Phone Number</label><input className="form-control" type="tel" id="phone" name="number" required="" placeholder="Phone Number" /><small className="form-text text-danger help-block"></small></div>
               </div>
               <div className="control-group">
                   <div className="form-group floating-label-form-group controls mb-3"><label>Message</label><textarea className="form-control" id="message" name="message" data-validation-required-message="Please enter a message." required="" placeholder="Message" rows="5"></textarea><small className="form-text text-danger help-block"></small></div>
               </div>
               <div id="success"></div>
               <div className="form-group"><button className="btn btn-primary" id="sendMessageButton" type="submit">Send</button></div>
           </form>
        </div>
    )
}
