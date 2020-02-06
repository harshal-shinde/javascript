const filterArr = (...args) =>{
  return args.filter(el => el ===1)
}

console.log(filterArr(1,2,3))