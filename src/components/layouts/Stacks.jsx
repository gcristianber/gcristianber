import React from 'react'
const stacks = [
    { imgUrl: "./assets/images/logos/bootstrap.svg", altText: "bootstrap" },
    { imgUrl: "./assets/images/logos/firebase.svg", altText: "firebase" },
    { imgUrl: "./assets/images/logos/html5.svg", altText: "html5" },
    { imgUrl: "./assets/images/logos/javascript.svg", altText: "javascript" },
    { imgUrl: "./assets/images/logos/laravel.svg", altText: "laravel" },
    { imgUrl: "./assets/images/logos/mapbox.svg", altText: "mapbox" },
    { imgUrl: "./assets/images/logos/mysql.svg", altText: "mysql" },
    { imgUrl: "./assets/images/logos/nodejs.svg", altText: "nodejs" },
    { imgUrl: "./assets/images/logos/php.svg", altText: "php" },
    { imgUrl: "./assets/images/logos/tailwindcss.svg", altText: "tailwindcss" },
    { imgUrl: "./assets/images/logos/vite.svg", altText: "vite" },
    { imgUrl: "./assets/images/logos/vuejs.svg", altText: "vuejs" },
    { imgUrl: "./assets/images/logos/figma.svg", altText: "figma" },
    { imgUrl: "./assets/images/logos/flutter.svg", altText: "flutter" },
    { imgUrl: "./assets/images/logos/cpp.svg", altText: "cpp" },
    { imgUrl: "./assets/images/logos/java.svg", altText: "java" },
  ];
  
const Stacks = () => {
  return (
    <section className="overflow-hidden">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative group">
      <div className="h-16 w-56 bg-gradient-to-r from-white absolute left-0 z-10" />
      <div className="h-16 w-56 bg-gradient-to-l from-white absolute right-0 z-10" />
      <ul className="flex items-center space-x-16 animate-loop-scroll group-hover:paused">
        {stacks.map((stack) => (
          <li key={stack.imgUrl}>
            <img
              src={stack.imgUrl}
              alt={stack.altText}
              className="h-14 min-h-14 w-16 min-w-16"
            />
          </li>
        ))}
        {stacks.map((stack) => (
          <li key={stack.imgUrl}>
            <img
              src={stack.imgUrl}
              alt={stack.altText}
              className="h-14 min-h-14 w-16 min-w-16"
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
  )
}

export default Stacks