import {baseURL} from './config.js'
import { get, post } from './promise.js'

/**
 * 获取openid
 * @returns {Promise} 返回Promise实例
*/
export function getOpenid (code) {
  return new Promise((resove, reject) => {
    post({
      url: baseURL + '/openid',
      data: { code },
      header: {
        "chennel":"miniprogram"
      }
    }).then(res => {
      if (res.err_code == 0) {
        resove(res.openid)
        return
      }
      reject(res)
    }).catch( err => {
      reject(err)
    })
  })
}

/**
 * 获取用户认证状态
 * @returns {Promise} 返回Promise实例
*/
export function checkOpenid (openid) {
  return get({
    url: baseURL + '/openid',
    data: { openid }
  })
}

/**
 * 获取短信验证码
 * @param {String} tel 手机号 必填
 * @param {String} templateId 模板ID 默认578978绑定手机号  579001解绑手机号
 * @returns {Promise} 返回Promise实例
*/
export function getSmsCode (tel, templateId='1458536') {
  return get({
    url: baseURL + '/sms',
    data: {
      tel: tel,
      templateId: templateId
    }
  })
}

/**
 * 验证手机号是否已被注册
 * @param {String} tel 手机号 必填
 * @returns {Promise} 返回Promise实例
*/
export function checkTel (tel) {
  return get({
    url: baseURL + '/tel',
    data: { tel }
  })
}


/**
 *  验证数据库内是否含有该学生/教师
 *  @param {Object} idInfo 身份信息 必填
 *  @returns {Promise} 返回Promise实例
*/
export function checkIdentity (idInfo) {
  return get({
    url: baseURL + '/identity',
    data: idInfo
  })
}


/**
*  身份认证
*  @param {Object} userInfo 身份信息 必填
*  @returns {Promise} 返回Promise实例
*/
export function register (userInfo) {
 return post({
   url: baseURL + '/register',
   data: userInfo
 })
}

/**
*  每日打卡
*  @param {String} openid openid
*  @returns {Promise} 返回Promise实例
*/
export function punch (openid) {
  return get({
    url: baseURL + '/punch',
    data: {openid}
  })
}

/**
*  查看班级内的学生
*  @param {String} classId 班级ID
*  @returns {Promise} 返回Promise实例
*/
export function findStudent (classId) {
  return get({
    url: baseURL + '/findStudent',
    data: {classId}
  })
}