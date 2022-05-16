import React, { Fragment } from 'react'
import im7 from '../../Images/ims/7.png'
import im8 from '../../Images/ims/8.png'
import im9 from '../../Images/ims/9.png'
import im10 from '../../Images/ims/10.png'
function FContens() {
  return (
    <Fragment>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 20 }}>
          <div className="product" style={{ width: 350, height: 385, backgroundColor: 'white', padding: 20 }}>
            <b style={{ fontSize: 20 }}>Popular products</b>
            <img src={im7} style={{ width: '100%', height: '80%', marginTop: 10, marginBottom: 20 }} alt={'img'} />
            <div className="link" href>show more</div>
          </div>
          <div className="product" style={{ width: 350, height: 385, backgroundColor: 'white', padding: 20 }}>
            <b style={{ fontSize: 20 }}>Shop Laptops and Tablets</b>
            <img src={im8} style={{ width: '100%', height: '80%', marginTop: 10, marginBottom: 20 }} alt={'img'} />
            <div className="link" href>show more</div>
          </div>
          <div className="product" style={{ width: 350, height: 385, backgroundColor: 'white', padding: 20 }}>
            <b style={{ fontSize: 20 }}>More everyday essentials</b>
            <img src={im9} style={{ width: '100%', height: '80%', marginTop: 10, marginBottom: 20 }} alt={'img'} />
            <div className="link" href>show more</div>
          </div>
          <div className="product" style={{ width: 350, height: 385, backgroundColor: 'white', padding: 20 }}>
            <b style={{ fontSize: 20 }}>For your Fitness Needs</b>
            <img src={im10} style={{ width: '100%', height: '80%', marginTop: 10, marginBottom: 20 }} alt={'img'} />
            <div className="link" href>show more</div>
          </div>
        </div>
    </Fragment>
  )
}

export default FContens