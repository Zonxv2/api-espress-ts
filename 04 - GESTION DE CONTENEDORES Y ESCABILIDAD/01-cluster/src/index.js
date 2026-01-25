import express from "express";
import cluster from "cluster";
import { cpus } from "os";

console.log(cpus().length);

const numCPUs = cpus().length;

const app = express();

const PORT = 8080;

if(cluster.isPrimary) {
  console.log(`PID Master: ${process.pid}`);
  
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code)=>{
    console.log(`Worker ${worker.process.pid} died with code ${code}`);
    cluster.fork();
  })

} else {
  app.get("/operacion-simple", (req, res) => {
    let sum = 0;
    for (let i = 0; i < 10000; i++) {
      sum += i;
    }
    res.json({ sum, pid: process.pid });
  });
  
  app.get("/operacion-compleja", (req, res) => {
    let sum = 0;
    for (let i = 0; i < 5000000000000; i++) {
      sum += i;
    }
    res.json({ sum, pid: process.pid });
  });

  app.get('/dead', (req, res)=>{
    res.send('ok')
    process.exit()
  })
  
  app.listen(PORT, () =>
    console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
  );

}
 
