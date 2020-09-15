import styles from './missions.module.css'

const Missions = ({ items }) => {
  return (
    <ul className={styles.mission_list}>
      {items.map(item => <li className={styles.mission_item} key={item}>{item}</li>)}
    </ul>
  )
}

export default Missions