import reactClassname from '@lib/reactClassname';
import { useState } from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { MdOutlineQuestionAnswer } from 'react-icons/md';
interface QNAProps {
  question: string;
  answer: string;
}
const QNA: React.FC<QNAProps> = ({ question, answer }) => {
  const [questionOpen, setQuestionOpen] = useState<boolean>(false);
  const onQuestionClick = () => {
    setQuestionOpen((cur) => !cur);
  };
  return (
    <article className="w-full flex flex-col max-w-4xl mx-auto">
      <h3
        onClick={onQuestionClick}
        className="w-full font-medium lg:text-xl flex flex-col md:flex-row space-y-2 md:space-y-0 items-start md:items-center md:space-x-2 pb-2 border-b-2 mb-2 border-gray-400/20 text-lg cursor-pointer transition-all hover hover:text-gray-400"
      >
        <AiFillQuestionCircle />
        <span>{question}</span>
      </h3>
      <p
        className={reactClassname(
          'transition-all transform w-full',
          questionOpen ? 'translate-x-0 block' : 'translate-x-full hidden'
        )}
      >
        <span className="col-span-7 leading-8 text-gray-400">{answer}</span>
      </p>
    </article>
  );
};
export default QNA;
