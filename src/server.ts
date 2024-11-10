import app from "./app";

const port = 5000;

async function main() {
  app.listen(port, () => {
    console.log("library is open in port:", port);
  });
}

main();
