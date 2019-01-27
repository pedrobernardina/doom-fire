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

    this.rows = 50;
    this.columns = 50;

    const fireState = Fire.createState(this.rows, this.columns);
    this.state = { fireState };
  }

  componentDidMount() {
    this.createFireSource();
    setInterval(this.propagateFire.bind(this), 50);
  }

  createFireSource() {
    const { fireState } = this.state;
    const newFireState = Fire.createFireSource(fireState);
    this.setState(() => ({ fireState: newFireState }));
  }

  propagateFire() {
    const { fireState } = this.state;
    const newFireState = Fire.propagateFire(fireState);
    this.setState(() => ({ fireState: newFireState }));
  }

  render() {
    const { debug } = this.props;
    const { fireState } = this.state;

    return (
      <div className={classNames('table-wrap', { border: debug })}>
        <table className='table'>
          <tbody>
            {fireState.map((row, i) => (
              <tr key={`row-${i}`}>
                {row.map((d, j) => {
                  const cellIndex = (i * this.columns) + j;
                  const intensity = fireState[i][j];
                  const rgbColour = ColourPallete[intensity];
                  const backgroundColor = `rgb(${rgbColour.r}, ${rgbColour.g}, ${rgbColour.b})`;

                  return (
                    <td
                      className={classNames('cell', { border: debug })}
                      key={`column-${i}-${j}`}
                      style={{ backgroundColor }}
                    >
                      {debug && (<div className='cell-index'>{cellIndex}</div>)}
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
