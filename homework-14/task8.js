async function runSequentially(tasks){
    const arr = [];

    for (let task of tasks){
        const num = await task()
        arr.push(num)
    }
    return arr;
};


const tasks = [
    () => new Promise(r => setTimeout(() => r(1), 300)),
    () => new Promise(r => setTimeout(() => r(2), 100)),
    () => new Promise(r => setTimeout(() => r(3), 200)),
];

runSequentially(tasks)
        .then(res=>{
            console.log(res)

        })