import { useState } from 'react'
import Navtabs from './components/navigation/Navtabs'
import Appliances from './components/maintabs/Appliances'
import Settopbox from './components/maintabs/Settopbox'
import Lighbulb from './components/maintabs/Lightbulb'
import Smokedetector from './components/maintabs/Smokedetector'

function App() {
  const [currentPage, setCurrentPage] = useState('Appliances')
  const renderPage = () => {
    if (currentPage === 'Settopbox') {
      return <Settopbox />
    }
    if (currentPage === 'Lightbulb') {
      return <Lighbulb />
    }
    if (currentPage === 'Smokedetector') {
      return <Smokedetector />
    }
    return <Appliances />
  }

  const handlePageChange = (page) => setCurrentPage(page)
  return (
    <div className="App">
      <Navtabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  )
}

export default App
