//testtesttesttest
let szacunek = 0;
let perKlik = 1;
let perSecond = 0;
let kasaGlobalna = 0;
let kasa = 0;
let koparka = 0;
let palarnia = 0;
let kosztUlepszenia1 = 50;
let kosztUlepszenia2 = 100;
const divSzacunek = document.getElementById("respect");
const divHajs = document.getElementById("hajs");
const divPerClick = document.getElementById("per_click");
const divPerSecond = document.getElementById("per_second");
const divKoszt = document.getElementById("koszt1");
const divKoszt2 = document.getElementById("koszt2");
const divKasaGlobalna = document.getElementById("kasa-globalna");
const divPalarnia = document.getElementById("palarnia");
const divKoparka = document.getElementById("koparka");

function klik() {
	kasa += perKlik;
	kasaGlobalna += perKlik;
	wypisanie();
}

function naSekunde() {
	kasaGlobalna += perSecond;
	kasa += perSecond;
	divHajs.innerHTML = kasa;
	wypisanie();
}

function upgrade1() {
	kasa = kasa - kosztUlepszenia1;
	perKlik += 1;
	palarnia += 1;
	szacunek += 1;
	kosztUlepszenia1 = parseInt(kosztUlepszenia1 * 1.5);
	divKoszt.innerHTML = kosztUlepszenia1;
}

function upgrade2() {
	kasa = kasa - kosztUlepszenia2;
	perSecond += 1;
	koparka += 1;
	szacunek += 2;
	kosztUlepszenia2 = parseInt(kosztUlepszenia2 * 1.5);
	divKoszt2.innerHTML = kosztUlepszenia2;
}

function wypisanie() {
	divSzacunek.innerHTML = szacunek;
	divHajs.innerHTML = kasa;
	divPerClick.innerHTML = perKlik;
	divPerSecond.innerHTML = perSecond;
	divKasaGlobalna.innerHTML = kasaGlobalna;
	divPalarnia.innerHTML = palarnia;
	divKoparka.innerHTML = koparka;
}

function upgrade(p) {
	if (p == 1 && kasa >= kosztUlepszenia1) {
		upgrade1();
		wypisanie();
	}
	if (p == 2 && kasa >= kosztUlepszenia2) {
		upgrade2();
		wypisanie();
	}
}

window.setInterval(naSekunde, 1000)