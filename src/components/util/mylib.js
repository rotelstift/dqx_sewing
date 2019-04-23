let mylib = {
  calDamage(id, fullDamage, damage){
    document.querySelector("#remainingDamage" + id).innerHTML = fullDamage - damage
  }
}

export default mylib
