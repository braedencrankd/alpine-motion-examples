import "./style.css";

import Alpine from "alpinejs";
import alpineMotion from "@braedencrankd/alpine-motion";

Alpine.plugin(alpineMotion);

window.Alpine = Alpine;
Alpine.start();
