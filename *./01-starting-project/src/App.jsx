import { useState } from 'react'
import Header from './comp/Header'
import UserInput from './comp/UserInput'
import Results from './comp/Results'

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	})

	function handleChange(inputIdentifier, newValue) {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputIdentifier]: +newValue,
			}
		})
	}

	const inputIsValid = userInput.duration >= 1

	return (
		<>
			<Header />
			<UserInput userInput={userInput} onChange={handleChange} />
			{!inputIsValid && (
				<p className='center'>please enter duration greater than zero</p>
			)}
			{inputIsValid && <Results input={userInput} />}
		</>
	)
}

export default App
