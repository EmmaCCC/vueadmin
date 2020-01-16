module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  module: {
    rules: [{ test: /\.scss$/, loaders: ["style", "css", "sass"] }]
  }
};
