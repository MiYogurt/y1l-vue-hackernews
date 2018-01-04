const VueSSRConfig = require("./vue-ssr.config");
const server = require("y1l").default;

const app = server(VueSSRConfig);
