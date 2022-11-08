// import { useEffect, useState } from 'react'
import React from 'react'
import styles from '../../../index.css'

export default function ApplianceList(appliance) {
  const thisApp = appliance.appliance
  const { id, name, type } = thisApp

  function runDeleteId() {
    console.log('delete')

    fetch(`/id/${id}`, { method: 'DELETE' }).then((res) => res.json())
  }

  return (
    <div className="border-2 px-8 border-solid border-black">
      {name}
      <br />
      {id}
      <br />
      {type}
      <br></br>
      <button onClick={() => runDeleteId(id)}>delete</button>
    </div>
  )
}
