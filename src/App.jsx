import './App.css'
import Header from './components/Header'
import AddNote from './components/AddNote'
import Search from './components/Search'
import Notes from './components/Notes'

function App() {
  

  return (
    <>
     <Header/>
     <Search/>
     {/* <AddNote/> */}
    <Notes/>
    </>
  )
}

export default App
