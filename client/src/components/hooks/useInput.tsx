import { useState } from "react";

export default function useInput(initValue: string | number) {
    const [value, setValue] = useState(initValue)

    const onChange = (e: any) => {
        setValue(e.target.value)
    }

    return ({
        value, onChange
    })
}