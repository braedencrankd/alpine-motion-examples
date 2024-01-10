import { files as globalFiles } from "../../global_files/files";
import { top, bottom } from "../../global_files/layout";

const html = `${top}
    <div x-data="{currentRotationPos: 0}">
      <div class="btn-group">
        <button
          class="btn btn-primary"
          @click="currentRotationPos += 90"
        >
          +90deg
        </button>
        <button
          class="btn btn-secondary"
          @click="currentRotationPos -= 90"
        >
          -90deg
        </button>
        <button
          class="btn btn-tertiary"
          @click="$motion('box-animation-one').pause()"
        >
          Pause
        </button>
      </div>
      <div
        id="box"
        x-motion:box-animation-one="{ rotate: currentRotationPos }, { duration: 1.5 }"
      ></div>
    </div>
${bottom}`;

export const files = {
  ...globalFiles,
  "index.html": html,
};
