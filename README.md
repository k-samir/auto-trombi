</br>
</br>

<div align="center">
  <picture>
    <img src="https://github.com/k-samir/auto-trombi/blob/main/img/auto-trombi.png" width="280" alt="Logo"/>
  </picture>
  
  <h3 align="center">A simple application to create a trombinoscope</h3>
  </a>
</div>

![autotrombi screenshot](https://github.com/k-samir/auto-trombi/blob/main/img/auto-trombi-screenshot.png)

## About The Project
auto-trombi is a web application that helps you visualize and manage your trombinoscope. A trombinoscope is a french word for a members directory with photos.

### Built With

<div>
<img src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</div>


# Getting started

## Prerequisites

### Install Node JS
Refer to https://nodejs.org to install nodejs

### Installation

1. Clone the project
```bash
 git clone https://github.com/k-samir/auto-trombi
```
2.Go to the project directory
```bash
 cd auto-trombi
```

3. Create two `.env` files locally one in the client folder and the other in the server folder. You can duplicate the `.env.example` in each folder and name the new copy `.env`. Adapt the variables to your needs. Two dataset are available in the server folder, `testing_data.json` with data and `data.json` an empty dataset to start from scratch. You can choose which one to use in the `.env`

## Run the app

### Run the server

Install dependencies

```bash
cd server
npm install
```

Start the server

```bash
node index.js
```

### Run the client

Install dependencies

```bash
cd ../client
npm install
```

Start the client

```bash
npm run dev
```

## Usage

A system of authentification is implemented in the application, the default credentials for the `testing_data` dataset are `admin` / `password`.

No user are in data.json, you just have to signup to create one.


You can now play with the local develop environment at: http://localhost:5173/.

## Authors

- [Samir KAMAR](https://github.com/k-samir)
---
