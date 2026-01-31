class arpita {
  // properties
  myname = "Rupayan";
  wifename = "Arpita";
  #momname = "Pratima ";

  constructor(newname,newwife,newmom) {
    this.myname=newname;
    this.wifename = newwife;
    this.#momname = newmom;
  }

  get fetcname(){
    return this.#momname;
}
}

let obj = new arpita("Rupayan Bera","Arpita Bhatachariya","Pratima Bera");
console.log(obj.wifename);
let love =obj.fetcname;
console.log(love);