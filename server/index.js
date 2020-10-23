const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const ENV = process.env.NODE_ENV; //Provides information during the development phase
const PORT = process.env.PORT || 5000;