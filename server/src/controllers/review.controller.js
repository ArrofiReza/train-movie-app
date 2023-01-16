import responseHandler from '../handlers/request.handler.js'
import reviewModel from '../models/review.model.js'

const create = async(req, res) =>{
    try {
        const {movieId} = req.params

        const review = new reviewModel({
            user: req.user.id,
            movieId,
            ...req.body
        })

        await review.save()

        responseHandler.created(res, {
            ...review._doc,
            id:review.id,
            user:req.user
        })
    } catch {
        responseHandler.error(res)
    }
}

const remove = async(req, res) =>{
    try {
        const review = await reviewModel.findOne({
            _id:review.id,
            user: req.user.id
        })

        if(!review) return responseHandler.notfound(res)

        responseHandler.ok(res)
    } catch {
        responseHandler.error(res)
    }
}

const getReviewOfUser = async(req, res) =>{
    try {
        const reviews = await reviewModel.find({
            user:req.user.id
        }).sort("-createdAt")

        responseHandler.ok(res)
    } catch {
        responseHandler.error(res)
    }
}

export default {create, remove, getReviewOfUser}