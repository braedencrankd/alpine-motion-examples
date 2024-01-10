import { Sandpack } from "@codesandbox/sandpack-react";
import { sandpackDark } from "@codesandbox/sandpack-themes";

import { files as exampleOne } from "./examples/example_01/files";
import { files as exampleTwo } from "./examples/example_02/files";
import { files as exampleThree } from "./examples/example_03/files";

function App() {
  return (
    <>
      <main className="container my-16 space-y-16">
        <h1 className="text-4xl font-black lg:text-5xl text-primary">
          Alpine Motion Plugin Examples
        </h1>
        <section>
          <h2 className="mb-8 text-2xl font-bold tracking-wide text-white">
            Example 1: Using the
            <span className="italic bg-primary text-neutral-800 mx-2 font-semibold px-1.5">
              $motion
            </span>
            Alpine magic 🪄
          </h2>
          <Sandpack
            files={exampleOne}
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
        <section>
          <h2 className="mb-8 text-2xl font-bold tracking-wide text-white">
            Example 2: Making things reactive with Alpine Data 💫
          </h2>
          <Sandpack
            files={exampleTwo}
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
        <section>
          <h2 className="mb-8 text-2xl font-bold tracking-wide text-white">
            Example 3: Using the{" "}
            <span className="italic bg-primary text-neutral-800 mx-2 font-semibold px-1.5">
              spring()
            </span>
            function 🐇
          </h2>
          <Sandpack
            files={exampleThree}
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
      </main>
    </>
  );
}

export default App;
