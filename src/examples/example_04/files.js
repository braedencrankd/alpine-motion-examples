import { files as globalFiles } from "../../global_files/files";
import { top, bottom } from "../../global_files/layout";

const html = `${top}
    <div x-data>
      <div class="btn-group">
        <button
          class="btn btn-primary"
          @click="$timeline(['timeline-animation-one', 'timeline-animation-two'], {duration: 2})"
        >
          Trigger Timeline
        </button>
      </div>
      <div class="box-group">
        <div x-motion:timeline-animation-one="{scale: [1, 1.2]}, {easing: spring()}"
            style="margin-bottom: 2rem;"
            id="box"></div>
        <div x-motion:timeline-animation-two="{scale: [1, 1.2]}, {at: 0.14}, {easing: spring()}"
            id="box"></div>
      </div>
    </div>
${bottom}`;

export const files = {
  ...globalFiles,
  "index.html": html,
};
