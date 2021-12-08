import classes from './recent-search-image-card.module.css';

const RecentSearchImageCard = (props) => {
    return (
        <div className={classes.recent_search_mini_image} style={{ backgroundImage: `url(${props.backgroundMiniImg})`}}>

        </div>
    )
}

export default RecentSearchImageCard;