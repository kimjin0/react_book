// import React, { Fragment } from "react";
import React, { useState } from "react";
import Info from "./Info";

const App = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                {visible ? "숨기기" : "보이기"}
            </button>
            {visible && <Info />}
        </div>
    );
};
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <Info />
//             </div>
//         );
//     }
// }

export default App;
