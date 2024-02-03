import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import {User} from "../models/user.model.js";

const createUser = asyncHandler(async (req,resp) => {
    // get data from frontend
    const {name, email, phoneNo, salary} = req.body;

    // validation
    if(
        [name, email, phoneNo, salary].some((fields) => fields.trim() === "")
    ){
        throw new ApiError(400, 'All fields are required')
    }

    // check if user already exist

    const existedUser = await User.findOne({
        $or: [{name}, {email}]
    })

    if(existedUser){
        throw new ApiError(409, "User Already Exist")
    }

    // create user object
    const user = await User.create({
        name,
        email,
        phoneNo,
        salary
    })

    return resp.status(200).json(
        new ApiResponse(200, user, "User Created")
    )
})

const getAllUsers = asyncHandler(async (req,resp)=> {
    try{
        // mongodb query

        const users = await User.find({});

        // throw error if there is no users

        if(!users){
           return new ApiError(404, "Users not found")
        }

        return resp.status(200).json(
            new ApiResponse(200, users, "Users Data")
        )

    }catch (error){
        throw new ApiError(404, error, "Error to fetch users")
    }
})

const updateUser = asyncHandler(async (req,resp) => {
    // get id from params

    const userId = req.params.id;

    // check userId and update this id data

    const user = await User.findByIdAndUpdate(
        userId,
        req.body, {new: true}
    )

    // throw error if there is no user

    if(!user){
        return new ApiError(404, "User Not Found")
    }

    return resp.status(200).json(
        new ApiResponse(200, user, "User Updated")
    )
})

const deleteUser = asyncHandler(async (req, resp) => {
    try {
        // Get ID from params
        const userId = req.params.id;

        // Delete query
        const deletedUser = await User.findByIdAndDelete(userId);

        // Throw error if there is no user
        if (!deletedUser) {
            return new ApiError(404, "User Not Found")
        }

        return resp.status(200).json(
            new ApiResponse(200, "User Deleted")
        );
    } catch (error) {
        return new ApiError(500, error, "Error deleting user");
    }
});

export {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser
}