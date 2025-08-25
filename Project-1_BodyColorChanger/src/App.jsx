import './App.css'


function App() {

  function changecolor(color = "#c4c4c4") {
    return () => {
      if (color === "red") {
        document.body.style.backgroundColor = "red";
        return;
      }
      if (color === "green") {
        document.body.style.backgroundColor = "green";
        return;
      }
      if (color === "yellow") {
        document.body.style.backgroundColor = "yellow";
        return;
      }
      if (color === "white") {
        document.body.style.backgroundColor = "white";
        return;
      }
      if (color === "black") {
        document.body.style.backgroundColor = "black";
        return;
      }
      if (color === "olive") {
        document.body.style.backgroundColor = "olive";
        return;
      }
      if (color === "violet") {
        document.body.style.backgroundColor = "violet";
        return;
      }
      if (color === "blue") {
        document.body.style.backgroundColor = "blue";
        return;
      }
  }
}
return (
  <div className="container">
      <button className="color Red" onClick={changecolor("red")}><p>Red</p></button>
    <button className="color Green" onClick={changecolor("green")}><p>Green</p></button>
    <button className="color Yellow" onClick={changecolor("yellow")}><p>Yellow</p></button>
    <button className="color White" onClick={changecolor("white")}><p>White</p></button>
    <button className="color Black" onClick={changecolor("black")}><p>Black</p></button>
    <button className="color Olive" onClick={changecolor("olive")}><p>Olive</p></button>
    <button className="color Violet" onClick={changecolor("violet")}><p>Violet</p></button>
    <button className="color Blue" onClick={changecolor("blue")}><p>Blue</p></button>
  </div>
)
}

export default App
