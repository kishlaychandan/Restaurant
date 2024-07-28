import style from './Card.module.css';

function Card(props){
    return(
        <>
        <div className={style.card}>
            <p className={style.comment}>{props.comment}</p>
            <div className={style.profile}>
                <img src={props.img} alt="" />
                <div className={style.nameDesignation}>
                    <h4>{props.name}</h4>
                    <p>{props.designation}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Card;