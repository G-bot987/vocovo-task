import React, { useState, useEffect } from 'react'
import ApplianceList from './list/ApplianceList'

export default function Appliances() {
  const [data, setData] = useState({})
  useEffect(() => {
    fetch('/appliances')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])
  return (
    <div>
      {data.message &&
        data.message.map((appliance) => (
          <div>
            <ApplianceList appliance={appliance} />
          </div>
        ))}
    </div>
  )
}
