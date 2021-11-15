let szacunek = 0;
let perKlik = 1;
let perSecond = 0;
let kasaGlobalna = 0;
let kasa = 0;
let koparka = 0;
let palarnia = 0;
let tyton = 0;
let kosztUlepszenia1 = 50;
let kosztUlepszenia2 = 100;
let kosztUlepszenia3 = 200;
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
const divUpgrade3 = document.getElementById("upgrade3");
const upgrade3Face = document.getElementById("upgrade3-face");
const divStat3 = document.getElementById("stat-tyton");
const statTytonFace = document.getElementById("stat-tyton-face");
const achievementPalarnia1 = document.getElementById("achievement-palarnia-1-div");

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
	kasa = kasa - kosztUlepszenia3;
	perKlik += 3;
	tyton += 1;
	szacunek += 3;
	kosztUlepszenia3 = parseInt(kosztUlepszenia3 * 1.5);
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
	if (szacunek >= 10) {
		upgrade3Face.innerHTML = "Tytoń (+3 na kliknięcie)<br/>Koszt: <span id='koszt3'>" + kosztUlepszenia3 + "</span>";
		divUpgrade3.classList.remove("blocked");
		statTytonFace.innerHTML = "Ile szlugów sprzedałeś:<br/><span id='tyton'>" + tyton + "</span>";
		divStat3.classList.remove("blocked-stat");
	}
	if (palarnia >= 5) {
		achievementPalarnia1.classList.add("open-achievement");
		achievementPalarnia1.classList.remove("description-achievement");
		document.getElementById("achievement-palarnia-1-p").innerHTML = "Content jakiś";
	}
}

function ranga() {
	if (szacunek >= 10) {
		divRanga.innerHTML = "Adept biologii";
		opisRangi.innerHTML = "Poznajesz zasady hodowli super myszy i dowiadujesz się jak zasadzić świecący tytoń. Wykorzystaj dobrze tą wiedzę.";
		image.style.backgroundImage = "url('img/adept_biologii.jpg')";
	}
	if (szacunek >= 20) {
		divRanga.innerHTML = "Douczony mistrzu";
		opisRangi.innerHTML = "";
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
	if (p == 3 && szacunek >= 10 && kasa >= kosztUlepszenia3) {
		upgrade3();
	}
	wypisanie();
	ranga();
}

window.setInterval(naSekunde, 1000)