const jsoncb = {
        name: 'first',
        args: [],
        path:'chemin ...'
    }


jsoncb['GET']=function () {
    console.log('GET ' + this.path)
}

jsoncb['POST']=function (data) {
    console.log('POST ' + data)
}

function testcb(cbName,args) {
    if (!Object.keys(jsoncb).includes(cbName)) {console.log(`function ${cbName} unknown!`)}
    else {
        jsoncb[cbName](args)
    }
}

testcb('GET')
testcb('POST','new Data')
testcb('DATA')