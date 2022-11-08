// import { useEffect, useState } from 'react'
import React from 'react'
import styles from '../../../index.css'

export default function ApplianceList(appliance) {
  const thisApp = appliance.appliance
  const { id, name, type } = thisApp
  return (
    <div className="border-2 px-8 border-solid border-black">
      {name}
      <br />
      {id}
      <br />
      {type}
    </div>
  )
}
