/**
 * Created by wangqiang on 2017/9/7.
 */

export default {
    getItem:function(key){
        let value;
        try{
            value = localStorage.getItem(key)
        }catch (ex){
            if(__DEV__){
                console.error('localStorage.getItem has error,Error:',ex.message)
            }
        }finally {
            return value
        }
    },
    setItem:function (key,value) {
        try{
            // ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
            localStorage.setItem(key,value)
        }catch (ex){
            if(__DEV__){
                console.log('localStorage.setItem has error,Error:',ex.message)
            }
        }
    }
}