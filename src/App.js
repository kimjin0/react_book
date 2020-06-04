// import React, { Fragment } from "react";
import React, { useState } from "react";
import Counter from "./UseReducer";

const App = () => {
    return <Counter />;
};
// const App = () => {
//     const [visible, setVisible] = useState(false);
//     return (
//         <div>
//             <button
//                 onClick={() => {
//                     setVisible(!visible);
//                 }}
//             >
//                 {visible ? "숨기기" : "보이기"}
//             </button>
//             {visible && <Info />}
//         </div>
//     );
// };

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <Counter />
//             </div>
//         );
//     }
// }

export default App;
