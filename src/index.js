/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import diego from './assets/diego.png';
import leo from './assets/leo.jpeg';
import wellios from './assets/wellios.jpeg';
import Post from './Post';
import Header from './Header';
import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        avatar: diego,
        name: 'Diego Fernandes',
        time: 'há 3 min',
        post:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non faucibus mauris, quis tempus ante. Mauris rutrum consectetur lorem, sit amet feugiat eros congue eu. Vestibulum nec velit eu purus accumsan blandit. Suspendisse potenti. Nam fermentum, sem et imperdiet gravida, purus urna sagittis nisl, ut pretium dolor lectus a risus. Aenean ac orci felis.',
      },
      {
        id: 2,
        avatar: leo,
        name: 'Léo Ulian',
        time: 'há 10 min',
        post:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non faucibus mauris, quis tempus ante. Mauris rutrum consectetur lorem, sit amet feugiat eros congue eu. Vestibulum nec velit eu purus accumsan blandit. Suspendisse potenti.',
      },
      {
        id: 3,
        avatar: wellios,
        name: 'Wellington Leite',
        time: 'há 20 min',
        post:
          'Mauris rutrum consectetur lorem, sit amet feugiat eros congue eu. Vestibulum nec velit eu purus accumsan blandit. Suspendisse potenti. Nam fermentum, sem et imperdiet gravida, purus urna sagittis nisl, ut pretium dolor lectus a risus. Aenean ac orci felis.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <div className="content">
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
