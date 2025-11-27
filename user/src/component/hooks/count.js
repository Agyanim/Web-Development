import { useState } from "react"

const useCount = () =>{
    const [count,setCount]= useState(24)

    const onSubmit = ()=>{
        setCount(count => count+1)
    }

    return {
        count,
        onSubmit,
        setCount
    }
}

export default useCount