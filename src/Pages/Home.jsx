import React from 'react';
import FeatureInfo from '../FeatureInfo/FeatureInfo';
import "./home.css";
import Chart from '../Component/Chart/Chart';
import File1 from '../Component/File1/File1';
import File2 from '../Component/file2/File2';


export default function Home() {
  return (
    <div className='home'>
       <FeatureInfo />
       <Chart />
       
        <div className="homeWidgets">
        <File1 />
        <File2 />
          </div>
          
       </div>
  )
}
