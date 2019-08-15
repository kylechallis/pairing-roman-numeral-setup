"use strict"
var chai = require('chai')
var sinon = require('sinon')
var sinonChai = require('sinon-chai')

chai.use(sinonChai)

Object.assign(global, {
  assert: chai.assert,
  expect: chai.expect,
  sinon: sinon
})