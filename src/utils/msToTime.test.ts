import { msToTime } from "./msToTime"



test('Проверка функции превращения миллисекунд в мин сек миллисекунды', ()=>{
    expect(msToTime(140521)).toEqual('02:20:521')
})


export {}