import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './components/Child'

// const UserContext = createContext();
const ThemeContext = createContext();

function App() {
  // const [user, setUser] = useState({name: "love"})
  const [theme, setTheme] = useState('light')
  

  return (
      <ThemeContext.Provider value={{theme, setTheme}}>
       <div id='container' style={{backgroundColor:theme === 'light' ? "beige" : "black"}}>
        <Child />
       </div>
     </ThemeContext.Provider>

    

    // <>
    // <UserContext.Provider value={user}>
    //    <Child />
    // </UserContext.Provider>     
    // </>
  )
}

export default App
// export {UserContext}
export {ThemeContext}
