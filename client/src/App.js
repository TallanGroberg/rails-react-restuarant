import React from 'react';
import { Header, Container, } from 'semantic-ui-react'
import MenuForm from './components/MenuForm'
import MenuList from './components/MenuList'
import axios from 'axios'
import Navbar from './routes/Navbar'
import Home from './routes/Home'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
  state = { menus: [], };

  componentDidMount() {
    axios.get("/api/menus")
      .then( res => {
        this.setState({ menus: res.data, });
      })
      .catch( err => {

        console.log('get request error');
      })

  };

  addMenu = (menus) => {
    // TODO make an api call to rails server to add menu item
    //TODO update state
    axios.post('/api/menus', { menus })
      .then( res => {
        const { menus, } = this.state;
        this.setState({ menus: [...menus, res.data], });
      })

  }

  updateMenu = (id) => {
    //TODO make api call to update menu
    axios.put(`/api/menus/${id}`)
    .then( res => {
      const menus = this.state.menus.map( f => {
        if (f.id === id)
          return res.data;
        return f;
      })
      this.setState({ menus, })
    })
  }

  deleteMenu = (id) => {
    // TODO make api call to delete menu item
    //TODO remove it from state

    axios.delete(`/api/menus/${id}`)
      .then( res => {
        const { menus, } = this.state;
        this.setState({ menus: menus.filter(f => f.id !== id), })
      })
  }






  render() {
    return (
  <>
    <Navbar />
    <Container style={{ marginTop: "25px"}}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
      <Header as="h1">Welcome to the restaurant</Header>
      <MenuForm add={this.addMenu} />
      <br />
      <MenuList
        menus={this.state.menus}
        updateMenu={this.updateMenu}
        deleteMenu={this.deleteMenu}
        />
    </Container>
    </>
    );
  }
}

export default App;
