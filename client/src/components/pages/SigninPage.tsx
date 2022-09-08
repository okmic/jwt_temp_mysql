import { urlApi } from "../../config"
import { useHttp } from "../hooks/http.hook"
import useInput from "../hooks/useInput"

export default function SigninPage() {

    const { loading, request } = useHttp()
  
    const email = useInput('')
    const password = useInput('')
  
    const handleSubmit = () => {
      try {
        //@ts-ignore
        request(urlApi + 'api/signin', 'POST', { email: email.value, password: password.value })
          .then((res) => console.log(res))
      } catch (e) {
        throw e
      }
    }
  
    return (
      <div className="wrapper__signin">
        <input type="text" {...email} />
        <input type="password" {...password} />
        {!loading
          ? <button onClick={handleSubmit}>send</button>
          : <h3>Sending</h3>
        }
      </div>
    )
  }