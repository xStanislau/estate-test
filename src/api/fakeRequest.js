export function  fakeRequest (time, data={}) {
    await new Promise((resolve) => setTimeout(()=>{
        resolve({data: data})
    }, time), )
}