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

const numCpu = cpus().length + 2

if (cluster.isPrimary) {
  console.log('Primary process is running');

  for (let i = 0; i < numCpu; i++) {
    cluster.fork();
  }
} else {
  server.listen(PORT, () => {
    console.log(
      `[ App ⚙️ ${process.pid} ] -> listening at https://localhost:${PORT} 🚀 pid: ${process.pid}`)
  });
}

cluster.on('exit', (worker, code, signal) => {
  console.log(`\n[ Worker ⚙️ ${worker.process.pid}] died with code: ${code}, and signal: ${signal}`);
  console.log('\nStarting a new worker');
  cluster.fork();
});


