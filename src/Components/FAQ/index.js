import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const FAQ = () => {
  const faqs = [
    {
      question: "What is Material-UI?",
      answer:
        "Material-UI is a popular React UI framework that provides pre-designed components and styles based on Google's Material Design.",
    },
    {
      question: "What is Material-UI?",
      answer:
        "Material-UI is a popular React UI framework that provides pre-designed components and styles based on Google's Material Design.",
    },
    {
      question: "What is Material-UI?",
      answer:
        "Material-UI is a popular React UI framework that provides pre-designed components and styles based on Google's Material Design.",
    },
    {
      question: "What is Material-UI?",
      answer:
        "Material-UI is a popular React UI framework that provides pre-designed components and styles based on Google's Material Design.",
    },
  ];

  return (
    <div>
      <div>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
