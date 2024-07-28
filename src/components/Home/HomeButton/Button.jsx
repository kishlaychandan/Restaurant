import styles from './Button.module.css'

function Button(props) {
    return (
            <button className={styles.btn} style={{backgroundColor:props.BackGroundColor,color:props.color}}>{props.text}</button>
        )
}

export default Button;