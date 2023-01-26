import React, { useEffect, useState } from 'react'
import SkeletonUser from '../skeletons/SkeletonUser';


const User = () => {

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setProfile(data)
            console.log(data);


        }, 3000)
    })
    return (
        <>
            <div className='user'>
                <h2>user</h2>
                {profile && profile.map((profile) => (

                    <div className='profile' key={profile.id}>
                        <h3>{profile.username}</h3>
                        <p>{profile.email}</p>
                        <a href={profile.website}>{profile.website}</a>
                    </div>

                )

                )}

                {/* {!profile && <div>Loading...</div>} */}
                {!profile && [1, 2, 3, 4, 5].map((n) => <SkeletonUser key={n} ></SkeletonUser>)}

            </div>

        </>
    )
}

export default User