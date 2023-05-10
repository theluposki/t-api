import * as dotenv from 'dotenv'
import app from "./app.js"
import { readFileSync }from "node:fs"
import https from "node:https"
import cluster from "node:cluster"
import { cpus } from "node:os"

dotenv.config()
const PORT = process.env.PORT || 3000

const options = {
  key: readFileSync("./server.key"),
  cert: readFileSync("./server.crt")
};

const server = https.createServer(options, app)


if (cluster.isPrimary) {
  const numCpu = cpus().length + 2
  console.log(`\n\nPrimary process is running -> listening at 🚀 https://localhost:${PORT} 🚀`);
  console.log(`Primary cluster setting up ${numCpu} workers...\n`)

  for (let i = 0; i < numCpu; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`\n[ Worker ⚙️ ${worker.process.pid}] died with code: ${code}, and signal: ${signal}`);
    console.log('\nStarting a new worker - ⚙️\n');
    cluster.fork();
  });

} else {
  server.listen(PORT, () => {
    console.log(
      `[ Worker ⚙️ ] -> pid: ${process.pid} 🚀 -`)
  });
}
