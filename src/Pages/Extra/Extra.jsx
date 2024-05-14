// import Swal from "sweetalert2";

// const { value: formValues } = await Swal.fire({
//     title: "Multiple inputs",
//     html: `
//       <input id="swal-input1" class="swal2-input">
//       <input id="swal-input2" class="swal2-input">
//       <input id="swal-input3" class="swal2-input">
//       <input id="swal-input4" class="swal2-input">
//       <input id="swal-input5" class="swal2-input">
//       <input id="swal-input6" class="swal2-input">
//       <input id="swal-input7" class="swal2-input">
//       <input id="swal-input8" class="swal2-input">
//     `,
//     focusConfirm: false,
//     preConfirm: () => {
//       return [
//         document.getElementById("swal-input1").value,
//         document.getElementById("swal-input2").value,
//         document.getElementById("swal-input3").value,
//         document.getElementById("swal-input4").value,
//         document.getElementById("swal-input5").value,
//         document.getElementById("swal-input6").value,
//         document.getElementById("swal-input7").value,
//         document.getElementById("swal-input8").value,
//       ];
//     }
//   });
//   if (formValues) {
//     Swal.fire(JSON.stringify(formValues));
//   }

const Extra = () => {
  return (
    <div>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="https://i.ibb.co/T45RT6G/38.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/Lhb8S5L/31.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/zJbDLYP/33.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/QdYWb5q/40.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/ngcXjG4/36.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/9YMqLwB/39.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/3fgmY8D/35.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/X2fFrbj/37.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/L0VTNQd/34.jpg" />
		<img src="https://i.ibb.co/x7QDVHw/32.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
</section>
      
    </div>
  )
}

export default Extra

// import animationData from './animation.json';
// import Lottie from "lottie-react";

// const style = {
//   height: 300,
// };
// 

// const interactivity = {
//   mode: "scroll",
//   actions: [
//     {
//       visibility: [0, 0.2],
//       type: "stop",
//       frames: [0],
//     },
//     {
//       visibility: [0.2, 0.45],
//       type: "seek",
//       frames: [0, 45],
//     },
//     {
//       visibility: [0.45, 1.0],
//       type: "loop",
//       frames: [45, 60],
//     },
//   ],
// };


// const Extra = () => {
    
//   return (
//     <Lottie
//       animationData={animationData}
//       style={style}
//       interactivity={interactivity}
//     />
//   )
// }

// export default Extra
