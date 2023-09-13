import React, { Component } from 'react';
import Announcement from './Announcement';
import News from './News';
import './index.css'
class Index extends Component {
    render() {
        return (
            <div className='main-AnnounAndNew'>
                <div className='Announ'>
                    <Announcement />
                </div>

                <div className='Views'>
                    <News />
                </div>


            </div>
        );
    }
}

export default Index;