//import { createContext, useState } from 'react';
 import { useState } from 'react';
import './App.css'
 import ChildA from './components/ChildA';
  //STEP 1: create context
// const UserContext = createContext();
const ThemeContext = createContext();

function App() {
//STEP 3: pass value
// const {user, setUser} = useState ({name:"Love"});
const [theme, setTheme] = useState('light');
  return (
<ThemeContext.Provider value={{theme, setTheme }}>
  <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
  <ChildA />
  </div>
</ThemeContext.Provider>







    //STEP 2: wrap all the child insode a provider */

  //  <>
  //  <UserContext.Provider value={user}>
  //   <ChildA />
  //  </UserContext.Provider>
  //  </>
  )
}
//step 4: cosumer k ander jaake consume kr lo let say ChildC
export default App
//export {UserContext}
export {ThemeContext}
