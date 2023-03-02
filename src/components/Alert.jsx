import React, { useEffect } from 'react'


const Alert = ({color, msg,removeAlert,tasks}) => {
    useEffect(()=>{
        const timeout = setTimeout(( ) =>{
          removeAlert()
        },1000 )
        return () => clearTimeout(timeout)
      },[tasks])
  return <div className={`text-center text-lg bg-${color}-500`}> {msg}</div>
}

export default Alert
