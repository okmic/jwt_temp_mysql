import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { urlApi } from "../../config"
import { AuthContext } from '../context/authContext'
import { useHttp } from "../hooks/http.hook"
import useInput from "../hooks/useInput"

export default function SigninPage() {

  const { loading, request } = useHttp()
  const { setAuth, setToken, setUserId } = useContext(AuthContext)

  const email = useInput('', 'email')
  const password = useInput('', 'simple')
  const [serverError, setServerError] = useState<null | string>(null)


  const handleSubmit = () => {
    try {
      if (email.error.err || password.error.err) return

      request(urlApi + 'api/signin', 'POST', { email: email.params.value, password: password.params.value })
        .then((res) => {
          if (res.status === 200) {
            setAuth(true)
            localStorage.setItem("token", res.values.token)
            setToken(res.values.token)
            setUserId(res.values.id)
            return
          } else return setServerError(res)
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
      {serverError && <h4 className='err'>{serverError}</h4>}
      {email.error.err && <label htmlFor="email" className='err'>{email.error.err}</label>}
      <input id="email" type="text" {...email.params} placeholder="email" />
      {password.error.err && <label htmlFor="password" className='err'>{password.error.err}</label>}
      <input id='password' type="password" {...password.params} placeholder="password" />
      <button
        disabled={email.params.value.length > 1 && password.params.value.length > 1 ? false : true}
        onClick={handleSubmit}>send</button>
      <Link to="/signup"><h1>SingUp</h1></Link>
    </div>
  )
}