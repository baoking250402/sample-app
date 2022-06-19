//External imports
import {Navigate} from 'react-router-dom';
import { useEffect, useRef } from 'react'
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux'
import { signin } from './redux/accountSlice';
import { addEmployee } from './redux/employeesSlice.js'

export const loadScript = (src) =>
  new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve()
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve()
    script.onerror = (err) => reject(err)
    document.body.appendChild(script)
  })



const Login = () => {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const googleButton = useRef(null);
  
  const handleCredentialResponse = (response) => {
    var googleObject = jwt_decode(response.credential)
    dispatch(signin({email: googleObject.email}))
    var storedEmployees = JSON.parse(window.localStorage.getItem(googleObject.email))
    if (storedEmployees) {
      for (var i = 0; i < storedEmployees.length; i++) {
        dispatch(addEmployee({
          id: storedEmployees[i].id,
          name: storedEmployees[i].name,
          birthYear: storedEmployees[i].birthYear,
          gender: storedEmployees[i].gender,
        }))
      }
    }
  }

  useEffect(() => {
    const src = 'https://accounts.google.com/gsi/client'
    const id = "1025555774611-c718b0p2mshmvklpbnh6kmgtdd1695kl.apps.googleusercontent.com"

    loadScript(src)
      .then(() => {
        /*global google*/
        google.accounts.id.initialize({
          client_id: id,
          callback: handleCredentialResponse,
        })
        google.accounts.id.renderButton(
          googleButton.current, 
          { size: 'large' } 
        )

        google.accounts.id.prompt()
      })
      .catch(console.error)

  }, [])

  

  return (
    
    <div>
            {
                !account.isSignin 
                ?
                <div ref={googleButton}></div>
                :
                <Navigate to="/private" replace />
            }
        </div>
  )
}

export default Login