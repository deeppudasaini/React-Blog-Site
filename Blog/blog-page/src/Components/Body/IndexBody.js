import React from 'react'
import {SinglePostTitle} from '../SinglePostTitle'

export const IndexBody = props => {
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-10 col-lg-8">

                    {
                   props.singlePost.map(monster => {
                            return (
                                <>
                                    <SinglePostTitle posts={monster} />
                                </>
                            )
                        })
                    }
                     

                    <hr />

                    <div className="clearfix"><button className="btn btn-primary float-right" type="button">Add Posts</button>
                    </div>
                </div>


            </div>
        </div>
    )
}
