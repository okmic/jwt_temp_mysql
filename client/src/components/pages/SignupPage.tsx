import { Link, useNavigate } from 'react-router-dom'
import { urlApi } from "../../config"
import { useHttp } from "../hooks/http.hook"
import useInput from "../hooks/useInput"

export default function SignupPage() {

  const { loading, request } = useHttp()

  const name = useInput('', 'simple')
  const email = useInput('', 'email')
  const password = useInput('', 'simple')
  const navigate = useNavigate()

  const handleSubmit = () => {
    try {
      if (name.error.err || email.error.err || password.error.err) return

      request(urlApi + 'api/signup', 'POST', { name: name.params.value, email: email.params.value, password: password.params.value })
        .then((res) => {
          if (res.status === 200) {
            alert('Registration successfully completed')
            navigate('/')
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
      <h3>Sign up</h3>
      {name.error.err && <label htmlFor="name" className='err'>{name.error.err}</label>}
      <input id='name' type="text" {...name.params} placeholder="name" />
      {email.error.err && <label htmlFor="email" className='err'>{email.error.err}</label>}
      <input id='email' type="text" {...email.params} placeholder="email" />
      {password.error.err && <label htmlFor="password" className='err'>{password.error.err}</label>}
      <input id='password' type="password" {...password.params} placeholder="password" />
      <button
        disabled={email.params.value.length > 1 && email.params.value.length > 1 && password.params.value.length > 1 ? false : true}
        onClick={handleSubmit}>send</button>
      <Link to="/"><h1>SingIn</h1></Link>
    </div>
  )
}