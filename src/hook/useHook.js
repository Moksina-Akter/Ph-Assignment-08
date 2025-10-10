


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

    return () => setLoading(true)
  }, [])

  return { app, loading, error }
}

export default useApp
