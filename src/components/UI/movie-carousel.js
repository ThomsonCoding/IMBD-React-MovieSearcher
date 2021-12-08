import classes from './movie-carousel.module.css';

const MovieCarousel = (props) => {
    return <section className={classes.movie__carousel}>{props.children}</section>;
}

export default MovieCarousel;