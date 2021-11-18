let szacunek = 0;
let perKlik = 1;
let perSecond = 0;
let kasaGlobalna = 0;
let kasa = 0;
let koparka = 0;
let palarnia = 0;
let tyton = 0;
let zalki = 0;
let petarda = 0;
let oprowadzanie = 0;
let ram = 0;
let ulepszeniaGlobalne = 0;
let kosztUlepszenia1 = 50;
let kosztUlepszenia2 = 100;
let kosztUlepszenia3 = 400;
let kosztUlepszenia4 = 800;
let kosztUlepszenia5 = 1500;
let kosztUlepszenia6 = 2500;
let kosztUlepszenia7 = 5000;
let szacunekLvl2 = 10;
let szacunekLvl3 = 25;
let szacunekLvl4 = 40;
let szacunekLvl5 = 60;
let szacunekLvl6 = 80;
let szacunekLvl7 = 105;
let szacunekLvl8 = 130;
const divSzacunek = document.getElementById("respect");
const divHajs = document.getElementById("hajs");
const divPerClick = document.getElementById("per_click");
const divPerSecond = document.getElementById("per_second");
const divKoszt = document.getElementById("koszt1");
const divKoszt2 = document.getElementById("koszt2");
const divKasaGlobalna = document.getElementById("kasa-globalna");
const divUlepszeniaGlobalne = document.getElementById("ulepszenia-globalne");
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
const divUpgrade5 = document.getElementById("upgrade5");
const upgrade5Face = document.getElementById("upgrade5-face");
const divStat5 = document.getElementById("stat-oprowadzanie");
const statOprowadzanieFace = document.getElementById("stat-oprowadzanie-face");
const divUpgrade6 = document.getElementById("upgrade6");
const upgrade6Face = document.getElementById("upgrade6-face");
const divStat6 = document.getElementById("stat-petarda");
const statPetardaFace = document.getElementById("stat-petarda-face");
const divUpgrade7 = document.getElementById("upgrade7");
const upgrade7Face = document.getElementById("upgrade7-face");
const divStat7 = document.getElementById("stat-ram");
const statRamFace = document.getElementById("stat-ram-face");
const achievementPalarniaDiv1 = document.getElementById("achievement-palarnia-div-1");
const achievementPalarniaP1 = document.getElementById("achievement-palarnia-p-1");

function klik() {
	kasa += perKlik;
	kasaGlobalna += perKlik;
	wypisanie();
}

function naSekunde() {
	kasaGlobalna += perSecond;
	kasa += perSecond;
	wypisanie();
}

function upgrade1() {
	kasa = kasa - kosztUlepszenia1;
	ulepszeniaGlobalne += 1;
	perKlik += 1;
	palarnia += 1;
	szacunek += 1;
	kosztUlepszenia1 = parseInt(kosztUlepszenia1 * 1.5);
	achievement_palarnia_1();
}

function upgrade2() {
	kasa = kasa - kosztUlepszenia2;
	ulepszeniaGlobalne += 1;
	perSecond += 1;
	koparka += 1;
	szacunek += 2;
	kosztUlepszenia2 = parseInt(kosztUlepszenia2 * 1.5);
}

function upgrade3() {
	kasa = kasa - kosztUlepszenia3;
	ulepszeniaGlobalne += 1;
	perKlik += 3;
	tyton += 1;
	szacunek += 3;
	kosztUlepszenia3 = parseInt(kosztUlepszenia3 * 1.5);
}

function upgrade4() {
	kasa = kasa - kosztUlepszenia4;
	ulepszeniaGlobalne += 1;
	perSecond += 3;
	zalki += 1;
	szacunek += 4;
	kosztUlepszenia4 = parseInt(kosztUlepszenia4 * 1.5);
}

function upgrade5() {
	kasa = kasa - kosztUlepszenia5;
	ulepszeniaGlobalne += 1;
	perKlik += 4;
	oprowadzanie += 1;
	szacunek += 5;
	kosztUlepszenia5 = parseInt(kosztUlepszenia5 * 1.5);
}

function upgrade6() {
	kasa = kasa - kosztUlepszenia6;
	ulepszeniaGlobalne += 1;
	perSecond += 5;
	petarda += 1;
	szacunek -= 3;
	kosztUlepszenia6 = parseInt(kosztUlepszenia6 * 1.5);
}

function upgrade7() {
	kasa = kasa - kosztUlepszenia7;
	ulepszeniaGlobalne += 1;
	perKlik += 6;
	ram += 1;
	szacunek += 7;
	kosztUlepszenia7 = parseInt(kosztUlepszenia7 * 1.5);
}

