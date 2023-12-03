import { useState } from 'react'
import './App.css'
import ReuseComponant from './componant/componant'
function App() {

  const [user, setUser] = useState([
    { name: 'aneesh', email: 'ufh@gmail.com' },
    { name: 'Arun', email: 'arun@gmail.com' },
    { name: 'sura', email: 'sura@gmail.com' }
  ]);

  return (
     <div className='Maindiv'>
         <h1>Welcome to this <span>React</span> Website</h1>
         <div>
            <ReuseComponant current={user} />
         </div>
     </div>
  )
}

export default App
