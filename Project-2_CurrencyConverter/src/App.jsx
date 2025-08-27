import InputBoxCompound from "./InputBoxCompound"
import "./CSS/App.css"

function App({ convertFrom = "convertFrom", convertTo = "convertTo" }) {
  return (
    <div className="container" >
      <div>
        <InputBoxCompound converterSide="From" />
        <button className="swtch-buitton">⇅</button>
        <InputBoxCompound converterSide="To" />
      </div>
      <button className="convert-button">Convert {convertFrom} to {convertTo} </button>
    </div>
  )
}

export default App
