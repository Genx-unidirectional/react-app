function Hero() {
  return (
    <section
      id="hero"
      className="flex mx-auto max-w-4xl flex-col h-screen items-center justify-center gap-10  pt-20 scroll-mt-12 px-3 sm:px-4 md:px-6 sm:flex-row "
    >
      <article className="w-full sm:w-1/2">
        <h2 className="text-4xl text-white text-center sm:text-left mb-8 sm:text-4xl md:text-5xl">
          Developer Ganesh
        </h2>
        <p className="text-purple-400 md:w-3/4 text-center sm:text-left text-xl sm:text-2xl md:text-3xl mb-2">
          Prioritize user experience above all else.{" "}
        </p>
        <p className="text-purple-300 md:w-3/4 text-center sm:text-left text-xl sm:text-2xl md:text-3xl mb-2">
          Web app which meticulously crafted to guide users seamlessly through
          content.
        </p>
        <p className="text-purple-300 mdw-1/2 text-center sm:text-left text-xl sm:text-2xl md:text-3xl">
          Attention to detail extends beyond the surface level!
        </p>
      </article>
      <div className="w-1/2 mx-auto flex justify-center flex-col items-center h-1/2">
        <img
          src="/images/sensei.png"
          className=" rounded-sm h-full w-full- shadow-xl shadow-purple-300 
      "
          alt="saitama"
        />
        <p className="text-lg text-white text-nowrap  font-mono text-center">
          ~Diciple of saitama sensei
        </p>
      </div>
    </section>
  );
}
export default Hero;
