// Accordion.js
import { useState } from 'react';
import styled from 'styled-components';

const AccordionSection = styled.div`
  max-width: 500px;
  margin: auto;
`;

const AccordionHeader = styled.div`
  background: #007bff;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
`;

const AccordionContent = styled.div`
  padding: 10px;
  background: #f1f1f1;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <AccordionSection>
      <AccordionHeader onClick={() => setOpen(!open)}>{title}</AccordionHeader>
      <AccordionContent open={open}>{children}</AccordionContent>
    </AccordionSection>
  );
}

// Usage in App.js
// import Accordion from './Accordion';
// <Accordion title="Click me">Hello! I'm the content.</Accordion>
