//function
// const App = () => {
//   return (
//     <>
//       <h1>venkat</h1>
//     </>
//   );
// };
// export default App;

import { useState } from "react";

//useState

const App = () => {
  const [user, setUser] = useState("yogi");

  const name = () => {
    setUser("venkat");
  };

  const newUser = () => {
    setUser("mahesh babu");
  };

  return (
    <>
      <h1>{user}</h1>
      <button onClick={name}>click Here</button> <br />
      <button onClick={newUser}>click for new name</button>
    </>
  );
};
export default App;
