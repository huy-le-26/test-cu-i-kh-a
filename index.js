// bài 1

// function adjacentElementsProduct(inputArray) {
  
//     let num = inputArray[0] * inputArray[1];
    
//     for(let i = 1; i < inputArray.length -1 ; i++){
//         let largets = inputArray[i] * inputArray[i+1];
//         if(num < largets) num = largets;
//     }
//     return num;
    
// }
//   let inputArray = [3, 6, -2, -5, 7, 3]
//   let result = adjacentElementsProduct(inputArray);
//   console.log("result bai 1: ", result)

//bài 2 
// function alternatingSums(array) {
//     return array.reduce((acc, n, i) => {
//       acc[i % 2] += n;
//       return acc;
//     }, [0, 0]);
//   }
//   let weight = [76, 55, 34, 79, 90, 54, 44];
//   let result = alternatingSums(weight);
//   console.log("result bai 2: ", result)

// //   bài 3 form = document.getElementById('form');
var container = document.getElementById('container');
var form = document.getElementById('input').value;
var result = document.getElementById('result');
var render  =document.querySelector("#form").addEventListener('submit',this.handleSubmit )

function handleSubmit(e) {
	e.preventDefault();
	let value =input.value;
	fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
		.then((res) => res.json())
		.then((data) => {
			input.value = '';
			
			if (!value) {
				result.innerText = 'không có link ';
			} else {
				result.innerText = `link bạn tìm là: ${data.result.short_link}`;
			}
		});
}
