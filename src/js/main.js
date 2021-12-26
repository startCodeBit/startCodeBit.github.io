document.getElementById("wallet-select-close").addEventListener("click", function (){
	document.getElementById("wallet-select").style.display = "none";
})

document.getElementById("connect-wallet").addEventListener("click", function (event) {
	event.stopPropagation();
	document.getElementById("wallet-select").style.display = "flex";
	document.getElementById("buy-nft-drop-menu").style.display = "none";
})

document.getElementById("btn-login").addEventListener("click", function (event) {
	event.preventDefault();
})

document.getElementById("btn-buy-nft").addEventListener("click", function (event) {
	event.preventDefault();
	event.stopPropagation();
	document.getElementById("buy-nft-drop-menu").style.display = "block";
})

document.body.addEventListener("click", function () {
	document.getElementById("buy-nft-drop-menu").style.display = "none";
	document.getElementById("wallet-select").style.display = "none";
})