import React from 'react'
import { Link } from 'react-router-dom'

const LatestNews = (props) => {
    const renderNews =({latestData}) => {
        if(latestData){
            return latestData.map(item =>{
                return (
                    <Link key={item.id} to={`/details/${item.id}`} className="item">
                        <div className="image_cover" style={{background: `url(/articles/${item.img})`}}>
                            <div className="description">
                                <span>
                                        {item.category}
                                </span>
                                <div>
                                    {item.title}
                                </div>
                            </div>
                        </div>

                    </Link>
                )
            })
        }
    }
    return (
        <div className="home-latest">
            {renderNews(props)}
        </div>
    )
}

export default LatestNews
