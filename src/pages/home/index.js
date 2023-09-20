import React from 'react'
import Header from '../../components/header'
import Form from '../../components/form'
import "./home.css"
import {FaPlay} from 'react-icons/fa'
import {MdDone} from 'react-icons/md'
import Detail from '../../components/detail'


function Home() {

    const items = [
        'State of the art facility',
        'Superior world class services',
        'Certified and expert consultants',
      ];
  return (
    <div>
    <Header/>
    <div className='container'>
        <div className='content'>
        <div className='context'>
            <h1>Awesome Template to Promote Your Services</h1>
            <p>Start your business today with a great and strong landing page made to enhance the marketer's workflow.</p>
        </div>
    <Form/>
    </div>
    <div className='play'>
        <span><FaPlay/></span>
    </div>
    </div>
    <div className='tick'>
    {items.map((item, index) => (
        <div className='tick-map'>
        <span className='done'><MdDone/></span>
          <span key={index}>{item}</span></div>
        ))}
        
    </div>
    <hr></hr>
    <div>
        <Detail/>
    </div>
    </div>
  )
}

export default Home