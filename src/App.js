import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import CharactersPage from './pages/CharactersPage'
import ComicsPage from './pages/ComicsPage'
import NavBar from './components/NavBar'
import './styles/App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <NavBar></NavBar>
        <Switch>
          <Redirect exact from='/' to='/characters'></Redirect>
          <Route path='/characters' component={CharactersPage}></Route>
          <Route path='/comics' component={ComicsPage}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
