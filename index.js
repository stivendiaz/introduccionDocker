const IORedis = require('ioredis');
const express = require('express');

const app = express();
const redis = new IORedis({ host: 'redispc' });

app.get('/', (_req, res) => {
  const n = Math.random();
  const message = `Numero generado: ${n}`;
  console.log(message);

  redis.set('n', n, (error) => {
    if (error) {
      throw error;
    }

    res.send(message);
  });
});

app.listen(3000, () => {
  console.log('App ready on port 3000');
});
