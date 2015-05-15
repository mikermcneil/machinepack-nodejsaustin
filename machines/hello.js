module.exports = {


  friendlyName: 'Hello',


  description: 'Say hello on the console.',


  cacheable: false,


  sync: true,


  idempotent: false,


  inputs: {

    msg: {
      friendlyName: 'Message',
      description: 'The message to be logged.',
      example: 'hello world',
      required: true
    }

  },


  exits: {

    success: {
      description: 'Done.'
    },

  },


  fn: function (inputs,exits) {
    console.log(inputs.msg);
    return exits.success();
  },



};
