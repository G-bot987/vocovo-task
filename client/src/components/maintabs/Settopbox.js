import React, { useEffect, useState } from 'react'
import ApplianceList from './list/ApplianceList'

export default function Settopbox() {
  const [data, setData] = useState({})
  useEffect(() => {
    fetch('/lightbulb')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log(data)
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
