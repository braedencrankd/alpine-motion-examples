const js = `
import Alpine from "alpinejs";
import alpineMotion from "@braedencrankd/alpine-motion";
    
Alpine.plugin(alpineMotion);
    
window.Alpine = Alpine;
Alpine.start();
`;

const styles = `
*,
*:before,
*:after {
  box-sizing: border-box;
}

* {
  font-family: "Nunito Sans";
  font-size: 100%;
}

body {
  --black: #0f1115;
  --splash: #00ffdb;
  --alt-splash: #44cdff;

  --background: var(--black);
  --primary: #fff208;
  --secondary: #5238f8;

  background: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
}

.btn {
  border: 0;
  cursor: pointer;
  line-height: 0;
  padding: 1.2rem 1.5rem;
  border-radius: 0.25rem;
  font-weight: 600;
}

.btn-primary {
  background-color: var(--primary);
}

.btn-secondary {
  background-color: var(--secondary);
  color: white;
}

.btn-tertiary {
  background-color: white;
}

.box-group {
  display: flex;
  gap: 2rem;
}

#box {
  width: 100px;
  height: 100px;
  position: relative;

  &::after,
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0px;
  }

  &::before {
    z-index: -10;
    scale: 1.05;
    border-radius: 10px;
    background: linear-gradient(var(--splash), var(--alt-splash));
    filter: blur(4px);
  }

  &::after {
    border-radius: 10px;
    background-color: var(--splash);
  }
}`;

export const files = {
  "index.js": js,
  "styles.css": styles,
};
