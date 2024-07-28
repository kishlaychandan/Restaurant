import styles from './Section1.module.css';
import Button from '../HomeButton/Button.jsx';

function Section1(){
    return(
        <>
            <div className={styles.section1}>
                <div className={styles.content}>
                    <h1>Let us find your<br/> <span>Forever food </span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                    <div className={styles.buttons}>
                        <Button text={"Search Now"} BackGroundColor={"rgb(250, 85, 113)"} color={"white"}/>
                        <Button text={"Know More"} BackGroundColor={"white"} color={"rgb(250, 85, 113)"}/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Section1;