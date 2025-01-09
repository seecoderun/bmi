import { useState, useMemo } from 'react'
import './App.css'

function App() {

	const [height,setHeight] = useState(50)
	const [weight,setWeight] = useState(75)



	const bmi = useMemo(()=>{return ((weight*703)/(height*height)).toFixed(1)},[weight,height])

	const getBMIString = () => bmi < 18.5 ? 'underweight' : bmi < 25 ? 'normal weight' : bmi < 30 ? 'overweight' : 'obese'

	return (
    <>
	<h1>BMI Calculator</h1>
	<p>height: {height}&quot;</p>
	<input 
		type='range' 
		min='50' 
		max='84'
		onChange = {ev=>setHeight(parseInt(ev.target.value,10))} 
	></input>
	<p>weight: {weight}lbs</p>
	<input 
		type='range' 
		min='75' 
		max='300'
		onChange = {ev=>setWeight(parseInt(ev.target.value,10))} 
	></input>
	<p>BMI: {bmi}</p>
	<p>{getBMIString()}</p>
	<footer>
		<p>This React applet was made with Vite and uses <code>useState</code> and <code>useMemo</code>.</p>  
		<p>The source code is available on <a href='https://github.com/seecoderun/bmi'>GitHub</a>.</p>
	</footer>
    </>
  )
}

export default App
