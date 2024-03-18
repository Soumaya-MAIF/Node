let voiture ={
    chevaux: 4,
    annee: 2024,
    energie: "diesel",
    a: ()=>console.log(this, this.energie),
    b: function () {
        console.log(this, this.energie)        
    }
}

let {chevaux,annee, energie}= voiture;
console.log(annee, energie);