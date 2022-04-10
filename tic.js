let turn = "X"
function Endturn(){turn=="X" ? turn="O" : turn ="X"} //her çalıştığında sırayı değiştiriyor
function Winner(T){document.getElementById('info').innerHTML = `Player ${T} won`;} //

function Base(id) {   //tıklanan öğenin id si ile işlem yapılıyor.
	document.querySelector("#"+id).value = turn;
	document.querySelector("#"+id).disabled = true;
	Endturn();	
	document.getElementById('info').innerHTML = `Turn ${turn}`;
	const win = [   // tüm kazanma koşulları
		["b1", "b2", "b3"],
		["b4", "b5", "b6"],
		["b7", "b8", "b9"],
		["b1", "b4", "b7"],
		["b2", "b5", "b8"],
		["b3", "b6", "b9"],
		["b1", "b5", "b9"],
		["b3", "b5", "b7"]
	];  // sırayla her koşula göre nesnenin değerleri çekiliyor.
	for (let index = 0; index < win.length; index++) {
		let first = document.getElementById(win[index][0]).value;
		let second = document.getElementById(win[index][1]).value;
		let third = document.getElementById(win[index][2]).value;
		// 3 elemandan şartları sağlayan varsa kazanan açıklanıyor
		if ((first =="X" ) && (second =="X") && (third =="X")){Winner("X")}
		if ((first =="O" ) && (second =="O") && (third =="O")){Winner("O")}		
	}
}
document.getElementById("reset").addEventListener("click",() =>{location.reload();} )