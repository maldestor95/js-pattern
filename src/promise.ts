

const asyncFunction = (data: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (data == 'fail') reject('Fail delay')
        setTimeout(resolve, 1500, 'funky');
    });
}

const promiseFunction = async (inputString: string): Promise<{ err: string | null, res: string | null }> => {
    try { 
        await asyncFunction(inputString) 
    }
    catch  {
        return { err: "Fail asyncFunction", res: null }
    }
    return { err: null, res: "success" }
}

promiseFunction('fail').then((res)=>{console.log(res)})
promiseFunction('TATA').then((res)=>{console.log(res)})
