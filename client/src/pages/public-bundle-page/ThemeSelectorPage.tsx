import { Link } from "react-router-dom";
import themes from "./themes.json";

const ThemeSelectorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 tracking-tight">
            Bundlebit Theme Gallery
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Choose a theme to preview your Bundlebit profile. Each theme offers
            a unique visual style while maintaining functionality.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <Link
              key={theme.id}
              to={`/?theme=${theme.id}`}
              className="group block bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-indigo-500/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-800/70 hover:shadow-lg hover:shadow-indigo-500/10 overflow-hidden relative"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 0%",
                  animation: "gradient-animation 5s ease infinite",
                }}
              ></div>

              <div
                className={`mb-3 h-2 bg-gradient-to-r ${theme.color} rounded-full w-2/3 group-hover:w-full transition-all duration-500`}
              ></div>
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
            to="/"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Default View
          </Link>
        </div>

        <footer className="mt-16 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
          <p>Created with React, TypeScript, and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
};

export default ThemeSelectorPage;
