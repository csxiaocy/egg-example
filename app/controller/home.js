'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const body = ctx.body;
    ctx.body = `<br>hi,egg${body}`;
  }
}

module.exports = HomeController;
