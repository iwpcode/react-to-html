'use strict';

const headerElement = React.createElement;

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navList: [
        {
          id: 0,
          label: 'Home',
          url: 'index.html',
        },
        {
          id: 1,
          label: 'About',
          url: '#',
        },
        {
          id: 2,
          label: 'Contact',
          url: '#',
        },
      ]
    }
  }

  render() {
    const list = []
    this.state.navList.forEach((v, i) => {
      list.push(e(
        'a',
        {href: v.url},
        v.label
      ))
    });
    return headerElement(
      'div',
      {className: "header-nav"},
      list
    )
  }
}

const headerNavContainer = document.querySelector('#header-nav')
const headerNavRoot = ReactDOM.createRoot(headerNavContainer)
headerNavRoot.render(headerElement(HeaderNav))