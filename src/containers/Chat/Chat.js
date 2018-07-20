import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Paper, IconButton, CircularProgress } from '@material-ui/core';
import { Message, Send } from '@material-ui/icons';

import MessageItem from '../../components/MessageItem/MessageItem';
import Input from '../../components/form/Input';
import * as actions from '../../store/actions/index';
import './style.css';

class Chat extends Component {
  componentDidMount = () => {
    const { onFetchChatRoom } = this.props;
    onFetchChatRoom();
  };

  render() {
    const { chatRoom, chatLoading, userId } = this.props;

    if (chatLoading) {
      return (
        <div
          style={{
            margin: '100px auto',
            textAlign: 'center',
          }}>
          <CircularProgress size={50} />
        </div>
      );
    }

    return (
      <div className="chatContaier">
        <Paper
          style={{
            width: '90%',
            minHeight: '300px',
            marginBottom: '25px',
            overflowY: 'scroll',
          }}>
          {chatRoom.messages
            ? chatRoom.messages.map(message => (
                <MessageItem
                  key={message.id}
                  ownMessage={message.authorId === userId}
                  message={message}
                />
              ))
            : ''}
        </Paper>
        <form
          style={{
            width: '90%',
            marginBottom: '15px',
            position: 'relative',
          }}>
          <Field
            name="message"
            component={Input}
            label="Enter message"
            Icon={Message}
          />
          <IconButton
            style={{ position: 'absolute', top: '0', right: '0' }}
            type="submit"
            variant="fab"
            color="secondary"
            aria-label="Send">
            <Send />
          </IconButton>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chatLoading: state.chat.loading,
  chatRoom: state.chat.chatRoom,
  userId: state.auth.userId,
});

const mapDispatchToProps = dispatch => ({
  onFetchChatRoom: () => dispatch(actions.fetchChatRoom()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(reduxForm({ form: 'chatForm' })(Chat));
