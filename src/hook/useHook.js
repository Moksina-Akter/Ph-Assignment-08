
/*
import axios from 'axios'
import { useEffect, useState } from 'react'


const useApp = () => {
    const [app, setApp] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    
  useEffect(() => {
    setLoading(true)
    axios('../data.json')
      .then(data => setApp(data.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])
  
  return { app, loading, error }
}

export default useApp
*/


import axios from 'axios'
import { useEffect, useState } from 'react'

const useApp = () => {
  const [app, setApp] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await axios('../data.json')
        setApp(res.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    // cleanup করলে আবার লোডিং true হবে, যাতে অন্য route গেলে লোডিং দেখা যায়
    return () => setLoading(true)
  }, [])

  return { app, loading, error }
}

export default useApp
