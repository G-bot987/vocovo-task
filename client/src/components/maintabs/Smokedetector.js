import React, { useEffect, useState } from 'react'
import ApplianceList from './list/ApplianceList'

export default function Smokedetector() {
  const [data, setData] = useState({})
  useEffect(() => {
    fetch('/smoke-detector')
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
