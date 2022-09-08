import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { urlApi } from "../../config"
import { AuthContext } from '../context/authContext'
import { useHttp } from "../hooks/http.hook"
import useInput from "../hooks/useInput"

export default function SigninPage() {

  const { loading, request } = useHttp()
  const { setAuth, setToken, setUserId } = useContext(AuthContext)

  const email = useInput('')
  const password = useInput('')


  const handleSubmit = () => {
    try {
      request(urlApi + 'api/signin', 'POST', { email: email.value, password: password.value })
        .then((res) => {
          if (res.status === 200) {
            setAuth(true)
            localStorage.setItem("token", res.values.token)
            setToken(res.values.token)
            setUserId(res.values.id)
          }
        })
    } catch (e) {
      throw e
    }
  }

  if (loading) {
    return <div className="fc">
      <h1>Loading...</h1>
    </div>
  }

  return (
    <div className="fc">
      <h3>Sign in</h3>
      <input type="text" {...email} placeholder="email" />
      <input type="password" {...password} placeholder="password" />
      <button onClick={handleSubmit}>send</button>
      <Link to="/signup"><h1>SingUp</h1></Link>
    </div>
  )
}