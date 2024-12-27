"use client";
import React, { useEffect, useState } from "react";
import apiClient from "./../../api/client";

const Page = () => {
  const [faqs, setFaqs] = useState();
  const [expanded, setExpanded] = useState({});

  const getFAQ = async () => {
    const { data } = await apiClient.get(`/faqs/get-faq`);
    setFaqs(data.faqs);
    console.log(data.faqs);
  };

  const toggleExpand = (sectionIndex, faqIndex) => {
    setExpanded((prev) => ({
      ...prev,
      [`${sectionIndex}-${faqIndex}`]: !prev[`${sectionIndex}-${faqIndex}`],
    }));
  };

  useEffect(() => {
    getFAQ();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">{faqs?.coreTitle}</h1>

      {faqs?.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="faq-container">
          <h2 className="text-xl font-semibold mb-4 text-center">
            {section.title}
          </h2>
          {section.faqs.map((faq, faqIndex) => (
            <div key={faqIndex} className="faq-item mb-8">
              <div
                className="cursor-pointer flex justify-between items-center mb-4"
                onClick={() => toggleExpand(sectionIndex, faqIndex)}
              >
                <h3 className="text-lg font-medium">
                  {faq.question}
                </h3>
                <span className="text-lg font-bold">
                  {expanded[`${sectionIndex}-${faqIndex}`] ? "-" : "+"}
                </span>
              </div>
              {expanded[`${sectionIndex}-${faqIndex}`] && (
                <div>
                  {faq.steps.length > 0 ? (
                    <section>
                      <p className="mb-4">{faq.answer}</p>
                      <ol className="space-y-4">
                        {faq.steps.map((step, stepIndex) => (
                          <li
                            key={stepIndex}
                            className="flex gap-2 flex-wrap items-start"
                          >
                            <span className="font-bold">Step {stepIndex + 1}:</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </section>
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Page;






