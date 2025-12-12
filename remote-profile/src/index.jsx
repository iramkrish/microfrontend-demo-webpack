import("./bootstrap")
  .then(() => console.log("[remote-profile] bootstrap imported"))
  .catch((e) => console.error("[remote-profile] bootstrap import failed", e));
