import React, { Fragment } from 'react'
import { Grid, Image, List } from 'semantic-ui-react'
function FFooter() {
    return (
        <Grid>
            <Grid.Column floated='left' className='contact' width={5}>
                <List animated verticalAlign='middle'>
                <b>Contact us</b>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>
                            <a href='buihuutrang2110@gmail.com'>buihuutrang2110@gmail.com</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='facebook' />
                        <List.Content>
                            <a href='http://www.semantic-ui.com'>Facebook</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>Ha Noi, VN</List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column width={3}>
                <List divided verticalAlign='middle'>
                    <b >Customer care</b>
                    <List.Item className='a'>
                    Help Center
                    </List.Item>
                    <List.Item className='a'>
                    Shopping guide
                    </List.Item>
                    <List.Item className='a'>
                    Sales Guide
                    </List.Item>
                    <List.Item className='a'>
                    Payment
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column width={3}>
                <List divided verticalAlign='middle'>
                    <b >About Us</b>
                    <List.Item className='a'>
                        Introduce
                    </List.Item>
                    <List.Item className='a'>
                        Recruit
                    </List.Item>
                    <List.Item className='a'>
                        Security
                    </List.Item>
                    <List.Item className='a'>
                    Terms of use
                    </List.Item>
                </List>
            </Grid.Column>
        </Grid>
    )
}

export default FFooter