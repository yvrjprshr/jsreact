import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
function App() {

  return (
    <UserContextProvider>
      React with Chai and share is important
      <Login/>
      <Profile/>
    </UserContextProvider>

  )
}

export default App
