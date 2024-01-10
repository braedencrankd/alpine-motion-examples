import { files as globalFiles } from "../../global_files/files";
import { top, bottom } from "../../global_files/layout";

const html = `${top}
    <div x-data>
      <div class="btn-group">
        <button
          class="btn btn-primary"
          @click="$motion('box-animation-one').play()"
        >
          Forward
        </button>
        <button
          class="btn btn-secondary"
          @click="$motion('box-animation-two').play()"
        >
          Backwards
        </button>
      </div>
      <div
        id="box"
        x-motion:box-animation-one="{rotate: 90}, {easing: spring()}"
        x-motion:box-animation-two="{rotate: -90}, {easing: spring({stiffness: 100})}"
      ></div>
    </div>
${bottom}`;

export const files = {
  ...globalFiles,
  "index.html": html,
};
