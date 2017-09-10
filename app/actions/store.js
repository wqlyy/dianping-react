/**
 * Created by wangqiang on 2017/9/10.
 */

import * as actionsTypes from '../constants/store'

export function update(data) {
    return {
        type:actionsTypes.STORE_UPDATE,
        data
    }
}

export function add(item) {
    return {
        type:actionsTypes.STORE_ADD,
        data:item
    }
}

export function remove(item) {
    return {
        type:actionsTypes.STORE_RM,
        data:item
    }
}