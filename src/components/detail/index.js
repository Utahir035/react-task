import React from 'react'
import './detail.css'
import {ImRadioChecked} from 'react-icons/im'

function Detail() {

    const items = [
        { id: 1, name: '10k+', description: 'Happy Satisfied Customers' },
        { id: 2, name: '31m+', description: 'Completed Projects' },
        { id: 3, name: '4k', description: 'Expert Team Members' },
        // ... add more objects as needed
      ];
  return (
    <div className='detail'>
        <div className='context-D'>
            <div className='content-D'>
                <b className='bold'>WHO WE ARE</b>
                <hr className='hr'></hr>
                <h1>We Provide The Solutions To Grow Your Business</h1>
                <p>We focus on <b> quality , innovation and speed.</b> Branex is a premium web design company in UK.
                    When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className='point'><span><ImRadioChecked/></span> When an unknown printer took a galley.</div>
                <div className='point'><span><ImRadioChecked/></span> Type and scrambled it to make a type specimen.</div>
            </div>
            <div className="about-photo">
          <img 
            src={require("../../assets/coding.png")}
            className="picture" alt="pikachu"
          />
        </div>
        </div>
        <div className='business'>
            <div className='business-block'>
                <h2>Business Performance Increase</h2>
                <div className='block'>
                {items.map((item) => (
                <div className='box'>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
                ))}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Detail