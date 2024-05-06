imoort React, {useState, useEffect} from "react";

const CheckSystemOnline = () => {
  const [systemOnline, setSystemOnline] = useState(navigator.onLine)
  
    useEffect(() => {
      const handleOnlineStatusChange = () => {
        setSystemOnline(navigator.onLine)
      }
  
      window.addEventListener('online', handleOnlineStatusChange)
      window.addEventListener('offline', handleOnlineStatusChange)
  
      return () => {
        window.removeEventListener('online', handleOnlineStatusChange)
        window.removeEventListener('offline', handleOnlineStatusChange)
      }
    }, [])
  return(
    <div>Your device is {systemOnline ? "Online" : "Offline"}</div>
)}

export default CheckSystemOnline;
