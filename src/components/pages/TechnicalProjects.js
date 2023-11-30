import React from 'react'
import { useLocation } from 'react-router-dom'
import IndividualHeader from '../IndividualHeader';
import PageCard from '../PageCard';

function LoadJsonData() {
    const location = useLocation();

    const data = location.state?.data

    //Switch case is based off of Title
    switch (data) {

        case "User Instructions":
            return require('../../data/Projectdata/UserInstructionData.json')
        
        case "Collaborative Project":
            return require('../../data/Projectdata/CollaborativeProjectData.json')

        case "CICaidA SBDC Presentaion":
            return require('../../data/Projectdata/CICaidAPresentation.json')

        default:
            return undefined
    }
}

function TechnicalProjects() {
    var data = LoadJsonData();


    //if data cannot be loaded
    if (data === undefined) {
        return (
            <div>Error Loading page </div>
        )
    }

    // if data exsits on the website
    const myStyle = {marginRight: "7.5%", marginLeft: "7.5%", marginTop:"50px", borderRadius: "10px"};

    return (
        <>

            <IndividualHeader
                projectName={data.title}
                subtitle={data.subtitle}
                mainImage={data.mainimgsrc}
                githublink={data.githublink}
            />

            <PageCard
                title={'Overview'}
                body={data.Overview}
                img={""}>
            </PageCard>

            <div style={myStyle}>
                {console.log(data)}
                <object data={data.Data} type="application/pdf" width="100%" height="900px">
                    <p>Alternative text<a href="/Projects">to the PDF!</a></p>
                </object>
            </div>
        </>
    )
}

export default TechnicalProjects