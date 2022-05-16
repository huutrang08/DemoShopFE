import React from 'react'
import { Tab } from 'semantic-ui-react'
import FList from './ListProducts/FList'

const panes = [
  { menuItem: 'Furniture', render: () => <Tab.Pane><FList/></Tab.Pane> },
  { menuItem: 'Electronic', render: () => <Tab.Pane><FList/></Tab.Pane> },
  { menuItem: 'Clothes', render: () => <Tab.Pane><FList/></Tab.Pane> },
  { menuItem: 'Books', render: () => <Tab.Pane><FList/></Tab.Pane> }
]
const FTab = () => <Tab panes={panes} />

export default FTab