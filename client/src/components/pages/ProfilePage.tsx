import {useContext, useEffect, useState} from 'react'
import { urlApi } from '../../config'
import { AuthContext } from '../context/authContext'
import { useHttp } from '../hooks/http.hook'

type UserType = {
    id: number
    name: string
    email: string
}

export default function ProfilePage () {

    const {request} = useHttp()
    const {setAuth, setToken} = useContext(AuthContext)
    const [user, setUser] = useState<UserType[] | null>(null)

    useEffect(() => {
        request(urlApi + 'api/profile', 'POST', {})
        .then((res) => {
          if(res.status === 200) {
/*               console.log(res) */
          }
        })
      }, [])

      const handleSubmit = () => {
        localStorage.removeItem("token")
        setAuth(false)
        setToken(null)
      }

    return (
        <div className='fc'>
            {user && user.map((item: UserType) => <div className='fc'>
                    <h3>{item.id}</h3>
                    <h3>{item.name}</h3>
                    <h3>{item.email}</h3>
            </div>)}

        <button onClick={handleSubmit}><h3>logout</h3></button>
        </div>
    )
}