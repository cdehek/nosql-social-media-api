const { Schema, model } = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: 'Please fill this out!'
      },
      email: {
        type: String,
        unique: true,
        required: 'Please enter an email.',
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
      },
      thoughts: [
          {
              type: Schema.Types.ObjectId,
              ref: 'Thoughts'
          }
      ],
      friends: [
          {
              type: Schema.Types.ObjectId,
              ref: 'User'
          }
      ]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
  );

  // create User model using UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User; 