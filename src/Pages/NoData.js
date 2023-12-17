import React from 'react'
import NodataIcon from "../Assets/no_data.svg"

const NoDataComponent = () => {
  return (
    <div className='NoData-page-Cover'>
        <div className='Nodata-icon-box'>
          <img src={NodataIcon}></img>
        </div>
    </div>
  )
}

export default NoDataComponent