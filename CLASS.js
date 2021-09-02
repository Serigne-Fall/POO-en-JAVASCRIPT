class Utilisateur{

    constructor(nom,prenom,email) {
        this.nom=nom;
        this.prenom=prenom;
        this.email=email;
    }
    sePresenter(){
        console.log("je m'appelle "+this.prenom+" "+this.nom+" "+" vous pouvez me contacter avec l'adresse mail :"+this.email)
    }
}
class Animal{
    constructor(nombresDePattes,poids) {
        this.nombresDePattes=nombresDePattes;
        this.poids=poids;
    }
    get getNombresDePattes(){
        return this.nombresDePattes;
    }
    get getPoids(){
        return this.poids;
    }
    set setNombresDePattes(nombresDePattes){
        this.nombresDePattes=nombresDePattes;
    }
    set setPoids(poids){
        this.poids=poids;
    }


    sePresenter(){
        console.log("cette animal a "+this.nombresDePattes+" "+"et pese "+this.poids)
    }
}
class Oiseau extends Animal{
    constructor(nombresDePattes,poids,tailleDesAilles) {
        super(nombresDePattes,poids);
        this.tailleDesAilles=tailleDesAilles;
    }
    Voler(){
        console.log("L'oiseau vole");
    }
}

let Peroquet=new Oiseau(2,"17kg","grande");

console.log(Peroquet.sePresenter())
Peroquet.setPoids="87kg";
console.log(Peroquet.sePresenter())
console.log(Peroquet.getNombresDePattes)
console.log(Peroquet.Voler())