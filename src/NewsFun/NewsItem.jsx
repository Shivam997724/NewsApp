import React from 'react'

export const NewsItem = (props)=>{

    let  {title,description, imgurl,newsurl,author,date,name}= props;
    return (

      <div>
        <div className="card my-3 border-dark" style={{width: "18rem"}}>
  <img src={!imgurl?"https://www.hindustantimes.com/ht-img/img/2024/01/19/1600x900/pm_modi_house_1705649618245_1705649630895.PNG":imgurl} style={{height:"150px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {name}
    <span class="visually-hidden">unread messages</span></span></h5>
    <p className="card-text">{description}...</p>
    <p class="card-text"><small class="text-body-secondary">by {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsurl} className="btn btn-primary">read more</a>
  </div>
</div>

   </div>
    )
  
}

export default NewsItem;