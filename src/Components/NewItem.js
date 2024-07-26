import React, { Component } from 'react'

export class NewItem extends Component {

  render() {
    let{title,description,imageUrl,newsUrl}=this.props;
    return (
      <div>
        <div className="card">
            <img src={!imageUrl?"https://www.euroschoolindia.com/wp-content/uploads/2023/06/facts-about-space.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewItem
