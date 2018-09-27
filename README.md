# Docker environment of Node Application + Express + React + Webpack-dev-serve


#
## Operating systems supported

This environment was tested in these operating systems:

- **Linux**:
    - Ubuntu 16.04
- **Mac**:
    - MacOS Sierra 10.12.6
- **Windows**:
    - Windows 7 Home Basic
    - Windows 10 Professional
#
## Requirements

In the host machine is necesary has this componets installed with this versions recommended:



| Component | Version recommended | Required |
| -------- | -------- | -------- |
| [Docker](https://docs.docker.com/install/)     | 17.12.0+     | X     |
| [Docker compose](https://docs.docker.com/compose/install/)     | 1.8.0+     | X     |


#
## How to use it
In this part i show how to use the environment, how execute the commands NPM for Node Application and React Application.

- **Commands**:
        
    - **Build and Start all containers**:
        You can start all containers in this environment, executing a command in the terminal:
        After enter in the root directory project, you must execute the command ***docker-compose up --build***. This command start all containers stopped.
        ```
        user@localhost:react-node-docker-app $ docker-compose up -build
        Successfully built bcd082dbd140
        Successfully tagged appapi:latest
        Creating react-node-docker-app_nodeapi_1
        Creating react-node-docker-app_reactapi_1
        Attaching to react-node-docker-app_reactapi_1, react-node-docker-app_nodeapi_1
        ```
         We notice that after execute the command display a output indicating the starting process of the containers.
         
- **Enter and use the application**:
        
    - **View the Node Home**:
        Enter in the browser bar address the server_name with its port corresponding.
        ```
            http://localhost:3000
        ```
        
    - **View the React Home**:
        Enter in the browser bar address the server_name with its port corresponding.
        ```
            http://localhost:8080
        ```
