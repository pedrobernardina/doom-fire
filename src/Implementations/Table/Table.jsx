/* eslint react/no-array-index-key: 0 */
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import ColourPallete from '../../assets/ColourPallete';
import Fire from '../../assets/Fire';
import './Table.css';

class Table extends Component {
  constructor() {
    super();

    this.rows = 40;
    this.columns = 40;
    this.Fire = Fire(this.rows, this.columns);

    const fireState = this.Fire.createState();
    this.state = { fireState };
  }

  componentDidMount() {
    this.createFireSource();
    this.interval = setInterval(this.propagateFire.bind(this), 50);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  createFireSource() {
    const fireState = this.Fire.createFireSource();
    this.setState(() => ({ fireState }));
  }

  propagateFire() {
    const fireState = Fire.propagateFire();
    this.setState(() => ({ fireState }));
  }

  render() {
    const { debug } = this.props;
    const { fireState } = this.state;

    return (
      <div className={classNames('table-wrap', { border: debug })}>
        <table className='table'>
          <tbody>
            {Array(this.rows).fill(0).map((row, i) => (
              <tr key={`row-${i}`}>
                {Array(this.columns).fill(0).map((column, j) => {
                  const cellIndex = (i * this.columns) + j;
                  const intensity = fireState[cellIndex];
                  const rgbColour = ColourPallete[intensity];
                  const backgroundColor = debug ? 'transparent' : `rgb(${rgbColour.r}, ${rgbColour.g}, ${rgbColour.b})`;

                  return (
                    <td
                      className={classNames('cell', { border: debug })}
                      key={`column-${i}-${j}`}
                      style={{
                        backgroundColor,
                        height: debug ? 50 : 2,
                        width: debug ? 50 : 2,
                      }}
                    >
                      {debug && (<div className='cell-index'>{cellIndex}</div>)}
                      {debug && intensity}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  debug: PropTypes.bool,
};

Table.defaultProps = {
  debug: false,
};

export default Table;
