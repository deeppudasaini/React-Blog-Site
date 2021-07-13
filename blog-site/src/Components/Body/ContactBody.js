import React from 'react'

export default function ContactBody() {
    return (
        <div class="container">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
                <p>You can fill the form below with your email address in order to send any message to me. You can also directly report from here. </p>
                <form id="contactForm" name="sentMessage" novalidate="novalidate" method="POST">
               
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls"><label>Name</label><input class="form-control" type="text" id="name" required="" name="name" placeholder="Name" /><small class="form-text text-danger help-block"></small></div>
                    </div>
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls"><label>Email Address</label><input class="form-control" type="email" id="email" name="email" required="" placeholder="Email Address" /><small class="form-text text-danger help-block"></small></div>
                    </div>
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls"><label>Phone Number</label><input class="form-control" type="tel" id="phone" name="number" required="" placeholder="Phone Number" /><small class="form-text text-danger help-block"></small></div>
                    </div>
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-3"><label>Message</label><textarea class="form-control" id="message" name="message" data-validation-required-message="Please enter a message." required="" placeholder="Message" rows="5"></textarea><small class="form-text text-danger help-block"></small></div>
                    </div>
                    <div id="success"></div>
                    <div class="form-group"><button class="btn btn-primary" id="sendMessageButton" type="submit">Send</button></div>
                </form>
            </div>
            
        </div>
        <hr/>
    </div>
    
    
    
    )
}
