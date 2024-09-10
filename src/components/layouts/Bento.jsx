import React from "react";

const Bento = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className=" aspect-square 
        grid grid-cols-8 grid-rows-4 gap-4
        "
        >
          <div className="bg-blue-500 col-span-2 row-span-2" />

          <div
            className="col-span-4 row-span-4
          grid grid-rows-2 grid-cols-2 gap-y-4
          relative"
          >
            <div className="bg-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-56 aspect-square rounded-full outline outline-[1rem] outline-white" />

            <div className="bg-green-500 col-span-2 row-span-1" />
            <div className=" col-span-2 row-span-1
            grid grid-cols-2 gap-x-4">
                <div className="bg-violet-500 col-span-1 row-span-1 rounded-b-lg" />
                <div className="bg-violet-500 col-span-1 row-span-1 rounded-b-lg" />
            </div>
          </div>

          <div className="bg-blue-500 col-span-2 row-span-2" />

          <div
            className="col-span-2 row-span-2
            grid grid-rows-2 grid-cols-2 gap-y-4"
          >
            <div className="bg-red-500 col-span-2 row-span-1" />
            <div className="bg-red-500 col-span-2 row-span-1" />
          </div>
          <div className="bg-blue-500 col-span-2 row-span-2" />
        </div>
      </div>
    </section>
  );
};

export default Bento;
