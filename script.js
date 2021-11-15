let szacunek = 0;
let perKlik = 1;
let perSecond = 0;
let kasaGlobalna = 0;
let kasa = 0;
let koparka = 0;
let palarnia = 0;
let tyton = 0;
let zalki = 0;
let kosztUlepszenia1 = 50;
let kosztUlepszenia2 = 100;
let kosztUlepszenia3 = 200;
let kosztUlepszenia4 = 300;
let szacunekLvl2 = 10;
let szacunekLvl3 = 20;
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
const divUpgrade4 = document.getElementById("upgrade4");
const upgrade4Face = document.getElementById("upgrade4-face");
const divStat4 = document.getElementById("stat-zalki");
const statZalkiFace = document.getElementById("stat-zalki-face");

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
	achievement_palarnia_1();
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

function upgrade4() {
	kasa = kasa - kosztUlepszenia4;
	perSecond += 3;
	zalki += 1;
	szacunek += 4;
	kosztUlepszenia4 = parseInt(kosztUlepszenia4 * 1.5);
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
	if (szacunek >= szacunekLvl2) { //przypisywanie nowych ulepszen do rangi
		upgrade3Face.innerHTML = "Tytoń (+3 na kliknięcie)<br/>Koszt: " + kosztUlepszenia3;
		divUpgrade3.classList.remove("blocked");
		statTytonFace.innerHTML = "Ile szlugów sprzedałeś:<br/>" + tyton;
		divStat3.classList.remove("blocked-stat");
	}
	if (szacunek >= szacunekLvl3) {
		upgrade4Face.innerHTML = "Zalki (+3 na sekundę)<br/>Koszt: <span id='koszt4'>" + kosztUlepszenia4 + "</span>";
		divUpgrade4.classList.remove("blocked");
		statZalkiFace.innerHTML = "Ile zalek podrabiasz:<br/><span id='zalki'>" + zalki + "</span>";
		divStat4.classList.remove("blocked-stat");
	}
}

function ranga() { //dodawanie rang
	if (szacunek >= szacunekLvl2) {
		divRanga.innerHTML = "Adept biologii";
		opisRangi.innerHTML = "Poznajesz zasady hodowli super myszy i dowiadujesz się jak zasadzić świecący tytoń. Wykorzystaj dobrze tą wiedzę.";
		image.style.backgroundImage = "url('img/adept_biologii.jpg')";
	}
	if (szacunek >= szacunekLvl3) {
		divRanga.innerHTML = "Douczony mistrzu";
		opisRangi.innerHTML = "Coraz lepiej idzie ci zdobywanie kolejnych zalek. Znana fraza &quotDoucz się mistrzu&quot jest już dla ciebie tylko przeszłością.";
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
	if (p == 3 && szacunek >= szacunekLvl2 && kasa >= kosztUlepszenia3) {
		upgrade3();
	}
	if (p == 4 && szacunek >= szacunekLvl3 && kasa >= kosztUlepszenia4) {
		upgrade4();
	}
	wypisanie();
	ranga();
}

function achievement_palarnia_1(achievementUsed) {
	if (palarnia == 5) {
		achievementPalarniaDiv1.classList.add("open-achievement");
		achievementPalarniaDiv1.classList.remove("description-achievement");
		achievementPalarniaP1.innerHTML = "Gratulacje, byłeś na palarni już 5 razy, dostajesz 5 kasy na klik dodatkowo";
		perKlik = perKlik + palarnia;
	}
}

window.setInterval(naSekunde, 1000)