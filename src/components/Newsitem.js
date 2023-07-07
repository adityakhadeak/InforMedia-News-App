import React from 'react'

const Newsitem = (props) => {

    let { title, description, imageUrl, newUrl, author, publishedAt, headName } = props
    return (
        <div>
            <div className="card my-3" >
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                    {headName}
                </span>
                <img src={imageUrl} style={{ height: '10rem' }} className="card-img-top" alt="..." />
                <div style={{ height: "18rem", position: "relative", background: props.mode == 'light' ? "white" : "linear-gradient(to bottom right, #000000, #333333)" }} className={`text-${props.mode === 'light' ? "black" : "light"}  card-body`}>
                    <h5 className="card-title">{title + "...."}</h5>
                    <p className="card-text">{description + "...."}</p>
                    <p className="card-text " ><small className={`text-${props.mode === 'light' ? "body-secondary" : "light"}`}>By {author ? author : "Unknown"} At {new Date(publishedAt).toGMTString()}</small></p>

                    <a style={{ position: 'absolute', bottom: "15px",background: props.mode == 'light' ? "linear-gradient(to bottom right, #007bff, #0056b3)" : "linear-gradient(to bottom right, #007bff, #28a745)"  }} rel="noreferrer" target='_blank' href={newUrl} className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default Newsitem