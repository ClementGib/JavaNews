import { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Text, View } from './Themed';


class ListPost extends Component {
    constructor (props) {
      super(props)
      this.state = {
        posts: [],
        refresh: false
      }
    }
  
    init = async () => {
      try {
        await this.props.loadInitPosts()
        await this.setState({
          posts: this.props.posts
        })
      } catch (err) {
        console.log(err)
      }
    }

    render () {
  return (
    <View style={styles.container}> 
        <FlatList
        //   contentContainerStyle={styles.element}
          data={this.props.posts}
          extraData={this.props.posts}
          renderItem={({ item }) => <Post post={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
    </View>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
  mainContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  mainText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  }
});
