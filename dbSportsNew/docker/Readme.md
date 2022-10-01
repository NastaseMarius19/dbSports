## Info Docker

# Info about compose up command
We use a Docker compose file *docker-compose.yml* inside docker folder
( backend/docker/).
Then, we run the command **docker compose up** in the same directory
where the docker-compose.yml file is located.
```
cd 𝘱𝘢𝘵𝘩-𝘸𝘩𝘦𝘳𝘦-𝘸𝘦-𝘩𝘢𝘷𝘦-𝘥𝘰𝘤𝘬𝘦𝘳-𝘧𝘰𝘭𝘥𝘦𝘳-𝘴𝘢𝘷𝘦𝘥/backend/docker
docker compose up
```

# Starting the database server
For creating the server, we are setting the following features:  
    - **dbSports-server** for the field name  
    - the name of container for host name/address: **postgres**  
    - port: **5432**  
    - maintenance database: **my_db**   
    - username and password: **root**   
          
![c8f8cc4c-8f4a-4e6a-b871-ccba5ad0be4c](https://user-images.githubusercontent.com/74776468/193236702-aed989f3-e1f3-445b-ae96-30c90307b61a.jpg)
![7589b8be-964b-4ca0-8d6d-a90876607539](https://user-images.githubusercontent.com/74776468/193236744-d2bfbd0a-fccd-4ff9-8e97-cd0b3248eb86.jpg)

# How to connect to page admin
For accessing the pgadmin4, we use the URL http://localhost:5050/ and
the **admin@admin.com** for the email address and **admin** for password to
log in.

# Disconnect from database server
![d4a10acc-2449-418b-a5be-be36b974b9a1](https://user-images.githubusercontent.com/74776468/193236505-48f7e8d6-11a5-480d-b3b0-86f0bbfaa8c0.jpg)