function wypisanie() {
	divSzacunek.innerHTML = szacunek;
	divHajs.innerHTML = kasa;
	divPerClick.innerHTML = perKlik;
	divPerSecond.innerHTML = perSecond;
	divKasaGlobalna.innerHTML = kasaGlobalna;
	divUlepszeniaGlobalne.innerHTML = ulepszeniaGlobalne;
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
		upgrade4Face.innerHTML = "Zalki (+3 na sekundę)<br/>Koszt: " + kosztUlepszenia4;
		divUpgrade4.classList.remove("blocked");
		statZalkiFace.innerHTML = "Ile zalek podrabiasz:<br/>" + zalki;
		divStat4.classList.remove("blocked-stat");
	}
	if (szacunek >= szacunekLvl4) {
		upgrade5Face.innerHTML = "Prowadź (+4 na kliknięcie)<br/>Koszt: " + kosztUlepszenia5;
		divUpgrade5.classList.remove("blocked");
		statOprowadzanieFace.innerHTML = "Ilu uczniów oprowadziłeś:<br/>" + oprowadzanie;
		divStat5.classList.remove("blocked-stat");
	}
	if (szacunek >= szacunekLvl5) {
		upgrade6Face.innerHTML = "Petarda (+5 na sekundę)<br/>Koszt: " + kosztUlepszenia6;
		divUpgrade6.classList.remove("blocked");
		statPetardaFace.innerHTML = "Ile petard wysadziłeś:<br/>" + petarda;
		divStat6.classList.remove("blocked-stat");
	}
	if (szacunek >= szacunekLvl6) {
		upgrade7Face.innerHTML = "RAM (+6 na sekundę)<br/>Koszt: " + kosztUlepszenia7;
		divUpgrade7.classList.remove("blocked");
		statRamFace.innerHTML = "Ile RAMu sprzedałeś:<br/>" + ram;
		divStat7.classList.remove("blocked-stat");
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
		opisRangi.innerHTML = "Coraz lepiej idzie Ci zdobywanie kolejnych zalek. Znana fraza &quotDoucz się mistrzu&quot jest już dla ciebie tylko przeszłością.";
		image.style.backgroundImage = "url('img/cool_kid.jpg')";
	}
	if (szacunek >= szacunekLvl4) {
		divRanga.innerHTML = "Drugoklasista";
		opisRangi.innerHTML = "Gratulacje! Udało Ci się przeżyć pierwszy rok w Zajączku. Wydawałoby się, że teraz nic w tej szkole nie powinno Cię już zaskoczyć... Chyba";
		image.style.backgroundImage = "url('img/drugoklasista.jpg')";
	}
	if (szacunek >= szacunekLvl5) {
		divRanga.innerHTML = "Toaletowy piromanta";
		opisRangi.innerHTML = "Twoja ponadprzeciętna inteligencja podpowiada Ci, że dobrym pomysłem byłoby odpalenie petardy w kiblu. Koledzy nie pochwalają tego pomysłu, ale przecież napewno nic złego się nie stanie.";
		image.style.backgroundImage = "url('img/piromanta.jpg')";
	}
	if (szacunek >= szacunekLvl6) {
		divRanga.innerHTML = "Serwisant";
		opisRangi.innerHTML = "Masz już całą wiedzę potrzebną do pracy w serwisie komputerowym. Dodatkowo zdobywasz kody nuklearne takie jak 'diablica44'. Dbasz o swój zeszyt na pendrivie, a do pracy jeszcze bardziej motywuje Cię ocena z wagą 100.";
		image.style.backgroundImage = "url('img/bopo.png')";
	}
	if (szacunek >= szacunekLvl7) {
		divRanga.innerHTML = "Trzecioklasista";
		opisRangi.innerHTML = "Możesz mówić o sobie jak o prawdziwym weteranie. Zaczynają denerwować Cię dziecinne zachowania młodszych roczników. Nie jesteś już zwykłym pionkiem na arenie międzyklasowej.";
		image.style.backgroundImage = "url('img/cool_guy.jpg')";
	}
	if (szacunek >= szacunekLvl8) {
		divRanga.innerHTML = "Bufetowy smakosz";
		opisRangi.innerHTML = "Postanawiasz kupić obiad w szkolnym bufecie. Nigdy z niego nie korzystałeś bo wyjścia na palarnie miały większy priorytet. Przekonujesz się, że jedzenie w bufecie jest naprawdę pyszne, a jego sława nie wzięła się znikąd.";
		image.style.backgroundImage = "url('img/bufet.jpg')";
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
	if (p == 5 && szacunek >= szacunekLvl4 && kasa >= kosztUlepszenia5) {
		upgrade5();
	}
	if (p == 6 && szacunek >= szacunekLvl5 && kasa >= kosztUlepszenia6) {
		upgrade6();
	}
	if (p == 7 && szacunek >= szacunekLvl6 && kasa >= kosztUlepszenia7) {
		upgrade7();
	}
	wypisanie();
	ranga();
}

function achievement_palarnia_1() {
	if (palarnia == 5) {
		achievementPalarniaDiv1.classList.add("open-achievement");
		achievementPalarniaDiv1.classList.remove("description-achievement");
		achievementPalarniaP1.innerHTML = "Gratulacje, byłeś na palarni już 5 razy, dostajesz 5 kasy na klik dodatkowo";
		perKlik = perKlik + palarnia;
	}
}

window.setInterval(naSekunde, 1000);