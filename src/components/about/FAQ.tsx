/**
 * components
 */
import QNA from './QNA';
/**
 * local interfaces & types
 */
interface QuestionAndAnswerData {
  question: string;
  answer: string;
}
type QuestionAndAnswerDataType = Array<QuestionAndAnswerData>;

const qnas: QuestionAndAnswerDataType = [
  {
    question:
      'Oh no! What happened to Yakitori Yuchan restaurant? Did the owners change?',
    answer:
      "Not to worry -- we still have the same owners, Yuji-san and Kae-san. And we're still at 109 E Street on the ground floor of the Davis Lofts building in Downtown Davis. And we're still serving the same menu that we were serving during the CoVID-19 pandemic. We've just changed the restaurant name in order to re-align our business to the new future incurred by the pandemic incurred.",
  },
  {
    question:
      'So if everything is the same, why change the name from Yakitori Yuchan to Yuchan Shokudo?',
    answer: `The short answer is, "Because of the CoVID-19 pandemic." Here's the long answer: In March 2020 (when CoVID first hit Yolo County and the city of Davis), the state of California passed a statewide restriction preventing on-premises dining at restaurants. Our restaurant specialized strictly in on-premises dining, so to avoid throwing in the towel and going out of business, we were forced to re- organize into a to-go only establishment. During this disruptive and painful transition, we lost more than half of our staff. Meanwhile, on a national and global scale, the pandemic crippled the supply chain; as we could no longer procure necessary supplies, we had to severely curtail our menu and remove sumiyaki kushiyaki (charcoal-grilled skewers). In July 2021 (after almost a year-and-a-half since the pandemic started) California's health mandate was ultimately rescinded; however, although indoor dining was allowed, the supply chain for food and materials was still severely damaged, and further outbreaks of the Delta and Omicron variants continued to frustrate recovery efforts while increasing costs. In February 2022, when Russia invaded Ukraine, costs of oil and fuel sharply increased; shipping costs skyrocketed while the economy fell into stagflation (inflation and recession). It's now June 2022 and two years since the pandemic first disrupted worldwide business, production, and distribution. We've had to take a hard look at what is actually feasible for our restaurant's continued operation. Although we initially held out hope that we might be able to return to how things were before the pandemic, we face the harsh reality that our remaining vendors are unable to provide the necessary components at affordable prices on a regular and reliable basis, and we no longer have the necessary manpower/staff to make the skewers. As such, we made the difficult decision to transition away from sumi-yaki kushiyaki and yakitori (hand-made skewers grilled over binchotan charcoalimported from Japan).`,
  },
  {
    question: 'What does Yuchan Shokudo mean?',
    answer:
      "In Japanese, shokudō literally means 'eating hall.' Other acceptable translations include 'dining hall', 'eatery', and 'cafeteria.' In practice, the term refers to casual, Mom-and-Pop-type family-owned restaurants where locals eat staple fare such as rice or noodle-based dishes (e.g., donburi, ramen, soba)",
  },
];

const FAQ: React.FC = () => {
  return (
    <div
      id="frequently-asked-questions"
      className="w-full min-h-screen flex flex-col justify-center"
    >
      <section className="p-8">
        <h3 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center mb-8 md:mb-12 lg:mb-16">
          Frequently Asked Questions
        </h3>
        <ul className="flex flex-col space-y-6">
          {qnas.map((eachQNAData, dataIndex) => (
            <QNA {...eachQNAData} key={dataIndex} />
          ))}
        </ul>
      </section>
    </div>
  );
};
export default FAQ;
