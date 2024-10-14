import React from 'react'
import HomeTitleCard from './HomeTitleCard'
import './HomeBody.css'

function HomeBody() {


    return (
        <>
            <div className='HomeTitleCardContainer'>
                <HomeTitleCard Title={"Projects"} link={"/Projects"} body={"Click the tile to view some of my projects I created over the years."}></HomeTitleCard>
                <HomeTitleCard Title={"About Me"} link={"/AboutMe"} body={"Click the tile to see who I am, what education I have, and where do I work."}></HomeTitleCard>
                <HomeTitleCard Title={"Skills"} link={"/Skills"} body={"Click the tile to see what skills I have acquired over the years."}></HomeTitleCard>
            </div>
        </>
    )
}

export default HomeBody