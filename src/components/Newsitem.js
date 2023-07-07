import React, { Component } from 'react'

export default class Newsitem extends Component {


    render() {
        let { title, description, imageUrl, newUrl, author, publishedAt,headName } = this.props
        return (
            <div>
                <div className="card my-3" >
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                        {headName}
                    </span>
                    <img src={imageUrl} style={{ height: '10rem' }} className="card-img-top" alt="..." />
                    <div style={{ height: "18rem", position: "relative" }} className="card-body">
                        <h5 className="card-title">{title + "...."}</h5>
                        <p className="card-text">{description + "...."}</p>
                        <p className="card-text "><small className="text-body-secondary">By {author ? author : "Unknown"} At {new Date(publishedAt).toGMTString()}</small></p>

                        <a style={{ position: 'absolute', bottom: "15px" }} rel="noreferrer" target='_blank' href={newUrl} className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
