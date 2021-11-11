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
const divRanga = document.getElementById("nazwa-rangi");
const image = document.getElementById("image");
const opisRangi = document.getElementById("description-rank");

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
}

function upgrade2() {
	kasa = kasa - kosztUlepszenia2;
	perSecond += 1;
	koparka += 1;
	szacunek += 2;
	kosztUlepszenia2 = parseInt(kosztUlepszenia2 * 1.5);
}

function upgrade3() {
	kasa = kasa - kosztUlepszenia2;
}

function wypisanie() {
	divSzacunek.innerHTML = szacunek;
	divHajs.innerHTML = kasa;
	divPerClick.innerHTML = perKlik;
	divPerSecond.innerHTML = perSecond;
	divKasaGlobalna.innerHTML = kasaGlobalna;
	divPalarnia.innerHTML = palarnia;
	divKoparka.innerHTML = koparka;
	divKoszt2.innerHTML = kosztUlepszenia2;
	divKoszt.innerHTML = kosztUlepszenia1;
}

function ranga() {
	if (szacunek >= 10) {
		divRanga.innerHTML = "Miłośnik biologii";
		opisRangi.innerHTML = "Poznajesz zasady hodowli super myszy i dowiadujesz się jak zasadzić świecący tytoń. Wykorzystaj dobrze tą wiedzę.";
		image.style.backgroundImage = "url('img/cool_kid.jpg')";
	}
}

function upgrade(p) {
	if (p == 1 && kasa >= kosztUlepszenia1) {
		upgrade1();
	}
	if (p == 2 && kasa >= kosztUlepszenia2) {
		upgrade2();
	}
	if (p == 3 && kasa >= kosztUlepszenia2) {
		upgrade3();
	}
	wypisanie();
	ranga();
}

window.setInterval(naSekunde, 1000)