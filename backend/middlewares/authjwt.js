const express = require('express');
const HttpStatus = require('http-status-codes');

const db = require("../model");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const Role = db.role;