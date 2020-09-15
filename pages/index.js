import { useEffect, useRef, useState } from 'react'
import Filters from '../components/Filters'
import SpaceLaunch from '../components/SpaceLaunch'
import { SpaceService } from '../services/SpaceService'
import Context from '../context'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export const getServerSideProps = async (context) => {
  let items = []
  try {
    items = await SpaceService.get(context.query)
  } catch (err) { }

  return {
    props: {
      items,
      params: context.query,
      init: 1
    }
  }
}

const Home = ({ items, params, init }) => {
  const [spaceItems, setItems] = useState([])
  const [filters, setFilters] = useState({
    launch_year: '',
    launch_success: '',
    land_success: ''
  })
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const initialRender = useRef(init)

  useEffect(() => {
    setFilters(params)
    setItems(items)
  }, [])

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = 0
      return
    }
    setLoading(true)
    SpaceService.get(filters).then(response => {
      setItems(response)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    })

  }, [router.query])

  const contextValue = {
    setFilter: e => {
      let { name, checked, value } = e.target
      value = checked ? value : ''
      const prevState = { ...filters }
      prevState[name] = value
      setFilters(prevState)
      router.push({
        pathname: '/',
        search: new URLSearchParams(prevState)
      })
    },
    filters
  }

  return (
    <Context.Provider value={contextValue}>
      <div className="row">
        <h1 className={styles.site_title}>SpaceX Launch Programs</h1>
      </div>

      <div className="row">
        <div className="sidebar">
          <Filters />
        </div>

        <div className="space-ships">
          <SpaceLaunch loading={loading} items={spaceItems} />
        </div>
      </div>

      <footer>
        <p className="text-center"><strong>Developed by: </strong> Manvir Singh</p>
      </footer>

    </Context.Provider>
  )
}

export default Home
