import './App.css'
import Card from './components/Card'

function App() {
  
  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl mb-5">
      Hello world!
    </h1>

    <Card celebName = "Yuvraj" btnText = "click me"/>
    <Card celebName = "Parashar" btnText = "visit me"/>
    <Card />
    </>
  )
}

export default App
