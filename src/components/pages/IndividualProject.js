import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import IndividualHeader from '../IndividualHeader';
import PageCard from '../PageCard';
import PageArrayList from '../PageArrayList';

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

    default:
      console.log("No Matching JSON File Found")
      return undefined
  }
}

function IndividualProject() {
  const [pageArrayList, setPageArrayList] = React.useState([]);

  var data = LoadJsonData();

  useEffect(() => {
    if(data !== undefined) {
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



  // if data exsits on the website
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

    </>
  )
}

export default IndividualProject