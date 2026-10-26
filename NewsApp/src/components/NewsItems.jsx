import React, { Component } from 'react'

export default class NewsItems extends Component {

  render() {
   
  let {title,description,imageUrl,newsUrl}=this.props

    return (
      <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://assets1.cbsnewsstatic.com/hub/i/r/2026/10/23/2901d7ea-5f80-4213-bfea-a724aa6a89d2/thumbnail/1200x630/b6fa651cc74fd33e7b42d2ab7f4cc247/gettyimages-2224252659.jpg":imageUrl} style={{height:"141px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{!title?"Mark Zuckerberg’s deal to stay in California":title}</h5>
    <p className="card-text">{!description?"Supporters of the tax say many billionaires threatening to leave the state will not go":description}</p>
    <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
    )
  }
}
