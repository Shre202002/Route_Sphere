import './App.css'
import CountdownTimer from './components/CountdownTimer';


function App() {

     // Set your target date here
    const targetDate = new Date('2024-11-15T00:00:00');


  return (
    <>
      <h1 className="text-5xl font-bold text-white">Welcome TO Route Shapers </h1>
      <h2 className="text-3xl font-bold text-white my-4" >We are Coming Soon </h2>
       <CountdownTimer targetDate={targetDate} />
    </>
  )
}

export default App
