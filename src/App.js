import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
class App extends Component {
  state = { currentUser: { name: "mosh" } };
  render() {
    return (
      <UserContext.Provider value={this.state.currentUser}>
        <div>
          <MoviePage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;

// import React from "react";
// import Counters from "./components/counter/counters";
// import Navbar from "./components/counter/navbar";
// import axios from "axios";
// class App extends React.Component {
//   state = {
//     counters: [
//       { id: 1, value: 0 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 },
//     ],
//   };
//   async componentDidMount() {
//     const promise = axios.get("https://jsonplaceholder.typicode.com/posts");
//     const result = await promise;
//     console.log("result", result);
//   }
//   handleReset = () => {
//     const counters = this.state.counters.map((counter) => {
//       counter.value = 0;
//       return counter;
//     });
//     this.setState({ counters });
//   };
//   handleDelete = (counterId) => {
//     const counters = this.state.counters.filter((c) => c.id !== counterId);
//     return this.setState({ counters });
//   };
//   handleIncrement = (counter) => {
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value++;
//     this.setState({ counters });
//   };
//   handleDecrement = (counter) => {
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     if (counters[index].value > 0) counters[index].value--;
//     this.setState({ counters });
//   };
//   render() {
//     return (
//       <React.Fragment>
//         <Navbar
//           totalCount={this.state.counters.filter((c) => c.value !== 0).length}
//         />
//         <main className="container"></main>
//         <button
//           className="btn btn-primary m-2 btn-sm"
//           onClick={() => this.handleReset()}
//         >
//           Reset
//         </button>
//         <Counters
//           counters={this.state.counters}
//           onIncrement={this.handleIncrement}
//           onDelete={this.handleDelete}
//           onDecrement={this.handleDecrement}
//         />
//       </React.Fragment>
//     );
//   }
// }

// export default App;
