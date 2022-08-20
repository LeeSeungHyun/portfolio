window.addEventListener("load", ()=>{
	const grid = new Isotope("section", { //배치할 요소를 감W싸고 있는 부모 요소명
		itemSelector: "article", //배치할 요소명
		columnWidth: "article", //넓이값을 구할 요소명
		transitionDuration: "0.5s" //화면 재배치시 요소가 움직이는 속도
	});	

	const btns = document.querySelectorAll("main ul li");
	const items = document.querySelectorAll('article > div');
	const modal = document.querySelector(".modal");
	const closeModal = document.querySelector(".fa-times");

	items.forEach((item) => {
		item.addEventListener('click', () => {
			modal.classList.remove("hidden");
		})
	})

	closeModal.addEventListener("click", () => {
		modal.classList.add("hidden");
	})
});
