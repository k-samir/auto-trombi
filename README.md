</br>
</br>

<div align="center">
  <picture>
    <img src="" width="280" alt="Logo"/>
  </picture>
  </a>
</div>

<h2>A simple app to create groups</h2>

## Getting started

Clone the project into local

## Prerequisites

### Install Node JS
Refer to https://nodejs.org to install nodejs


## Configuration ⚙️
Create two `.env` files locally one in the client folder and the other in the server folder. You can duplicate the `.env.example` in each folder and name the new copy `.env`. Adapt the variables to your needs.

Two dataset are available in the server folder, `testing_data.json` with data filled and `data.json` an empty dataset to start from scratch.
You can choose which one to use in the `.env`

## Run Locally

Clone the project

```bash
  git clone https://github.com/k-samir/auto-trombi
```

Go to the project directory

```bash
  cd auto-trombi
```

# Run the server

Install dependencies

```bash
  cd server
  npm install
```

Start the server

```bash
  node index.js
```

# Run the client

Install dependencies

```bash
  cd ../client
  npm install
```

Start the client

```bash
  npm run dev
```

default user admin / admin in testing_data, no user in data.json


You can now play with the local develop environment at: http://localhost:5173/.

## Authors

- [Samir KAMAR](https://github.com/k-samir)



---
