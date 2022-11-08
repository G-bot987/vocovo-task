import React, { useEffect, useState } from 'react'
import ApplianceList from './list/ApplianceList'

export default function Lightbulb() {
  const [data, setData] = useState({})
  useEffect(() => {
    fetch('/lightbulb')
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
