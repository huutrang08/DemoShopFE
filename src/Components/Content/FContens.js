import React, { Fragment } from 'react'
import im1 from '../../Images/ims/1.png'
import im2 from '../../Images/ims/2.png'
import im3 from '../../Images/ims/3.png'
import im4 from '../../Images/ims/4.png'
import im5 from '../../Images/ims/5.png'
import im6 from '../../Images/ims/6.png'
function FContens() {
  return (
    <Fragment>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <div className="product" style={{ width: '350px', height: 385, backgroundColor: 'white', padding: 20 }}>
            <b style={{ fontSize: 20 }}>Gaming accessories</b>
            <div>
              <img src alt={'img'} /><img src alt={'img'} /><img src alt={'img'} /><img src alt={'img'} />
            </div>
            <div className="link" href>show more</div>
          </div>
          <div className="product" style={{ width: '350px', height: 385, backgroundColor: 'white', padding: 20 }}>
            <b style={{ fontSize: 20 }}>Shop by Category</b>
            <img src={im1} style={{ width: '100%', height: '80%', marginTop: 10, marginBottom: 20 }} alt={'img'} />
            <div className="link" href>show more</div>
          </div>
          <div className="product" style={{ width: '350px', height: 385, backgroundColor: 'white', padding: 20 }}>
            <b style={{ fontSize: 20 }}>AmazonBasics</b>
            <img src={im2} style={{ width: '100%', height: '80%', marginTop: 10, marginBottom: 20 }} alt={'img'} />
            <div className="link" href>show more</div>
          </div>
          <div className="product" style={{ width: '350px', height: 385, backgroundColor: 'white', padding: 20 }}>
            <b style={{ fontSize: 20 }}>experience</b>
            <img src={im3} style={{ width: '100%', height: '80%', marginTop: 10, marginBottom: 20 }} alt={'img'} />
            <div className="link" href>show more</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 20 }}>
          <div className="product" style={{ width: '350px', height: 385, backgroundColor: 'white', padding: 20 }}>
            <b style={{ fontSize: 20 }}>Lunar New Year</b>
            <img src={im4} style={{ width: '100%', height: '80%', marginTop: 10, marginBottom: 20 }} alt={'img'} />
            <div className="link" href>show more</div>
          </div>
          <div className="product" style={{ width: '350px', height: 385, backgroundColor: 'white', padding: 20 }}>
            <b style={{ fontSize: 20 }}>Computers &amp; Accessories</b>
            <img src={im5} style={{ width: '100%', height: '80%', marginTop: 10, marginBottom: 20 }} alt={'img'} />
            <div className="link" href>show more</div>
          </div>
          <div className="product" style={{ width: '350px', height: 385, backgroundColor: 'white', padding: 20 }}>
            <b style={{ fontSize: 20 }}>Find your ideal TV</b>
            <img src={im6} style={{ width: '100%', height: '80%', marginTop: 10, marginBottom: 20 }} alt={'img'} />
            <div className="link" href>show more</div>
          </div>
          <div className="product" style={{ width: '350px', height: 385, backgroundColor: 'white', padding: 20 }}>
            <b style={{ fontSize: 20 }}>Easy returns</b>
            <img src={im1} style={{ width: '100%', height: '80%', marginTop: 10, marginBottom: 20 }} alt={'img'} />
            <div className="link" href>show more</div>
          </div>
        </div>
    </Fragment>
  )
}

export default FContens