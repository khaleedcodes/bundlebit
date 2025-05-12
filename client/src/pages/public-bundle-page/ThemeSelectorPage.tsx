import { Link } from "react-router-dom";

const ThemeSelectorPage = () => {
  const themes = [
    { id: "default", name: "Default Theme", description: "Clean, modern interface with a gradient background", color: "from-indigo-500 to-purple-600" },
    { id: "neon", name: "Neon Theme", description: "Cyberpunk vibes with neon pink glowing elements", color: "from-pink-500 to-pink-600" },
    { id: "glass", name: "Glass Theme", description: "Frosted glass panels with blur effects", color: "from-blue-400 to-indigo-500" },
    { id: "brutalist", name: "Brutalist Theme", description: "Bold black and white with chunky rectangles", color: "from-gray-700 to-gray-900" },
    { id: "minimal", name: "Minimal Theme", description: "Clean, minimal design with subtle animations", color: "from-gray-400 to-gray-600" },
    { id: "retro", name: "Retro Theme", description: "90s retro aesthetic with bold colors", color: "from-fuchsia-500 to-cyan-400" },
    { id: "paper", name: "Paper Theme", description: "Warm paper texture with torn edges", color: "from-amber-200 to-amber-400" },
    { id: "terminal", name: "Terminal Theme", description: "Green-on-black terminal interface with typewriter effect", color: "from-green-500 to-green-800" },
    { id: "sunset", name: "Sunset Theme", description: "Warm sunset gradient with wave animations", color: "from-orange-400 to-pink-600" },
    { id: "matrix", name: "Matrix Theme", description: "Digital code rain over dark background", color: "from-green-500 to-emerald-700" },
    { id: "vaporwave", name: "Vaporwave Theme", description: "80s/90s VHS aesthetic with glitch effects", color: "from-cyan-400 to-fuchsia-500" },
    { id: "aurora", name: "Aurora Theme", description: "Northern lights inspired with soft flowing gradients", color: "from-cyan-400 to-purple-500" },
    { id: "luxegold", name: "Luxe Gold Theme", description: "Luxury dark theme with gold accents and highlights", color: "from-amber-400 to-yellow-600" },
    { id: "starfield", name: "Starfield Theme", description: "Cosmic starry night sky with twinkling effects", color: "from-indigo-900 to-blue-800" },
    { id: "pastelpop", name: "Pastel Pop Theme", description: "Bright, friendly pastel colors with playful design", color: "from-pink-300 to-purple-300" },
    { id: "sketch", name: "Sketch Theme", description: "Hand-drawn wireframe style with paper and doodles", color: "from-gray-500 to-gray-700" },
    { id: "oceandepth", name: "Ocean Depth Theme", description: "Deep blue underwater aesthetic with floating bubbles", color: "from-blue-800 to-blue-950" },
    { id: "nature", name: "Nature Theme", description: "Leafy green eco-friendly design with organic elements", color: "from-green-700 to-green-900" },
    { id: "bubble", name: "Bubble Theme", description: "Playful floating bubbles with a fresh blue gradient", color: "from-blue-400 to-cyan-600" },
    { id: "cybergradient", name: "Cyber Gradient Theme", description: "Futuristic cyberpunk dashboard with grid pattern", color: "from-purple-800 to-indigo-900" },
    { id: "zen", name: "Zen Theme", description: "Calm, minimalist design with soft sky blue accents", color: "from-sky-100 to-blue-200" },
    { id: "festival", name: "Festival Theme", description: "Colorful celebration theme with confetti animation", color: "from-purple-600 to-pink-500" },
    { id: "firefly", name: "Firefly Theme", description: "Magical night scene with glowing firefly lights", color: "from-blue-950 to-gray-950" },
    { id: "watercolor", name: "Watercolor Theme", description: "Soft artistic watercolor wash with pastel hues", color: "from-rose-100 to-blue-100" },
    { id: "lavalamp", name: "Lava Lamp Theme", description: "Fluid, morphing blob animations in dark background", color: "from-purple-900 to-pink-900" },
    { id: "minimalwhite", name: "Minimal White Theme", description: "Ultra-clean white with thin lines and subtle shadows", color: "from-gray-50 to-white" },
    { id: "gradientglass", name: "Gradient Glass Theme", description: "Full gradient backdrop with floating frosted glass card", color: "from-purple-600 to-orange-400" },
    { id: "futuristicgrid", name: "Futuristic Grid Theme", description: "Sci-fi interface with perspective grid and blue accents", color: "from-blue-900 to-black" },
    { id: "vhs", name: "VHS Theme", description: "Retro VHS tape aesthetic with distorted glitch effects", color: "from-red-900 to-purple-900" },
    { id: "holographic", name: "Holographic Theme", description: "Rainbow holographic effect with glowing highlights", color: "from-blue-600 to-purple-600" },
    { id: "foilshimmer", name: "Foil Shimmer Theme", description: "Premium foil card with subtle rainbow shimmer", color: "from-gray-100 to-gray-300" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 tracking-tight">
            Bundlebit Theme Gallery
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Choose a theme to preview your Bundlebit profile. Each theme offers a unique visual style while maintaining functionality.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <Link 
              key={theme.id} 
              href={`/?theme=${theme.id}`}
              className="group block bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-indigo-500/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-800/70 hover:shadow-lg hover:shadow-indigo-500/10 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300" style={{ 
                backgroundSize: "200% 200%",
                backgroundPosition: "0% 0%",
                animation: "gradient-animation 5s ease infinite"
              }}></div>
              
              <div className={`mb-3 h-2 bg-gradient-to-r ${theme.color} rounded-full w-2/3 group-hover:w-full transition-all duration-500`}></div>
              <h2 className="text-xl font-bold mb-2">{theme.name}</h2>
              <p className="text-gray-400 text-sm">{theme.description}</p>
              <div className="mt-4 text-indigo-400 text-sm font-medium flex items-center justify-between">
                <span>Preview theme</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Default View
          </Link>
        </div>

        <footer className="mt-16 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
          <p>
            Created with React, TypeScript, and Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ThemeSelectorPage;