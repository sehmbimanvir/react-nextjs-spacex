import { useEffect, useState } from 'react'

const Loader = ({ text }) => {
  const [loading, setLoading] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => updateLoader(), 200)

    return () => {
      clearInterval(intervalId)
    }
  })

  const updateLoader = () => {
    if (loading === 3) {
      setLoading(0)
      return;
    }
    setLoading(loading + 1)
  }

  const dots = Array(loading + 1).join('.')

  return <h1 className="text-center">{text}{dots}</h1>
}

export default Loader