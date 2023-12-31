import './App.css'
import { BrowserRouter, Routes, Route, useNavigate, Navigate} from 'react-router-dom'

//Components
// import Header from './components/header/Header'
// import Footer from './components/footer/Footer'
// import ProxyContent from './components/proxyContent/ProxyContent'


//Tests
import EntryMain from './components/entry/EntryMain'
import LandingPage from './components/landingPage/LandingPage'
import Dashboard from './components/dashboard/Dashboard'
import CompanyHomePage from './components/CompanyHome/CompanyHomePage'
import LandingPageNew from './components/LandingPageNew/LandingPageNew'


function App() {

  const isAuthenticated = (localStorage.getItem('accessToken') !== null)

  function isAuth() {
    return localStorage.getItem('accessToken') ? true : false
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<LandingPage/>} /> */}
        <Route exact path="/" element={<LandingPageNew/>} />
        <Route path="/entry/*" element={<EntryMain/>} />
        <Route
        path="/dashboard"
        // element={isAuthenticated ? <Dashboard /> : <Navigate to='/entry' replace/>}
        element = {<Dashboard/>}
      />
        <Route
        path="/companyhome"
        // element={isAuthenticated? <CompanyHomePage /> : <Navigate to='/entry' replace/>}
        element={<CompanyHomePage />}
      />
      </Routes>
    </BrowserRouter>
  )
}

export default App
