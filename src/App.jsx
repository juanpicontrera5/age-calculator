import './App.css'
import Schedule from './components/Schedule'

function App() {

  return (
    <>
      <div className="header">
        Age Calculator
      </div>

      <div className="calendar">
        <p>Enter your birth date</p>
        <Schedule/>
      </div>

      <button className='calculateButton'>
        Calculate
      </button>
    </>
  )
}


export default App