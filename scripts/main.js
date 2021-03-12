console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';


const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showBlue") {
		filterLegos("Blue")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showGreen") {
		filterLegos("Green")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

navElement.addEventListener("click", (event) => {
	if (event.target.id === ("showRed")) {
		filterLegos("Red")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

/////////// materials filters ////////

const materialElement = document.querySelector("#materialsMenu");
materialElement.addEventListener("change", (event) => {
	if (event.target.id === "materialsMenu") {
		const materialValue =(event.target.value);
		filterLegoMaterials(materialValue)
	}

})

const filterLegoMaterials = (material) => {
	const filterArrayMaterials = useLegos().filter(singleLego => {
		if (singleLego.Material.includes(material)) {
			return singleLego;
		}
	})
	makeLegoList(filterArrayMaterials);
}

//////////// materials filters //////////

const startEIA = () => {
	loadLegos()
		.then(legoArray => {
			makeLegoList(legoArray)
		})

}

startEIA();