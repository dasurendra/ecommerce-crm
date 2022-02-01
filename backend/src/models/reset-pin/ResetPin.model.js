import ResetPinSchema from './ResetPin.schema.js'
import { getRandomOTP } from '../../hlpers/opt.helper.js'

export const createUniqueReset = (userInfo) => {
  return ResetPinSchema(userInfo).save()
}

export const findUniqueReset = (userInfo) => {
  return ResetPinSchema.findOne(userInfo)
}

export const deleteUniqueReset = async (filter) => {
  const result = await ResetPinSchema.findOneAndDelete(filter)
  return result
}

export const createPasswordResetOTP = (email) => {
  const otpLength = 6
  const otp = getRandomOTP(otpLength)
  const obj = {
    otp,
    email,
  }

  return ResetPinSchema(obj).save()
}
