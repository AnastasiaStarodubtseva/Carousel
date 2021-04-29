const e = React.createElement;

function render() {
  ReactDOM.render (
    e('div', {className: 'carousel'}, [
      e('p', {className: 'header'}, 'gallery'),
      e('div', {className: 'carousel-items'}, [
        e('img', {className: 'first-item', src: './img/img (22).jpeg'}, null),
        // e('img', {className: 'second-item', src: './img/img (15).jpeg'}, null),
        // e('img', {className: 'third-item', src: './img/img (23).jpeg'}, null)
      ]),
      e('button', {className: 'left-side'}, [
        e('i', {className: 'fas fa-chevron-left'}, null)
      ]),
      e('button', {className: 'right-side'}, [
        e('i', {className: 'fas fa-chevron-right'}, null)
      ]),
      e('p', {className: 'name-of-the-image'}, 'First slide'),
    ]),
    document.getElementById('root')
  )

  document.querySelector('.carousel');
}

render();