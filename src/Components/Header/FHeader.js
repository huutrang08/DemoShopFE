import React from 'react'

function FHeader() {
  return (
    <div className="ui secondary menu">
          <i className="braille icon left" style={{ marginTop: 10, marginLeft: 10 }} />
          <div className="item right" style={{ width: '50%' }}>
            <div className="ui icon input" style={{ width: '100%' }}>
              <input type="text" style={{ width: '100%' }} placeholder="Search..." />
              <i className="search link icon" />
            </div>
          </div>
          <div className="right menu">
            <div className="ui aa item">
              Country <i className="dropdown icon" />
              <div className="menu bb">
                <div className="item">VietNam</div>
                <div className="item">England</div>
              </div>
            </div>
            <div className="ui aa item">
              Language <i className="dropdown icon" />
              <div className="menu bb">
                <div className="item">English</div>
                <div className="item">Vietnamese</div>
              </div>
            </div>
            <div className="item">
              <div style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
                <i className="shopping cart icon" style={{ marginRight: 20 }} />
              </div>
              <div style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }} >Login</div>
            </div>
          </div>
        </div>
  )
}

export default FHeader