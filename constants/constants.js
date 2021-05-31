export const languages = [
  { value: "cpp", label: "C++" },
  { value: "c", label: "C" },
  { value: "java", label: "Java" },
  { value: "python", label: "Python" },
  { value: "webd", label: "Web Development" },
];

const themesList = [
  "dracula",
  "cobalt",
  "monokai",
  "tomorrow_night",
  "tomorrow_night_blue",
  "nord_dark",
  "tomorrow_night_eighties",
  "vibrant_ink",
];
export const themes = themesList.map((theme) => {
  const label = theme.split("_").join(" ");
  return { value: theme, label };
});

const fontsList = [
  "Consolas",
  "Jetbrains Mono",
  "Hack",
  "Monaco",
  "IBM Plex Mono",
  "Cascadia Code",
  "Source Code Pro",
  "Fira Code",
  "Menlo",
  "Courier",
  "Inconsolata",
];
export const fonts = fontsList.map((font) => ({ value: font, label: font }));

export const htmlPreview =
  '<h1 class="heading1">Heading tag</h1>\n<p>Paragraph tag</p>\n\n<ol id="list1">\n\t<li>Item1</li>\n\t<li>Item 2</li>\n\t<li>Item 3</li>\n</ol>';

export const cssPreview =
  "html,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nh1 {\n\tfont-family: serif\n}";

export const jsPreview =
  'const btn1 = document.querySelector(".btn");\nbtn1.addEventListener(\'click\', () => {\n\t  console.log("Buttonclicked");\n})';
