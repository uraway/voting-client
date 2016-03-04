import React, { Component } from 'react';
import { connect } from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';
import reactMixin from 'react-mixin';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as actionCreators from '../action_creators';

class Voting extends Component {
  render() {
    return (
      <div>
        {this.props.winner ?
          <Winner ref="winner" winner={this.props.winner} /> :
          <Vote {...this.props} />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner'),
  };
}

reactMixin(Voting.prototype, PureRenderMixin);
export default Voting;
export const VotingContainer = connect(
  mapStateToProps,
  actionCreators
)(Voting);
