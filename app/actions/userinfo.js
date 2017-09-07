/**
 * Created by wangqiang on 2017/9/7.
 */
import * as actionTypes from '../constants/userinfo'

export function update(data) {
    return {
        type:actionTypes.USERINFO_UPDATE,
        data
    }
}