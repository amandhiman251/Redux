import React, { Component } from "react";
import { connect } from  'react-redux';

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actions from "../../store/actions";
class Counter extends Component {
 

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={this.props.onAdd5Counter}
        />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtract5Counter}
        />
        <button onClick={this.props.onStoreResult}>Store Results</button>
        <ul>
          {this.props.storedResults.map(strResult => {
              return(<li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>)
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr:state.counter,
    storedResults:state.results
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter : () => dispatch({type: actions.INCREMENT}),
    onDecrementCounter : () => dispatch({type:actions.DECREMENT}),
    onAdd5Counter : () => dispatch({type:actions.ADD5, val: 5}),
    onSubtract5Counter : () => dispatch({type:actions.SUBTRACT5, val: 5}),
    onStoreResult: () => dispatch({type:actions.STORE_RESULT}),
    onDeleteResult: (id) => dispatch({type:actions.DELETE_RESULT, resultElId: id})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
