import "./CSS/InputBoxCompound.css"

function IsConverter({ converterSide }) {
    if (converterSide === "From") {
        return <input className="input-area" type="number" />
    } else {
        return <p className="input-area" />
    }
}

function InputBoxCompound({ converterSide = "to", }) {
    return (
        <div className="boxContainer">
            <div className="converter-side top-div">
                <p>{converterSide}</p>
                <p>Currency Type</p>
            </div>
            <div className="last-div">
                <IsConverter converterSide={converterSide} />
                <select className="dropdown">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                    <option value="AUD">AUD</option>
                </select>
            </div>
        </div>
    )
}

export default InputBoxCompound