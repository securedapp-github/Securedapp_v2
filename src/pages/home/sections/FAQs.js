import React from "react";
import { useState } from "react";
import SectionTitle from "../../../components/section-title";

const faqsData = [
  [
    {
      id: 0,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 1,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 2,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 3,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 4,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
  ],
  [
    {
      id: 0,
      q: "Plan 2, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 1,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 2,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 3,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 4,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
  ],
  [
    {
      id: 0,
      q: "Plan 3, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 1,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 2,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 3,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 4,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
  ],
  [
    {
      id: 0,
      q: "Plan 4, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 1,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 2,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 3,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 4,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
  ],
];

function FAQs() {
  const [Detail, setDetail] = useState(0);

  const [Topic, setTopic] = useState(0);

  function Faq({ id }) {
    return (
      <div>
        <details
          open={Detail === id ? true : false}
          onClick={() => setDetail(id)}>
          <summary>{faqsData[Topic][id].q}</summary>
          <p>{faqsData[Topic][id].a}</p>
        </details>
      </div>
    );
  }

  return (
    <div>
      <SectionTitle
        name="FAQs"
        title="Frequently asked Questions"
        description=""
      />
      <div>
        <div onClick={() => setTopic(0)}>General</div>
        <div onClick={() => setTopic(1)}>Trust & Safety</div>
        <div onClick={() => setTopic(2)}>Services</div>
        <div onClick={() => setTopic(3)}>Billing</div>
      </div>
      <div>
        <Faq id={0} />
        <Faq id={1} />
        <Faq id={2} />
        <Faq id={3} />
        <Faq id={4} />
      </div>
    </div>
  );
}

export default FAQs;
