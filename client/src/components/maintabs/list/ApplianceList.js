// import { useEffect, useState } from 'react'
import React from 'react'

export default function ApplianceList(appliance) {
  console.log(appliance)
  console.log('app.name')
  console.log(appliance.appliance)
  const thisApp = appliance.appliance
  const { id, name, type } = thisApp
  return (
    <div>
      {name}
      <br />
      {id}
      <br />
      {type}
    </div>
  )
}
