import React from 'react'
import Skeleton from './Skeleton'
import '../skeletons/Skeleton.css'
import Shimmer from './Shimmer'

const SkeletonUser = ({ theme }) => {
    const theme1 = theme || 'light';
    return (
        <div className={`skeleton-wraper ${theme1}`}>
            <div className='skeleton-profile'>
                <div>
                    <Skeleton type="avatar"></Skeleton>

                </div>
                <div >
                    <Skeleton type="title"></Skeleton>
                    <Skeleton type="text"></Skeleton>
                    <Skeleton type="text"></Skeleton>
                </div>
                <Shimmer></Shimmer>

            </div>
        </div>
    )
}

export default SkeletonUser