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
      {!data.message && <p>loading</p>}
      {data.message &&
        data.message.map((appliance) => (
          <div key={appliance.id}>
            <ApplianceList appliance={appliance} />
          </div>
        ))}
    </div>
  )
}
