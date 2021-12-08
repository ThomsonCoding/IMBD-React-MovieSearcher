import classes from './movie-card.module.css';

const MovieCard = (props) => {
    return (
    <section className={classes.movie__card} 
        style={{ backgroundImage: `url(${props.backgroundImg})`}}>
        <h5>{props.movieTitle}</h5>
    </section>
    );
};

export default MovieCard;