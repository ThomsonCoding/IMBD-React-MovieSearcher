import classes from './trending-movies.module.css';

import MovieCard from './UI/movie-card'
import MovieCarousel from './UI/movie-carousel';

const TrendingMovies = () => {
    return (
        <section className={classes.trending__section}>
            <MovieCarousel> 
                <MovieCard backgroundImg={"https://www.denofgeek.com/wp-content/uploads/2019/02/how-to-train-your-dragon-the-hidden-world.jpg?resize=768%2C432"} movieTitle={"How To Train Your Dragon, The Hidden World"} />
                <MovieCard backgroundImg={"https://heroichollywood.com/wp-content/uploads/2019/07/deadpool-1.jpg"} movieTitle={"Deadpool 3"} />
                <MovieCard backgroundImg={"https://guardian.ng/wp-content/uploads/2018/12/Venom-Photo-Venom.jpg"} movieTitle={" "} />
                <MovieCard backgroundImg={"https://i.ytimg.com/vi/2kSjgiV4wG8/maxresdefault.jpg"} movieTitle={"Tomb Raider 5"} />
            </MovieCarousel>
        </section>
    )
};

export default TrendingMovies;