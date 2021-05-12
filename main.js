function reducer(model, action) {
  switch(action.type) {
    case 'SET-DATA':
      model.images = action.payload;
      return model;
    case 'PREVIOUS-IMAGE':
      if (model.currentIndex === 0) {
        model.currentIndex = model.images.length - 1;
      } else {
        model.currentIndex -= 1;
      }
      return model;
    case 'NEXT-IMAGE':
      if (model.currentIndex === model.images.length -1) {
        model.currentIndex = 0;
      } else {
        model.currentIndex +=1;
      }
      return model;
    case 'SET-TOUCH-DOWN':
      model.xDown = action.x;
      return model;
    case 'CASE-TOUCH-UP':
      model.xUp = action.x;
      return model;
    case 'SET-CURRENT-INDEX':
      model.currentIndex = action.index;
      return model;
    default:
      return model;
  }
}

var store = Redux.createStore(reducer, {
  images: [],
  currentIndex: 0,
  xDown: null,
  xUp: null
})

function handleTouchStart(event) {
  const firstTouch = event.touches[0];
  store.dispatch({type: 'SET-TOUCH-DOWN', x: firstTouch.clientX})
}

function handleTouchMove(event) {
  if (!store.getState().xDown) {
    return;
  }
  const inMovement = event.touches[0];
  store.dispatch({type: 'CASE-TOUCH-UP'})
};

function handleTouchEnd(event) {
  var xDiff = store.getState().xDown - store.getState().xUp;
  if (xDiff > 0) {
    store.dispatch({type: 'NEXT-IMAGE'})
  } else {
    store.dispatch({type: 'PREVIOUS-IMAGE'})
  }

  store.dispatch({type: 'CASE-TOUCH-UP', x: null});
}

const e = React.createElement;

function data() {
  fetch('https://api.unsplash.com/photos/?client_id=2-dC3kWGsUrVGGQheT0pIi5M1FbglFHdxh0jyxtCJgc')
    .then(response => response.json())
    .then(json => store.dispatch({type: 'SET-DATA', payload: json}));
}

function render() {
  ReactDOM.render (
    e(ReactRedux.Provider, {store: store}, [
      e('div', {className: 'carousel-items'}, [
        e('p', {className: 'header'}, 'gallery'),
        e('div', {className: 'main'}, [
          e('div', {className: 'img-section'}, [
            e('img', {className: 'carousel__photo', src: store.getState().images[store.getState().currentIndex].urls.small,
                onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd, onTouchMove: handleTouchMove}, null),
            e('button', {className: 'carousel__button--prev', onClick: function(event) {
              store.dispatch({type: 'PREVIOUS-IMAGE'})
            }}, [ e('i', {className: 'fas fa-chevron-left'}, null)], null),
            e('button', {className: 'carousel__button--next', onClick: function(event) {
              store.dispatch({type: 'NEXT-IMAGE'})
            }}, [ e('i', {className: 'fas fa-chevron-right'}, null)]),
          ]),
        ]),
        e('p', {className: 'title'}, store.getState().images[store.getState().currentIndex].alt_description),
        e('div', {className: 'bottoms-flipping'}, [
          store.getState().images.map(function(image, index) {
            return (
              e('button', {className: 'indicator ' + (store.getState().currentIndex === index ? 'active' : ''), onClick: function(event) {
                store.dispatch({type: 'SET-CURRENT-INDEX', index: index })
              }}, [
                e('i', {className: 'fas fa-circle'}, null)
              ])
            )
          })
        ]),
      ]),
    ]),
    document.getElementById('root')
  )
}

data();

store.subscribe(function() { render(); });
render();