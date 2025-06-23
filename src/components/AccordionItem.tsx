import { useState } from 'react';
import minus from '../assets/icon-minus.svg';
import plus from '../assets/icon-plus.svg';
import { motion, AnimatePresence } from 'motion/react';

type AccordionItemProps = {
  title: string;
  answer: string;
};

export function AccordionItem({ title, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTitleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item flex flex-col gap-6">
      <button
        onClick={handleTitleClick}
        className="w-full text-start flex items-center justify-between"
      >
        <p className="text-start text-dark-purple  max-w-[225px] leading-[19px] font-semibold">
          {title}
        </p>
        <img
          src={isOpen ? minus : plus}
          alt={`${isOpen ? 'Minus' : 'Plus'} icon`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, scale: 0.6 }}
            animate={{ height: 'auto', opacity: 1, scale: 1 }}
            exit={{ height: 0, opacity: 0, scale: 0.6 }}
            className="answer text-sm text-light-purple leading-[150%]"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
