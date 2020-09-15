import Missions from '../Missions'
import styles from './space-launch-item.module.css'

const Launch = ({ value }) => {
  return value ? <label className={`${styles.card_item_launch} ${styles.card_item_launch_success}`}>Yes</label> : <label className={`${styles.card_item_launch} ${styles.card_item_launch_failed}`}>No</label>
}

const SpaceLaunchItem = ({ thumbnail, flight_number, mission_name, launch_year, launch_success, missions }) => {
  return (
    <div className="space-box">
      <div className={styles.card}>
        <div className="card-image-top">
          <img className={styles.card_image} src={thumbnail || 'https://via.placeholder.com/150x150?text=No%20Image%20Available'} />
        </div>
        <div className="card-body">
          <h4 className={styles.card_title}>{mission_name} #{flight_number}</h4>
          <p className={styles.card_item}><strong>Mission Ids:</strong></p>

          {missions.length > 0 && <Missions items={missions} />}

          <p className={styles.card_item}>Launch Year: <label className={styles.card_item_value}>{launch_year}</label></p>

          <p className={styles.card_item}>Successful Launch: <Launch value={launch_success} /></p>
          <p className={styles.card_item}>Successful Landing:</p>
        </div>
      </div>
    </div>
  )
}

export default SpaceLaunchItem