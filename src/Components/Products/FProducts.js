import React, { Fragment } from 'react'
import { Checkbox, Flag, Grid, Icon, Image, Radio, Segment } from 'semantic-ui-react'
import im1 from '../../Images/1.jpg'
import im2 from '../../Images/2.jpg'
import im3 from '../../Images/3.jpg'

function FProducts() {
    return (
        <Fragment>
        <Segment className='flag'>
        
      </Segment>
        <Grid>
            <Grid.Column width={2} className='filter'>
                <Grid.Row>
                Filter
                </Grid.Row>
                <Grid.Row className='check'>
                    <Checkbox>
                    </Checkbox>
                    <div>Price</div>
                        <Icon className='arrow down'></Icon>
                </Grid.Row>
                <Grid.Row className='check'>
                    <Checkbox>
                    </Checkbox>
                    <div>Name</div>
                </Grid.Row>
            </Grid.Column>
            <Grid.Column width={13}>
                <Grid>
                    <Grid.Column width={3} className='product'>
                        <div className='img'>
                            <img src={im3} className='image' alt="" />
                        </div>
                        <div>Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation,Xbox - 1-Year Rescue Service (STGX2000400)</div>
                        <div>$59.99</div>
                    </Grid.Column >
                    <Grid.Column width={3} className='product'>
                        <div className='img'>
                            <img src={im3} className='image' alt="" />
                        </div>
                        <div>Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation,Xbox - 1-Year Rescue Service (STGX2000400)</div>
                        <div>$59.99</div>
                    </Grid.Column >
                    <Grid.Column width={3} className='product'>
                        <div className='img'>
                            <img src={im3} className='image' alt="" />
                        </div>
                        <div>Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation,Xbox - 1-Year Rescue Service (STGX2000400)</div>
                        <div>$59.99</div>
                    </Grid.Column >
                    <Grid.Column width={3} className='product'>
                        <div className='img'>
                            <img src={im3} className='image' alt="" />
                        </div>
                        <div>Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation,Xbox - 1-Year Rescue Service (STGX2000400)</div>
                        <div>$59.99</div>
                    </Grid.Column >
                    <Grid.Column width={3} className='product'>
                        <div className='img'>
                            <img src={im3} className='image' alt="" />
                        </div>
                        <div>Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation,Xbox - 1-Year Rescue Service (STGX2000400)</div>
                        <div>$59.99</div>
                    </Grid.Column >
                    <Grid.Column width={3} className='product'>
                        <div className='img'>
                            <img src={im3} className='image' alt="" />
                        </div>
                        <div>Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation,Xbox - 1-Year Rescue Service (STGX2000400)</div>
                        <div>$59.99</div>
                    </Grid.Column >
                </Grid>
            </Grid.Column>
        </Grid>
        </Fragment>
    )
}

export default FProducts