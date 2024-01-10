import { files as globalFiles } from "../../global_files/files";
import { top, bottom } from "../../global_files/layout";

const html = `${top}
    <div x-data>
      <div class="btn-group">
        <button
          class="btn btn-primary"
          @click="$motion('box-animation-one').play()"
        >
          Play
        </button>
        <button
          class="btn btn-secondary"
          @click="$motion('box-animation-two').play()"
        >
          Reverse
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
        x-motion:box-animation-one.rotate.90deg.duration.1500ms
        x-motion:box-animation-two.rotate.-90deg.duration.1500ms
      ></div>
    </div>
${bottom}`;

export const files = {
  ...globalFiles,
  "index.html": html,
};
