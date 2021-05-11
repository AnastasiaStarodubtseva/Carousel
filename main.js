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
    default:
      return model;
  }
}

var store = Redux.createStore(reducer, {
  images: [],
  currentIndex: 0,
  xDown: null
})

function handleTouchStart(event) {
  const firstTouch = event.touches[0];
  store.dispatch({type: 'SET-TOUCH-DOWN', x: firstTouch.clientX})
}

function handleTouchMove(event) {
  if (!store.getState().xDown) {
    return;
  }
  var xUp = event.touches[0].clientX;
  var xDiff = store.getState().xDown - xUp;

  if (xDiff > 0) {
    store.dispatch({type: 'NEXT-IMAGE'})
  } else {
    store.dispatch({type: 'PREVIOUS-IMAGE'})
  }
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
                onTouchMove: handleTouchMove, onTouchStart: handleTouchStart }, null),
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
          e('button', {className: 'indicator', onClick: function(event) {
            store.dispatch({type: 'INDICATOR'})
          }}, [
            e('i', {className: 'fas fa-circle'}, null)
          ]),
          e('button', {className: 'indicator', onClick: function(event) {
            store.dispatch({type: 'INDICATOR'})
          }}, [
            e('i', {className: 'fas fa-circle'}, null)
          ]),
          e('button', {className: 'indicator', onClick: function(event) {
            store.dispatch({type: 'INDICATOR'})
          }}, [
            e('i', {className: 'fas fa-circle'}, null)
          ])
        ]),
      ]),
    ]),
    document.getElementById('root')
  )
}

data();

store.subscribe(function() { render(); });
render();