import React, { useState } from 'react'
import { myBlog } from './BlogApi'
import "./Blog.css";

const Blog = () => {
    const [blogdata,setBlogdata] = useState(myBlog)
  return (
    <div className='blog'>
        <div className='heading'>
            <h2>Insights by interest</h2>
            <p>View all</p>
        </div>
       <div className='all_blogs'>
       {
            blogdata && blogdata.map((item)=>{
                return(
                    <div key={item.id} className='blog_data'>
                     <img src={item.img} alt=''/>
                  <div className='b_content'>
                  <h2>{item.title}</h2>
                     <p>READ MORE</p>
                    </div>
                    </div>
                )
            })
        }
       </div>
      

      {/* ------------------------ */}
      <div className='tcs'>
        <h2>Discover the TCS difference</h2>
        <div className='tcs_content'>
            <h4>TCS ADD™ Connected Clinical Trials wins the India Pharma Award 2022
</h4>
            <button>Learn more</button>
        </div>
      </div>
    </div>
  )
}

export default Blog
