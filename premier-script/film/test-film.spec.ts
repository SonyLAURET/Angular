import {Films} from './Films'
import {Trailers} from './Trailers'
import {expect} from 'chai'

it("retourn un film",function(){
    let trailerTest = new Trailers(new Date('1995-12-17T03:24:00'),"/trailers/lions_gate/12rounds3lockdown/","Trailer",false,true);
    let filmTest = new Films('chai',new Date('2012-12-17T03:24:00'),'ghilbi','image','/image','R',['anime'],'stephen king',['Maxime Duchene','Valentin Bourdaud','Géroud','Quentin'],trailerTest);
    expect(filmTest.title).equal('chai');
})