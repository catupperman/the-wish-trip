const { User } = require('../models/User');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        me: async (parents, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id }).select("-password");
                return userData;
            }
            throw new AuthenticationError("Not logged in.")
        }
    },
    Mutaion: {
        addUser: async (parent, args) => {
            const newUser = await User.create(args);
            const token = signToken(newUser);

            return { token, newUser };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError("No user found.");
            }
            const correctPw = await User.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError("Incorrect password.");
            }
            const token = signToken(user);
            return { token, user };
        },
        savedTrip: async (parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedTrips: args.tripData } },
                    { new: true, runValidators: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError("You must be logged in.");
        },
        deleteTrip: async (parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedTrips: { _id: args.trip._id } } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError("You must be logged in.")
        },
    },
};