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
      note: "Currently this example won't work in the embeded sandbox. You can view it on CodeSandbox by clicking the Open SandBox button button below.",
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
                  "@braedencrankd/alpine-motion": "latest",
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
