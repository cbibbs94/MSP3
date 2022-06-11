const router = require('express').Router()
const db = require('../models/SequlizeORM')
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')

const { User } = db


