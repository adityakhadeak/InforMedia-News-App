import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        let {title,description,imageUrl,newUrl}=this.props
        return (
            <div>
                <div className="card my-3" >
                    <img src={imageUrl} style={{height:'10rem'}}className="card-img-top" alt="..." />
                    <div style={{height:"15rem",position:"relative"}} className="card-body">
                        <h5 className="card-title">{title+ "...."}</h5>
                        <p className="card-text">{description+ "...."}</p>
                        <a style={{position:'absolute',bottom:"20px"}} target='_blank' href={newUrl} className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
