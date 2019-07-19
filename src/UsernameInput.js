import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { updateUsername, updateUserData } from './redux/user';

class UsernameInput extends React.Component {
  state = {
    username: '',
    userData: this.props.user.userData || {},
    dataObject : ''
  };

  componentDidMount(){
    let data = this.state.userData;
    this.setState({
        dataObject : data
    });
    
  }

  handleChange = username => {
    this.setState({ username });
  };

  handleSubmit = () => {
    this.props.dispatch(updateUsername(this.state.username));
  };

  handleSubmitData = () => {
      let data = { id:35, title: 'bj'};
      this.setState({ userData : data });
      console.log(data)
      this.props.dispatch(updateUserData(this.state.userData));
      alert('ok data')
  }

  render() {

    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          onChangeText={this.handleChange}
          value={this.state.username}
        />


        <Button title="Save" onPress={this.handleSubmit} />

        <TextInput
            placeholder="data"
        />

        <Text> Array:
            {this.state.dataObject.title}
        </Text>

        <Button title="Save" onPress={this.handleSubmitData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(UsernameInput);