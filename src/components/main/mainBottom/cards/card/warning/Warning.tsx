import { Component } from 'react';
import s from './Warning.module.css';

class Warning extends Component {
  render() {
    return (
      <div className={s.warning} title="warning">SORRY, CART IS FULL!</div>
    )
  }
}

export { Warning };