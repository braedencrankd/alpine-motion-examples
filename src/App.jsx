import { Sandpack } from "@codesandbox/sandpack-react";
import { sandpackDark } from "@codesandbox/sandpack-themes";

import { files as exampleOne } from "./examples/example_01/files";
import { files as exampleTwo } from "./examples/example_02/files";
import { files as exampleThree } from "./examples/example_03/files";
import { files as exampleFour } from "./examples/example_04/files";

function App() {
  const sections = [
    {
      title: (
        <>
          Example 1: Using the{" "}
          <span className="px-2 mx-2 text-background bg-primary">$motion</span>{" "}
          Alpine magic 🪄
        </>
      ),
      note: "",
      files: exampleOne,
    },
    {
      title: "Example 2: Making things reactive with Alpine Data 💫",
      note: "",
      files: exampleTwo,
    },
    {
      title: "Example 3: Using the spring() function 🐇",
      note: "",
      files: exampleThree,
    },
    {
      title: (
        <>
          Example 4: Using the
          <span className="px-2 mx-2 text-background bg-primary">
            $timeline
          </span>
          magic ⏰
        </>
      ),
      note: "",
      files: exampleFour,
    },
  ];

  return (
    <>
      <main className="container my-16 space-y-16">
        <h1 className="text-4xl font-black lg:text-5xl text-primary">
          Alpine Motion Plugin Examples
        </h1>

        {/* Install Instructions */}
        <section>
          <h2 className="mb-8 text-2xl font-bold tracking-wide text-white">
            Install Instructions
          </h2>

          <p className="text-lg text-gray-300">
            To view the examples, click on the "Open Sandbox" button below each
            example.
          </p>

          {/* Install package */}
          <div className="flex flex-col gap-4 mt-4">
            <p className="text-lg text-gray-300">
              To install the package, run the following command:
            </p>
            <div className="relative">
              <pre className="p-4 text-lg text-gray-300 bg-gray-800 rounded-md">
                npm install @braedencrankd/alpine-motion
              </pre>
              <button
                onClick={(event) => {
                  navigator.clipboard.writeText(
                    "npm install @braedencrankd/alpine-motion"
                  );
                  const btn = event.target;
                  btn.textContent = "Copied!";
                  setTimeout(() => {
                    btn.textContent = "Copy";
                  }, 2000);
                }}
                className="absolute top-2 right-2 px-2 py-1 text-sm text-gray-300 bg-gray-700 rounded-md transition-colors hover:bg-gray-600"
              >
                Copy
              </button>
            </div>
          </div>

          {/* Alpine extension install  */}
          <div className="flex flex-col gap-4 mt-8">
            <p className="text-lg text-gray-300">
              Then add the plugin to your Alpine installation:
            </p>
            <div className="relative">
              <pre className="p-4 text-lg text-gray-300 bg-gray-800 rounded-md">
                {`import Alpine from 'alpinejs'
import { Motion } from '@braedencrankd/alpine-motion'

Alpine.plugin(Motion)
Alpine.start()`}
              </pre>
              <button
                onClick={(event) => {
                  navigator.clipboard.writeText(
                    `import Alpine from 'alpinejs'
import { Motion } from '@braedencrankd/alpine-motion'

window.Alpine = Alpine;
Alpine.plugin(Motion)
Alpine.start()`
                  );
                  const btn = event.target;
                  btn.textContent = "Copied!";
                  setTimeout(() => {
                    btn.textContent = "Copy";
                  }, 2000);
                }}
                className="absolute top-2 right-2 px-2 py-1 text-sm text-gray-300 bg-gray-700 rounded-md transition-colors hover:bg-gray-600"
              >
                Copy
              </button>
            </div>
          </div>
        </section>

        {sections.map((section, index) => (
          <section key={index}>
            <h2 className="mb-8 text-2xl font-bold tracking-wide text-white">
              {section.title}
            </h2>
            {section.note && (
              <p className="mb-8 text-lg text-gray-300">{section.note}</p>
            )}
            <Sandpack
              files={section.files}
              theme={sandpackDark}
              template="vite"
              customSetup={{
                dependencies: {
                  alpinejs: "3.13.3",
                  "@braedencrankd/alpine-motion": "0.2.0",
                },
              }}
              options={{
                visibleFiles: ["/index.js", "/index.html"],
                activeFile: "/index.html",
              }}
            />
          </section>
        ))}
      </main>
    </>
  );
}

export default App;
