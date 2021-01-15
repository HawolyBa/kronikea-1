import SwipeableViews from 'react-swipeable-views';

const styles = {
  root: {
    padding: '0 60% 0 0',
  },
  slideContainer: {
    paddingRight: 10,
    
  },
  slide: {
    padding: '0 10px',
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

const Cards = () => {
  return (
    <SwipeableViews style={styles.root} slideStyle={styles.slideContainer} enableMouseEvents={true}>
      <div className="card story__card" style={Object.assign({}, styles.slide, styles.slide1)}></div>
      <div className="card story__card" style={Object.assign({}, styles.slide, styles.slide2)}></div>
      <div className="card story__card" style={Object.assign({}, styles.slide, styles.slide3)}></div>
    </SwipeableViews>
  )
}

export default Cards
