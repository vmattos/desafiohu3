import React, { PropTypes } from 'react';

import style from './OptionOrigins.css';

function OptionOrigins() {
  const option = this.props.option;

  return (
    <div className={style.Section}>
      <h2 className={style.Title}>Saídas:</h2>
      {
        option.from.map((origin) => (
          <p className={style.Origin}>{origin}</p>
        ))
      }
    </div>
  );
}

OptionOrigins.propTypes = {
  option: PropTypes.object.isRequired,
};

export default OptionOrigins;
