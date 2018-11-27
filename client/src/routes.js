import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import { AuthForm, Portfolio, Transactions } from './components';
import { loadInitialData } from './store';

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>
        <Switch>
          {!isLoggedIn ? (
            <Route path="/" component={AuthForm} />
          ) : (
            <Switch>
              <Route exact path="/transactions" component={Transactions} />
              <Route path="/" component={Portfolio} />
            </Switch>
          )}
        </Switch>
      </div>
    );
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = dispatch => ({
  loadInitialData: () => dispatch(loadInitialData()),
});

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Routes)
);
