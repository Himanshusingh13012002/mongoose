const mongoose = require('mongoose');

// MongoDB connection URI
//third
const mongoURI = "mongodb+srv://himanshusingh13012002:1234!%40%23%24Abcd@cluster0.bq2hogx.mongodb.net/";

// Connect to MongoDB server
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  // Call the function to create a new user after connection is established
  createUser();
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Define a Mongoose schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
     unique: false
  },
  age: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a Mongoose model based on the schema
const User = mongoose.model('User', userSchema);


/*
async function createUser() {
  try {
    // Create a new user instance
    const newUser = new User({
      name: 'Alice',
      email: 'alice@example.co',
      age: 25
    });
    // Save the new user to the database
    const result = await newUser.save();
    console.log('User created successfully:', result);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

createUser();
*/

//inser many

async function createUsers() {
    try {
      // Array of user objects to insert
      const users = [
        
        { name: 'Bob', email: 'bob@example.com', age: 30 },
        { name: 'Charlil', email: 'charlie@example.com', age: 30 }
      ];
  
      // Insert multiple users into the database
      const result = await User.insertMany(users);
      console.log('Users created successfully:', result);
    } catch (error) {
      console.error('Error creating users:', error);
    }
  }
  


  createUsers();
  

  /*
  //findone
  async function findUserByEmail(email) {
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        console.log('User found:', user);
      } else {
        console.log('User not found');
      }
    } catch (error) {
      console.error('Error finding user:', error);
    }
  }
  
  // Example usage
  findUserByEmail('alice@example.com');
  */

/*fina all
  async function findUserByEmail(email) {
    try {
      const user = await User.find({}).select({ name: 1, email: 1 }).limit(2).skip(2).sort({name:-1});
      if (user) {
        console.log('User found:', user);
      } else {
        console.log('User not found');
      }
    } catch (error) {
      console.error('Error finding user:', error);
    }
  }
  
  // Example usage
  findUserByEmail('alice@example.com');
  */
 /*
UPDATE MANY
  async function updateFirstUserByEmail(email, updateFields) {
    try {
      const result = await User.updateMany({}, { $set: updateFields });
      console.log(result.nModified + ' document updated');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }
  
  // Example usage
  const updateFields = { age: 30 }; // New age value
  updateFirstUserByEmail('alice@example.com', updateFields);
  */
/*UPDATEONE
  async function updateFirstUserByEmail(email, updateFields) {
    try {
      const result = await User.updateOne({ email: email }, { $set: updateFields });
      console.log(result.nModified + ' document updated');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }
  
  // Example usage
  const updateFields = { age: 3 }; // New age value
  updateFirstUserByEmail('alice@example.com', updateFields);
  */
/*
  async function deleteUserByEmail(email) {
    try {
      const result = await User.deleteMany({  });
      console.log(result.deletedCount + ' document deleted');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
  
  // Example usage
  deleteUserByEmail('alice@example.com'); // Delete a user with the specified email
  */


/*
  async function deleteUserByEmail(email) {
    try {
      const result = await User.deleteOne({ email: email });
      console.log(result.deletedCount + ' document deleted');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
  
  // Example usage/*
  deleteUserByEmail('alice@example.com'); // Delete a user with the specified email
  
*/
  


  
  




