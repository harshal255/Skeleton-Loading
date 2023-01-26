import React from 'react'
import Skeleton from './Skeleton'
import '../skeletons/Skeleton.css'
import Shimmer from './Shimmer'

const skeletonArticle = ({ theme }) => {
    const theme1 = theme || 'light';
    return (
        <div className={`skeleton-wraper ${theme1}`}>
            <div className='skeleton-article'>
                <Skeleton type="title"></Skeleton>
                <Skeleton type="text"></Skeleton>
                <Skeleton type="text"></Skeleton>
                <Skeleton type="text"></Skeleton>

            </div>
            <Shimmer></Shimmer>

        </div>
    )
}

export default skeletonArticle