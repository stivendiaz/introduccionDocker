# Demo Docker node & redis

Iniciar redis desde consola:
  docker run --rm --name redispc -p 0.0.0.0:6379:6379 redis

Conectarse a redis:
  docker run -it --rm --link redispc redis redis-cli -h redispc

Compilar proyecto:
  docker build -t lab .

Correr app:
  docker run --rm --link redispc -p 0.0.0.0:3000:3000 lab

Listar contenedores activos:
  docker container ls

Pausar contenedor:
  docker container pause <container_id>

Detener contenedor:
  docker container stop mongodb

## Referencias
  https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
  https://docs.docker.com/get-started/part2
  https://docs.docker.com/compose/gettingstarted/
