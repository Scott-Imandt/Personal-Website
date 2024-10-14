import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import IndividualHeader from '../IndividualHeader';
import PageCard from '../PageCard';
import PageArrayList from '../PageArrayList';
import { motion } from 'framer-motion'

function LoadJsonData() {
  const location = useLocation();

  const data = location.state?.data

  //Switch case is based off of Title
  switch (data) {

    case "HPS Daily":
      return require('../../data/Projectdata/HPSDailyProjectData.json')

    case "Hiking Java App":
      return require('../../data/Projectdata/TrailRecorderProject.json')

    case "Smart Blinds":
      return require('../../data/Projectdata/SmartBlindsProjectData.json')

    case "Fence Project":
      return require('../../data/Projectdata/FenceProjectData.json')

    case "Car Maintenance Tracker":
      return require('../../data/Projectdata/CarMaintenanceTrackerProjectData.json')

    case "Website JSON Editor":
      return require('../../data/Projectdata/Website JSON EditorProjectData.json')

    case "Unreal Engine: Don't Stop":
      return require('../../data/Projectdata/Unrealgame.json')

    case "DIYTaskTracker":
      return require('../../data/Projectdata/DIYTaskTracker.json')

    case "CICaidA: Custom Hardware":
      return require('../../data/Projectdata/CICaidACustom.json')

    case "Earth Uncharted":
      return require('../../data/Projectdata/EarthUncharted.json')

    default:
      console.log("No Matching JSON File Found")
      return undefined
  }
}

function IndividualProject() {
  const [pageArrayList, setPageArrayList] = React.useState([]);

  var data = LoadJsonData();

  useEffect(() => {
    if (data !== undefined) {
      setPageArrayList(data.Array);
      console.log(data.Array)
    }
  }, [data])


  //if data cannot be loaded
  if (data === undefined) {
    return (
      <div>Error Loading page </div>
    )
  }

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



  // if data exsits on the website
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

          <PageCard
            title={'Objective'}
            body={data.Objective}
            img={""}>
          </PageCard>

          <PageArrayList pageArrayList={pageArrayList}></PageArrayList>

          <PageCard
            title={'Conclusion'}
            body={data.Conclusion}
            img={""}>
          </PageCard>
        </motion.div>
      </motion.div>
    </>
  )
}

export default IndividualProject