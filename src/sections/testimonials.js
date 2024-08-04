import React from 'react';
import { useState } from 'react';
import Button1 from '../components/button-1';
import SectionTitle from '../components/section-title';

const reviews = [
    {
        id: 0,
        name : "Adlinda Paw",
        designation : "Engineering Head",
        testimonial: "Working with Bilqis has been a game-changer for our business.  Their strategic insights and innovative solutions helped us streamline  our operations and achieve remarkable growth",
    },
    {
        id: 1,
        name : "Adlinda Paw",
        designation : "Engineering Head 2",
        testimonial: "Working with Bilqis has been a game-changer for our business.  Their strategic insights and innovative solutions helped us streamline  our operations and achieve remarkable growth",
    },
    {
        id: 2,
        name : "Adlinda Paw",
        designation : "Engineering Head 3",
        testimonial: "Working with Bilqis has been a game-changer for our business.  Their strategic insights and innovative solutions helped us streamline  our operations and achieve remarkable growth",
    },
    {
        id: 3,
        name : "Adlinda Paw",
        designation : "Engineering Head 4",
        testimonial: "Working with Bilqis has been a game-changer for our business.  Their strategic insights and innovative solutions helped us streamline  our operations and achieve remarkable growth",
    }
]

function Testimonials() {

const [active, setActive] = useState(1)
const style = {}

function Testimonial({id}) {
return(
    <div style={style}>
        <p>{reviews[id].testimonial}</p>
        <div>
            <div>
                <p>{reviews[id].name}</p>
                <p>{reviews[id].designation}</p>
            </div>
            <i className='fa-solid fa-quote-left'/>
        </div>
    </div>
)
}

function moveLeft() {

}

function moveRight() {

}

return (
  <div>
    <SectionTitle name="What clients say" title="Client Experiences" description="Explore a wide range of topics, including innovative business  strategies, technological advancements, and best practices."/>
    <div>
        <Testimonial id={0}/>
        <Testimonial id={1}/>
        <Testimonial id={2}/>
        <Testimonial id={3}/>
    </div>
    <div>
        <button onClick={moveLeft}><i className='fa-regular fa-arrow-left' /> </button>
        <button onClick={moveRight}><i className='fa-regular fa-arrow-right' /> </button>
    </div>
  </div>
)
}

export default Testimonials;
