import React, { Component } from 'react'

export default class NewsItems extends Component {

  render() {
  let {title,description,imageUrl,newsUrl}=this.props

    return (
      <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://images.barrons.com/im-05577541/social":imageUrl} style={{height:"141px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{ title}</h5>
    <p className="card-text">{!description?"Meta’s new non-voting shares will help preserve Mark Zuckerberg’s control as the company seeks fundi":description}</p>
    <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
    )
  }
}
