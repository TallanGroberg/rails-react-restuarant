import React from 'react';
import { Button, Header, Icon, } from 'semantic-ui-react'

const Menu = ({ id, lunch, dinner, updateMenu, deleteMenu }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>

        <div className="center">
        <Header as="h2" style={{ marginLeft: "15px", }}> lunch items: { lunch }, Dinner items: { dinner }.</Header>
        </div>
      </div>
      <Button
        icon
        color="red"
        size="tiny"
        onClick={() => deleteMenu(id)}
        style={{ marginLeft: '15px', }}
        >
        <Icon name="trash" />
      </Button>
      
      <Button
        icon
        color="green"
        size="tiny"
        onClick={() => updateMenu(id)}
        style={{ marginLeft: '15px', }}
        >
      </Button>
    </div>
)

const styles = {
  flex: {
    display: "flex",
    alignItems: "center",
  }
}

export default Menu;
