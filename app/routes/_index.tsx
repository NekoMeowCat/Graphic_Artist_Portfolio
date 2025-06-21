import { useEffect, useRef } from "react";

export default function Home() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const el = scrollContainerRef.current;

    const onWheel = (e) => {
      if (el) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 2;
      }
    };

    el?.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el?.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div className="h-screen bg-[#BDDDE4] overflow-hidden relative">
      {/* Main scrollable content */}
      <main
        ref={scrollContainerRef}
        className="flex h-full overflow-x-auto scroll-smooth"
      >
        {/* Section: Page 1 */}
        <section className="w-screen flex-shrink-0 flex items-center justify-center text-3xl">
          {/* Left Side – Profile Info */}
          <aside className="w-2/5 h-full p-4">
            <section
              aria-labelledby="profile-heading"
              className="h-full w-full border-2 bg-gray-50 shadow-md rounded-md flex flex-col p-10"
            >
              <header>
                <h1
                  id="profile-heading"
                  className="w-auto h-auto font-bueno font-bold text-9xl leading-none tracking-wide text-justify uppercase"
                >
                  Junzel <br />
                  Dela Torre
                </h1>
                <h2 className="text-lg font-poppins tracking-tighter uppercase font-medium leading-none my-10">
                  Freelance <br />
                  Graphic Artist
                </h2>
              </header>
              <p className="text-base h-full text-justify tracking-tighter">
                I create expressive, detail-driven illustrations that bring
                stories and ideas to life. From character art to editorial
                pieces, my work focuses on capturing emotion, personality, and
                visual impact through hand-drawn and digital techniques.
              </p>
              <footer className="items-end text-right text-sm tracking-tighter text-[#8F87F1] font-bold">
                - ハドゥリユイ
              </footer>
            </section>
          </aside>

          {/* Right Side – Content Grid */}
          <section className="w-3/5 h-full border-2 p2-4">
            <div className="h-full w-full">
              <div className="grid grid-cols-2 grid-rows-7 gap-4 h-full p-4">
                <article
                  aria-label="Content Block 1"
                  className="h-full bg-white rounded-md shadow-md border row-span-4"
                >
                  1
                </article>
                <article
                  aria-label="Content Block 2"
                  className="h-full bg-white rounded-md shadow-md border row-span-3"
                >
                  2
                </article>
                <article
                  aria-label="Content Block 3"
                  className="h-full bg-white rounded-md shadow-md border row-span-3 col-start-1 row-start-5"
                >
                  3
                </article>
                <article
                  aria-label="Content Block 4"
                  className="h-full bg-white rounded-md shadow-md border row-span-4 col-start-2 row-start-4"
                >
                  4
                </article>
              </div>
            </div>
          </section>
        </section>

        {/* Section: Page 2 */}
        <section className="w-screen flex-shrink-0 flex items-center justify-center text-3xl p-3">
          <article className="h-full w-full flex gap-x-5">
            <aside className="h-full w-1/4 border flex flex-col">
              <figure>
                <img
                  src="/images/iring1.jpg"
                  className="h-[39rem] w-full object-cover"
                  alt="Cats in hoodies"
                />
              </figure>
              <section className="h-full my-1 flex gap-x-2 mt-3">
                <div className="text-6xl font-bold font-bueno">01</div>
                <article className="leading-none flex flex-col">
                  <h2 className="uppercase tracking-wide font-bueno">
                    Cats & Friends
                  </h2>
                  <p className="text-[16px] tracking-tighter font-light">
                    2021, cats wearing hoodies and other stuff.
                  </p>
                </article>
              </section>
            </aside>
            <div className="h-full w-3/4 border">
              <div className="h-[9rem] w-full mt-3">
                <h1 className="h-full font-public text-[160px] font-bold tracking-[-0.10em] flex items-center">
                  EXPERIENCE
                </h1>
                <div className="border h-[469px]">
                  <img
                    src="/images/iring2.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <section className="my-1 flex gap-x-2 mt-3">
                  <div className="text-6xl font-bold font-bueno">02</div>
                  <article className="leading-none flex flex-col">
                    <h2 className="uppercase tracking-wide font-bueno">
                      Cats on the beach
                    </h2>
                    <p className="text-[16px] tracking-tighter font-light">
                      2023, cats on the beach, enjoying the sun.
                    </p>
                  </article>
                </section>
              </div>
            </div>
          </article>
        </section>

        {/* Section: Page 3 */}
        <section className="w-screen flex-shrink-0 flex items-center justify-center border-2 text-3xl">
          Page 3
        </section>

        {/* Section: Page 4 */}
        <section className="w-screen flex-shrink-0 flex items-center justify-center border-2 text-3xl">
          <div className="block w-full h-full">
            <article className="h-1/2 w-full border-2 flex gap-x-2">
              <div className="w-1/2 h-full">
                <img
                  src="/images/iring3.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-1/2 h-full text-right bg-black pr-4">
                <span className="text-6xl font-bold font-public uppercase tracking-[-0.10em] text-9xl text-white">
                  get in touch
                </span>
              </div>
            </article>
            <article className=" w-full flex flex-col justify-between p-4 gap-y-6">
              {/* Row 1: Side-by-side content */}
              <div className="flex justify-between">
                <span className="w-full text-7xl md:text-9xl font-bold font-bueno uppercase tracking-[0.015em] leading-none">
                  Junzel Dela Torre
                </span>
                <span className="flex text-3xl md:text-4xl justify-end items-end w-full font-bold font-bueno uppercase">
                  Available Always
                </span>
              </div>

              {/* Row 2: Spacer or middle content */}
              <div className="h-auto flex justify-between">
                <div className="flex flex-col justify-center">
                  <span className="uppercase font-anton text-2xl md:text-4xl tracking-tight">
                    work days
                  </span>
                  <span className="font-bueno uppercase text-xl md:text-3xl">
                    monday - friday
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="uppercase font-anton text-2xl md:text-4xl tracking-tight">
                    Got a design in mind?
                  </span>
                  <span className="flex justify-end font-bueno uppercase text-xl md:text-3xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                      />
                    </svg>
                    email goes here
                  </span>
                </div>
              </div>

              {/* Row 3: Footer or additional content */}
              <div className="flex gap-x-2">
                <span className="uppercase font-anton text-2xl md:text-4xl tracking-tight">
                  socials
                </span>
                <span className="font-bueno uppercase text-xl md:text-2xl space-x-4">
                  <a
                    href="/"
                    className="underline hover:text-purple-600 duration-500"
                  >
                    Facebook
                  </a>
                  <a
                    href="/"
                    className="underline hover:text-purple-600 duration-500"
                  >
                    linkedin
                  </a>
                  <a
                    href="/"
                    className="underline hover:text-purple-600 duration-500"
                  >
                    linkedin
                  </a>
                  <a
                    href="/"
                    className="underline hover:text-purple-600 duration-500"
                  >
                    linkedin
                  </a>
                </span>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
