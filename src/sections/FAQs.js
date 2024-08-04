import React from 'react';
import { useState } from 'react';
import Button1 from '../components/button-1';
import SectionTitle from '../components/section-title';

function FAQs({Nothome, faqsData}) {

const [Detail, setDetail] = useState(0)

const [Topic, setTopic] = useState(0)

function Faq({id}) {
return (
    <div>
        <details open={Detail ===id ? true : false} onClick={() => setDetail(id)} >
            <summary>
              <p>{faqsData[Topic][id].q}</p>
              <i className={Detail === id ? "fa-solid fa-minus" : "fa-solid fa-plus"}/>
            </summary>
            <p>{faqsData[Topic][id].a}</p>
          </details>
    </div>
)
}

return (
  <div>
    <SectionTitle name="FAQs" title="Frequently asked Questions" description=""/>
    {Nothome ? "" : <div>
        <div onClick={() => setTopic(0)}>General</div>
        <div onClick={() => setTopic(1)}>Trust & Safety</div>
        <div onClick={() => setTopic(2)}>Services</div>
        <div onClick={() => setTopic(3)}>Billing</div>
    </div>}
    <div>
        <Faq id={0}/>
        <Faq id={1}/>
        <Faq id={2}/>
        <Faq id={3}/>
        <Faq id={4}/>
    </div>
  </div>
)
}

export default FAQs;
