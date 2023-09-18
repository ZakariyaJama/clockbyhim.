import TimerClock from './Timer.tsx'
import './App.css'



function App() {
  
  return (
    <>
      <h1>his timer.</h1>
      <h2 style={{ fontStyle: 'italic'}}>"let's get it DONE!!!"</h2>
      <div className='center'>
        <p>
        <ol>
          <li>set a 25 minute session timer</li>
          <li>work on your **IT until the time is up</li>
          <li>thennnn take a 5 minute break......just 5 tho</li>
        </ol>
        </p>
      </div>
      <TimerClock />
    </>
  )
}

export default App
