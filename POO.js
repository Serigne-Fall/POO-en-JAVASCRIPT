function Utilisateur(prenom,nom,email) {
    this.nom=nom;
    this.prenom=prenom;
    this.email=email;

}
//comme sePresenter est une methode qui est commun a tous les objets on peut le mettre dans prototype
Utilisateur.prototype.sePresenter=function (){
    console.log("Je m'appelle "+this.prenom+" "+this.nom+" vous pouvez me contacter sur cette adresse "+""+this.email);
}

var utilisateurA=new Utilisateur("Serigne","Fall","engires1813@gmail.com");
var utilisateurB=new Utilisateur("AWA","Fall","awa1813@gmail.com");

utilisateurA.sePresenter();utilisateurB.sePresenter();

//Creer un objet a partir de l'objet    =>   objet()

var produit=new Object();
produit.nom="Iphone 12 Pro Max";
produit.prix=560000;
console.log(produit)