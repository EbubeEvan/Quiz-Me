import { useState, useEffect } from "react"

const useCountDown = (initialTime : number, callback: () => void) => {
    const [time, setTimer] = useState(initialTime)

    useEffect(() => {
      
        const customInterval = setInterval(() => {
            if (time > 0) {
                setTimer((prev) => prev - 1000)
            }
        }, 1000)

        if (time === 0) callback()

        return () => clearInterval(customInterval)
    }, [time])
  
    return time
}

export default useCountDown