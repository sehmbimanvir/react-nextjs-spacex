import FilterList from './FilterList'
import styles from './filters.module.css'

const Filters = () => {

  const filters = {
    years: {
      name: 'launch_year',
      title: 'Launch Year',
      items: [
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020
      ]
    },
    launch: {
      name: 'launch_success',
      title: 'Successful Launch',
      items: [
        'true',
        'false'
      ]
    },
    landing: {
      name: 'land_success',
      title: 'Successful Landing',
      items: [
        'true',
        'false'
      ]
    }
  }

  const { years, launch, landing } = filters

  return (
    <div className={styles.filters}>
      <h3 className={styles.filters_heading}>Filters</h3>
      <FilterList {...years} />
      <FilterList {...launch} />
      <FilterList {...landing} />
    </div>
  )
}

export default Filters