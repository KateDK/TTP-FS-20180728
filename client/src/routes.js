import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import { AuthForm } from './components';

class Routes extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={AuthForm} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(
  connect(
    null,
    null
  )(Routes)
);
