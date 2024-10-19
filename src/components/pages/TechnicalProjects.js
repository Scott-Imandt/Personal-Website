import React from 'react'
import { useLocation } from 'react-router-dom'
import IndividualHeader from '../IndividualHeader';
import PageCard from '../PageCard';
import { motion } from 'framer-motion'

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
    const myStyle = { marginRight: "7.5%", marginLeft: "7.5%", marginTop: "50px", borderRadius: "10px" };


    const containerVarients = {
        hidden: {
            y: -550,

        },

        visible: {
            y: 0,

            transition: {
                duration: .75,
                type: 'spring',
                stiffness: 60,
                //when: "beforeChildren"
            }
        },
        exit: {
            y: -550,
            transition: {
                type: 'tween',
                duration: .3,
                delay: .20
            }

        }
    }

    const childVariants = {
        hidden: {
            opacity: 0,
            y: -300,

        },

        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: .20,
                duration: 1,
                type: 'spring',
                stiffness: 60,
            }
        },
        exit: {
            opacity: 0,
            y: -1000,
            transition: {
                duration: .3,
                type: 'tween',

            }
        }

    }
    return (
        <>
            <motion.div variants={containerVarients} initial="hidden" animate="visible" exit='exit'>
                <IndividualHeader
                    projectName={data.title}
                    subtitle={data.subtitle}
                    mainImage={data.mainimgsrc}
                    githublink={data.githublink}
                />


                <motion.div variants={childVariants}>
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
                </motion.div>
            </motion.div>

        </>
    )
}

export default TechnicalProjects