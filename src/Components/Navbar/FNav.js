import React, { Fragment } from 'react'

function FNav() {
  return (
    <Fragment>
        <div className="ui divider" style={{ margin: 0 }} />
        <div className="ui text menu" style={{ marginTop: 0, marginLeft: 15 }}>
          <div className="item active">
            Closest
          </div>
          <div className="item active">
            Most Comments
          </div>
          <div className="item active">
            Most Popular
          </div>
          <div className="item active right" style={{ marginRight: 15 }}>
            Most Popular
          </div>
        </div>
    </Fragment>
  )
}

export default FNav