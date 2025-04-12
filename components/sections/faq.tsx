import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can contribute?",
    answer: "Devcation is open to anyone with an interest in technology, innovation, and problem-solving. Participants can include students, developers, designers, entrepreneurs, and professionals from various backgrounds.",
  },
  {
    question: "Where can we reach out in case of queries?",
    answer: "You can reach out to us on our Discord Server with any queries. Kindly use the doubt channel for the same!",
  },
  {
    question: "Do I need to have coding experience to participate?",
    answer: "While coding experience is beneficial, it's not always necessary to participate in a hackathon. Many hackathons welcome participants with diverse skill sets, including design, business development, marketing, and project management. If you're a beginner you can also look at our mini events",
  },
  {
    question: "What happens after the hackathon ends?",
    answer: "After the hackathon concludes, top 10 teams will be invited to present their projects to judges and fellow participants during the final pitching round at IGDTUW.\n\nWinners will be announced, and prizes awarded based on the judging criteria. Date for this is 15th April, 2025.",
  },
  {
    question: "How can I stay updated on hackathon announcements and events?",
    answer: "Stay informed about Devcation'25 by joining our Discord Server. Know more about upcoming hackathons and events by GDG IGDTUW by joining our GDG Chapter.",
  },
];

export function FAQSection() {
  return (
    <section id="faqs" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}