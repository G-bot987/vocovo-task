import React from 'react'
import styles from '../../index.css'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="underline">
      <li className="pl-4">
        <a
          href="#Appliances"
          onClick={() => handlePageChange('Appliances')}
          className={
            currentPage === 'Appliances' ? 'nav-link active' : 'nav-link'
          }
        >
          all appliances
        </a>
      </li>
      <li className="pl-4">
        <a
          href="#Settopbox"
          onClick={() => handlePageChange('Settopbox')}
          className={
            currentPage === 'Settopbox' ? 'nav-link active' : 'nav-link'
          }
        >
          Set top box
        </a>
      </li>
      <li className="pl-4">
        <a
          href="#Lightbulb"
          onClick={() => handlePageChange('Lightbulb')}
          className={
            currentPage === 'Lightbulb' ? 'nav-link active' : 'nav-link'
          }
        >
          Lightbulb
        </a>
      </li>
      <li className="pl-4">
        <a
          href="#Smokedetector"
          onClick={() => handlePageChange('Smokedetector')}
          className={
            currentPage === 'Smokedetector' ? 'nav-link active' : 'nav-link'
          }
        >
          Smoke detector
        </a>
      </li>
    </ul>
  )
}

export default NavTabs
