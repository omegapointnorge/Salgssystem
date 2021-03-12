import React from "react";
import logo from "../../assets/itverketLogo.svg";
import styles from "./Header.module.css";

import { connect } from 'react-redux';
// import countReducer from "src/redux/reducers/count";
// import { getCountState } from "src/redux/selectors";

const Header = ({count, handleIncrementClick}: any) => {
  console.log(count);
  return (
    <div className={styles.header}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <span className={styles.headerHeading} onClick={handleIncrementClick}>ITverket Salgssystem: {count.value}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch: (arg0: { type: string; }) => any) => {
  return {
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
    handleDecrementClick: () => dispatch({type: 'DECREMENT'})
  }
};

const mapStateToProps = (state: any) => {
  return {
    // count: getCountState
    count: state.countReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);



