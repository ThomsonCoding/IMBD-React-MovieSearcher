import classes from './recent-search.module.css';
import RecentSearchImageCard from './UI/recent-search-image-card';

const RecentSearch = (props) => {
    console.log(props.searchResults.d);

    let content

    if (props.searchResults.d === undefined) {
        content = <p>Please search for a film</p>
    } else {
        content = `${props.searchResults.d.map((movie) => (
            <RecentSearchImageCard 
            backgroundMiniImg={movie.i.imageUrl} 
            />
        ))}`
    }

    return (
        <section className={classes.recent__search}>
            <h5>Search Results... </h5>
            <section className={classes.recent__search__results}> 
            {content}
            </section>
        </section>
    )

}

export default RecentSearch;