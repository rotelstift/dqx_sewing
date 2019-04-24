let mylib = {
  calDamage(id, fullDamage, damage){
    var fullDamageNum = new Number(fullDamage)
    var damageNum = new Number(damage)
    document.querySelector("#remainingDamage" + id).innerHTML = fullDamageNum + damageNum
  }
}

export default mylib
