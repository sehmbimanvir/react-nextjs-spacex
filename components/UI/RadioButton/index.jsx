import classes from './radio-button.module.css'

const RadioButton = ({ id, label, ...props }) => {
  return (
    <div>
      <input className={classes.custom_radio_btn} type="radio" value={label} id={id} {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default RadioButton