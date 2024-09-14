import { useState } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState({
                            username: '',
                            password: ''
  });

  return (
    <>
      <div className='base'>

        <h3 className='heading'>Login</h3>

        <form>

          <input 
          type='email'
          placeholder='Email address'
          value={data.username}
          onChange={(e) => setData(prevData => ({ ...prevData, username: e.target.value }))}//prevData = variable
          // onChange={(e) =>setData.username(e.target.value)} // add username
            ></input>

          <input 
          type='password'
          placeholder='Password'
          value={data.password}
          onChange={(e) => setData(prevData => ({ ...prevData, password: e.target.value }))}
          ></input>

          <button className='login-button'
          onClick={() => console.log('email: ', data.username, 'password: ',data.password)}
          >
            LOGIN
            </button>
          <a className='signup' href='#'>Sign Up</a>
        </form>
        
      </div>
    </>
  )
}

//add conditional rendering: email enters only when there is '@gmail.com' included
// if not: print 'wrong email'

//css:
// less use of margin

export default App
