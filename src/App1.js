import "./App.css";
import Message from "./components/Message";

function App() {
  // let lang = "REACT JS";
  // let lab = "MCA LAB 1";
  // let info = ["REACT JS", "MCA LAB 1"];
  let info = [
    {
      lang: "REACT JS",
      lab: "MCA LAB 1",
    },
    {
      lang: "DOT NET",
      lab: "MCA LAB 2",
    },
    {
      lang: "C and Java",
      lab: "G-Block G-113",
    },
    {
      lang: "Fundamentals of Computers",
      lab: "G-Block G-114",
    },
  ];
  return (
    <div className="App">
      {/* <Message lang={lang} lab={lab} /> */}
      {/* <Message info={info[0]} />
      <Message info={info[1]} />
      <Message info={info[2]} /> */}
      {info.map((val) => (
        <Message info={val} />
      ))}
    </div>
  );
}

export default App;
