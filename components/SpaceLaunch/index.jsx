import Loader from '../UI/Loader'
import SpaceLaunchItem from './SpaceLaunchItem'

const SpaceLaunch = ({ items, loading }) => {

  if (loading) {
    return <Loader text="Loading" />
  }

  if (!items.length) {
    return <h1 className="text-center">No Items Found</h1>
  }


  return (
    <div className="row">
      {items.map(item => <SpaceLaunchItem key={item.flight_number} {...item} />)}
    </div>
  )
}

export default SpaceLaunch