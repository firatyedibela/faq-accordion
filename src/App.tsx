import star from './assets/icon-star.svg';

function App() {
  return (
    <main className="p-6 min-h-screen flex items-center justify-center">
      <div className="accordion max-w-[600px] bg-white rounded-lg p-6 md:p-[40px]">
        <div className="accordion-header flex gap-6 items-center font-main leading-[38px] md:leading-[65px]">
          <img
            className="w-[21px] h-[21px] md:w-[40px] md:h-[40px]"
            src={star}
            alt="Star icon"
          />
          <h1 className="text-dark-purple font-bold text-[32px] md:text-[56px]  ">
            FAQs
          </h1>
        </div>
        <div className="accordion-body"></div>
      </div>
    </main>
  );
}

export default App;
