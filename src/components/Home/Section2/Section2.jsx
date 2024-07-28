import styles from './Section2.module.css'
import Button from '../HomeButton/Button.jsx'

function Section2(){
    return(
        <>
        <div className={styles.section2}>
            <div className={styles.left}>
                <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
            </div>
            <div className={styles.right}>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                <Button text={"Get in Touch"} BackGroundColor={"rgb(79,70,229)"} color={"white"}/>
            </div>
        </div>
        </>
    );
}
export default Section2;