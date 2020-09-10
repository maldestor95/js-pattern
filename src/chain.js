let obj=()=>{
    let  i=0
    function add(j){
        i +=j
        return this
    }
    function sub(j) {
        i-=j
        return this
    }
    function print() {
console.log(i)
    }
    return {add:add,sub:sub,print:print}
}

let t=obj()

t.add(2).sub(2).print()