import { Route, Routes } from 'react-router-dom'; 
import HomePage from './pages/homePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import SidebarNavigation from './components/SidebarNavigation.jsx';
import './App.css';

function App() {

  return (

    <>
      {/* <SidebarNavigation /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Create" element={<CreatePage />} />
      </Routes>
    </>
  )

}

export default App
