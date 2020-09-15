import Missions from '../Missions'
import styles from './space-launch-item.module.css'

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

          <p className={styles.card_item}>Launch Year: <span className={styles.card_item_value}>{launch_year}</span></p>
          <p className={styles.card_item}>Successful Launch: <span className={styles.card_item_value}>{launch_success && launch_success.toString()}</span></p>
          <p className={styles.card_item}>Successful Landing:</p>
        </div>
      </div>
    </div>
  )
}

export default SpaceLaunchItem