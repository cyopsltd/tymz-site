import { useState } from "react";
import SingleAccordion from "./SingleAccordion";

export default function Accordion({ content = [] }) {
  const [clicked, setClicked] = useState(null);
  const handleToggle = (index) => {
    setClicked(clicked === index ? null : index);
  };
  return (
    <div className="accordion">
      {content.map((faq, index) => (
        <SingleAccordion
          active={clicked === index}
          key={faq.id}
          faq={faq}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
