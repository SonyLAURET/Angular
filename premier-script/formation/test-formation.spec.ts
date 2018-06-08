import { Formateur, Connaissance } from './Formateur'
import { Formation } from './Formation'
import { Personne } from './Personne'
import { Boisson } from './Personne'
import { Stagiaire, Certification } from './Stagiaire'
import { Genre } from './Personne'
import { Religion } from './Personne'
import { expect } from 'chai'

var femme = new Personne('Sandrine', 'Dupont', Genre.Femme, Religion.Atheist);
it('retourne une personne', function () {
    let personneTest = new Personne('Duchene', 'Maxime', Genre.Homme, Religion.Islam);
    expect(personneTest.nom).equal('Duchene');
    expect(personneTest.prenom).equal('Maxime');
    expect(personneTest.genre).equal('Homme');
    expect(personneTest.religion).equal('Islam');
});

it('returne une personne qui boit une boisson sans alcool bio', function () {
    let boissonbio = new Boisson('Coca Life', false, true);
    expect(femme.boire(boissonbio)).equal('Coca Life est bio.');


});
it('return une personne qui boit une boisson est alcoolisée', function () {
    let alcool = new Boisson('Coca Life', true, false);
    expect(femme.boire(alcool)).equal('Coca Life est alcolisée');
})

it('returne une formation', function () {
    /*création d'un stagiaire */
    let certificationTest = new Certification("Art et histoire", 2015);
    let certificationTest2 = new Certification("jeux vidéo", 1996)
    let listCertif = new Array<Certification>();
    listCertif.push(certificationTest);
    listCertif.push(certificationTest2);
    let stagiaireTest = new Stagiaire(listCertif,femme.nom,femme.prenom,femme.genre,femme.religion);
    let stagiaire2 = new Stagiaire(listCertif,'Bla','Bla',Genre.Homme,Religion.Islam);
    let listStagiaire = new Array<Stagiaire>();

    listStagiaire.push(stagiaire2);
    listStagiaire.push(stagiaireTest);

    //création d'un formateur
    let connaissanceTest = new Connaissance("Physique",2);
    let connaissanceTest2 = new Connaissance("Mats",1);
    let listConnaissance = new Array<Connaissance>();

    listConnaissance.push(connaissanceTest);
    listConnaissance.push(connaissanceTest2);

    let formateur = new Formateur(listConnaissance);
    let listFormateur = new Array<Formateur>();
    listFormateur.push(formateur);

    //formation
    let formation = new Formation("jeux video",new Date('2016-12-17T08:24:00'),new Date('2017-03-17T17:30:00'),listStagiaire,listFormateur)
    expect(formation.nom).equal("jeux video");
    expect(stagiaire2.nom).equal("Bla");
});

