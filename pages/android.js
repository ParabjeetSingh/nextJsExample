
import React from "react";
import Head from 'next/head'
import { connect } from 'react-redux';


import { decrementCounter, incrementCounter } from '../redux/actions/counterActions';
function AndroidDeveloper(props) {
  return (
    <div>
      <Head>
        <title>Build Android App development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hello from  Android
      <button onClick={props.incrementCounter}>Increment</button>
      <button onClick={props.decrementCounter}>Decrement</button>
      <h1>{props.counter}</h1>
    </div>
  )
}
const mapStateToProps = state => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};
export default connect(mapStateToProps, mapDispatchToProps)(AndroidDeveloper);