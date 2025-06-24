import { useState } from 'react';
import minus from '../assets/icon-minus.svg';
import plus from '../assets/icon-plus.svg';
import { motion, AnimatePresence } from 'motion/react';

type AccordionItemProps = {
  id: number;
  title: string;
  answer: string;
};

export function AccordionItem({ title, answer, id }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTitleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item flex flex-col">
      <button
        type="button"
        onClick={handleTitleClick}
        className="w-full text-start flex items-center justify-between cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={`faq${id}`}
      >
        <span className="text-start text-dark-purple max-w-[225px] font-semibold hover:text-pink transition duration-150 leading-[19px] md:max-w-none md:text-lg">
          {title}
        </span>
        <img
          src={isOpen ? minus : plus}
          alt={`${isOpen ? 'Minus' : 'Plus'} icon`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq${id}`}
            className="answer text-sm text-light-purple leading-[150%] md:text-base"
            initial={{ height: 0, opacity: 0, scale: 0.6, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, scale: 1, marginTop: 24 }}
            exit={{ height: 0, opacity: 0, scale: 0.6, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
