process.env.NODE_ENV="dev"
let nodeenv = process.env.NODE_ENV;

let config=null
if(nodeenv==="production"){
    config=require("./prod")
}else{
    config=require("./dev")
}

module.exports=config
