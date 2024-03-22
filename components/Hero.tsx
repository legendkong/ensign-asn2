export default function Hero() {
  return (
    <section className=" h-[400px] bg-no-repeat bg-cover bg-center py-14 bg-hero">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase"></div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            Ensign Infosecurity
            <span className="font-semibold"> Gadget Sales 🖥️</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
