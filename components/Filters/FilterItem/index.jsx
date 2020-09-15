import RadioButton from '../../UI/RadioButton'
import Context from '../../../context'
import { useContext } from 'react'
import styles from './filter-item.module.css'

const FilterItem = ({ name, item }) => {
  const { setFilter, filters } = useContext(Context)
  return (
    <li className={styles.filter_item}>
      <RadioButton checked={filters[name] == item} onChange={setFilter} name={name} id={`${name}_${item}`} label={item} />
    </li>
  )
}

export default FilterItem