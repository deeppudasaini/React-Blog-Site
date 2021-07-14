import React from 'react'
import AddContact from '../Form/AddPost'
export default function ContactBody() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto">
                <p>You can fill the form below with your email address in order to send any message to me. You can also directly report from here. </p>
                <AddContact />
            </div>
            
        </div>
        <hr/>
    </div>
    
    
    
    )
}
