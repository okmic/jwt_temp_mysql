import { useEffect, useState } from "react";

export default function useInput(initValue: any, type: "email" | "simple") {

    const [value, setValue] = useState(initValue)
    const [err, setErr] = useState<null | string>(initValue)
    const [checkErr, setCheckErr] = useState(false)


    const onChange = (e: any) => {
        setValue(e.target.value)
    }

    const validate = () => {
        switch(type) {
            case "email": 
                if(!/\S+@\S+\.\S+/.test(value)) {
                    setErr('Email is invalid')
                    setCheckErr(true)
                } else setErr(null)
                break
    
            case "simple": 
                if(value.length <= 3) {
                    setErr('More than 3 characters required')
                    setCheckErr(true)
                } else setErr(null)
        }
    }

    useEffect(() => {
        if(!checkErr) return
        validate()
    })


    return ({
        params: {value, onChange, onBlur: () => validate()},
        error: {err, setErr}
    })
}