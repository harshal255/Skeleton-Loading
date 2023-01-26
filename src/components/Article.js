
import React, { useEffect, useState } from 'react'
import Skeleton from '../skeletons/Skeleton'
import SkeletonArticle from '../skeletons/SkeletonArticle'

const Article = () => {
    const [article, setArticle] = useState(null)
    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setArticle(data)
            console.log(data);


        }, 3000)
    })
    return (
        <div className='article'>
            <h2> Article</h2>
            {/* <Skeleton type="text"></Skeleton>
            <Skeleton type="title"></Skeleton>
            <Skeleton type="avatar"></Skeleton>
            <Skeleton type="thumbnail"></Skeleton> */}


            {article && article.map((article) => (
                <>


                    <div className='article' key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.body}</p>

                    </div>
                </>

            )

            )}

            {!article && [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} ></SkeletonArticle>)}
            {/* {!article && [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n}></SkeletonArticle>)} */}
        </div>
    )
}

export default Article