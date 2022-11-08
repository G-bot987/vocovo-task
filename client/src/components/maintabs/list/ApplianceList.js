// import { useEffect, useState } from 'react'
import React from 'react'

export default function ApplianceList(appliance) {
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
