
//Animal(nombresDePattes,poids)
//Oiseau(nombresDePattes,poids/longueurDesAilles)
// Mamifere(nombresDePattes,poids/typeDePoils)

function Animal(nombresDePattes,poids) {
    this.nombresDePattes=nombresDePattes;
    this.poids=poids;
}
Animal.prototype.sePresenter=function (){
    console.log("Je suis un oiseau,j'ai "+" "+this.nombresDePattes+" "+"pattes"+" et je pese "+this.poids+".");
}
function Oiseau(nombresDePattes,poids,longueurDesAilles){
    Animal.call(this,nombresDePattes,poids);
    this.longueurDesAilles=longueurDesAilles;
}
Oiseau.prototype= Object.create(Animal.prototype)
Oiseau.prototype.constructor=Oiseau.constructor

function Mamifere(nombresDePattes,poids,typeDePoils) {
    Animal.call(this,nombresDePattes,poids);
    this.typeDePoils=typeDePoils;
}
var peroquet=new Oiseau(2,"1kg","grande");
console.log(peroquet);
peroquet.sePresenter()