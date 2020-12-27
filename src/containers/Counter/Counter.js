import React, { Component } from "react";
import { connect } from  'react-redux';

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionCreater from "../../store/actions/index";
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
        <br/>
        <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Results</button>
        <ul>
          {this.props.storedResults.map(strResult => {
              return(
              <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>)
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr:state.ctr.counter,
    storedResults:state.res.results
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter : () => dispatch(actionCreater.increment()),
    onDecrementCounter : () => dispatch(actionCreater.decrement()),
    onAdd5Counter : () => dispatch(actionCreater.add5(5)),
    onSubtract5Counter : () => dispatch(actionCreater.subtract5(5)),
    onStoreResult: (result) => dispatch(actionCreater.store_result(result)),
    onDeleteResult: (id) => dispatch(actionCreater.delete_result(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
