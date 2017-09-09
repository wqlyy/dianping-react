import { get } from '../get'

export function getAdData() {
    const result = get('/api/homead')
    return result
}

export function getListData(page,city) {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
    return result
}