import Swal from "sweetalert2";

const { value: formValues } = await Swal.fire({
    title: "Multiple inputs",
    html: `
      <input id="swal-input1" class="swal2-input">
      <input id="swal-input2" class="swal2-input">
      <input id="swal-input3" class="swal2-input">
      <input id="swal-input4" class="swal2-input">
      <input id="swal-input5" class="swal2-input">
      <input id="swal-input6" class="swal2-input">
      <input id="swal-input7" class="swal2-input">
      <input id="swal-input8" class="swal2-input">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("swal-input1").value,
        document.getElementById("swal-input2").value,
        document.getElementById("swal-input3").value,
        document.getElementById("swal-input4").value,
        document.getElementById("swal-input5").value,
        document.getElementById("swal-input6").value,
        document.getElementById("swal-input7").value,
        document.getElementById("swal-input8").value,
      ];
    }
  });
  if (formValues) {
    Swal.fire(JSON.stringify(formValues));
  }

const Extra = () => {
  return (
    <div>
      <h1>hi</h1>
      
    </div>
  )
}

export default Extra

// import animationData from './animation.json';
// import Lottie from "lottie-react";
// 
// const style = {
//   height: 300,
// };

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
