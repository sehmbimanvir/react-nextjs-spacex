import styles from './filter-list.module.css'
import FilterItem from '../FilterItem'

const FilterList = ({ name, title, items, selected }) => {
  return (
    <div className={styles.filter_list}>
      <div className={styles.filter_title}>{title}</div>

      <ul className={`${styles.filter_items} filter-items`}>
        {items.map(item => <FilterItem selected={item === selected} key={item} name={name} item={item} />)}
      </ul>
    </div>
  )
}

export default FilterList