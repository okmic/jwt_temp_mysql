import {useNavigate} from 'react-router-dom'
import { urlApi } from "../../config"
import { useHttp } from "../hooks/http.hook"
import useInput from "../hooks/useInput"

export default function SignupPage() {

    const { loading, request } = useHttp()
  
    const name = useInput('')
    const email = useInput('')
    const password = useInput('')
    const navigate = useNavigate()

    const handleSubmit = () => {
      try {
        request(urlApi + 'api/signup', 'POST', {name: name.value, email: email.value, password: password.value })
          .then((res) => {
            if(res.status === 200) {
              alert('Registration successfully completed')
              navigate('/')
            }
          })
      } catch (e) {
        throw e
      }
    }

    if(loading) {
      return <div className="fc">
        <h1>Loading...</h1>
      </div>
    }
  
    return (
      <div className="fc">
        <h3>Sign up</h3>
        <input type="text" {...name} placeholder="name" />
        <input type="text" {...email} placeholder="email" />
        <input type="password" {...password} placeholder="password" />
        <button onClick={handleSubmit}>send</button>
      </div>
    )
  }