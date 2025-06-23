import star from './assets/icon-star.svg';
import { AccordionItem } from './components/AccordionItem';
import faqs from './data/faqs';

function App() {
  return (
    <main className="p-6 min-h-screen flex items-center justify-center">
      <div className="accordion flex flex-col gap-6 w-[327px] bg-white rounded-lg p-6 md:p-[40px] font-main">
        <div className="accordion-header flex gap-6 items-center leading-[38px] md:leading-[65px]">
          <img
            className="w-[21px] h-[21px] md:w-[40px] md:h-[40px]"
            src={star}
            alt="Star icon"
          />
          <h1 className="text-dark-purple font-bold text-[32px] md:text-[56px]  ">
            FAQs
          </h1>
        </div>
        <div className="accordion-body flex flex-col gap-[20px]">
          {faqs.map((faq, index) => (
            <>
              <AccordionItem
                key="title"
                title={faq.title}
                answer={faq.answer}
              />
              {index + 1 < faqs.length && (
                <div className="w-100 h-[1px] bg-light-pink"></div>
              )}
            </>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
