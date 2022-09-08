import {useCallback, useState, useContext} from "react"
import { AuthContext } from "../context/authContext"

export const useHttp = () => {

    const [loading, setLoading] = useState(false)
    const {token} = useContext(AuthContext)
    
    const request = useCallback(async (url: string, method = 'GET', body: any = null, headers: any = {Authorization: token}) => {
    setLoading(true)
        try {
            if(body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const response = await fetch(url, {method, body, headers})
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'error')
            }
            setLoading(false)        
            return data
        } catch (e) {
            setLoading(false)            
            throw e
        }}, [])
    return { request, loading }
}