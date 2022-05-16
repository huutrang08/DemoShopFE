import React from 'react'
import { Item } from 'semantic-ui-react'
function FList() {
  return (
    <Item.Group>
    <Item>
      <Item.Image size='tiny' src='/images/wireframe/image.png' />
      <Item.Content>
        <Item.Header>Arrowhead Valley Camp</Item.Header>
        <Item.Meta content='$1000'/>
        <Item.Description>Description</Item.Description>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image size='tiny' src='/images/wireframe/image.png' />
      <Item.Content>
        <Item.Header>Buck's Homebrew Stayaway</Item.Header>
        <Item.Meta content='$1000'/>
        <Item.Description>Description</Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
  )
}

export default FList