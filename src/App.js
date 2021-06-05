import './App.css';
import Main from './Main/Main'
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Main />
  );
}

// export default App;
// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );

  
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       counter: 0
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }
  
//   handleClick = () => {
//     console.log("hi")
//     alert("The value of counter is :" + this.state.counter)
//     this.setState({ counter: this.state.counter + 1 })
//   }
  
//   render() {
//     return (
//       <div >
//         <div className="jumbotron">
//           <h1 className="display-4 d-flex justify-content-center">Hello From GFG!</h1>
//           <p className="lead d-flex justify-content-center">This is a simple Example of using 
//           bootstrap in React.</p>
  
//           <hr className="my-4" />
//           <p className="d-flex justify-content-center">the Component is called jumbotron in bootstrap.</p>
  
//           <p className="lead d-flex justify-content-center">
//             <a onClick={this.handleClick}
//               className="btn btn-warning btn-lg" href="#" 
//               role="button">Click me</a>
//           </p>
  
//         </div>
//       </div>
//     );
//   }
// }
  
export default App;