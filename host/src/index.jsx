import("./bootstrap")
  .then(() => console.log("[host] bootstrap imported"))
  .catch((e) => console.error("[host] bootstrap import failed", e));
