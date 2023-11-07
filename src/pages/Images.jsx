import React from 'react'

import html2canvas from 'html2canvas'

const PosterImage = () => {

  const captureHandler = () =>{
    html2canvas(document.querySelector("#capture")).then(canvas => {
      document.body.appendChild(canvas)
      console.log(canvas)
      // var canvas = document.getElementById("mcanvas");
      const image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
      var link = document.createElement('a');
      link.download = "my-image.png";
      link.href = image;
      link.click();

  });
  }

  return (
    <>
    <button onClick={captureHandler}>Click</button>
<div id="capture" className="relative text-white font-sans">
    <img className="h-screen w-full " src="/src/pages/poster.svg" alt="poster"/>
  <div className="top-0 right-0 absolute w-3/5 h-screen bg-red- flex flex-col"> 
    <div className="w-full flex justify-center p-8 text-3xl font-bold mt-16">
    <div className="ml-8">
      Mitchel Starc in 2023
    </div>  
    </div>
    <div className="ml-4 text-3xl w-full h-full flex flex-col justify-between p-12 text-blue font-bold  mt-8 mb-24 bg-red- ">
        <div className="flex flex-row text-center justify-around items-center">
          <div><span className="font-light">264</span> <br/> RUNS</div>
          <div><span className="font-light">24</span> <br/> AVG</div>
        </div>
        <div className="flex flex-row text-center justify-around items-center">
          <div><span className="font-light">65</span> <br/>SR</div> 
          <div><span className="font-light">5 - 8</span> <br/> BEST</div>
        </div>

        <div className="flex flex-row text-center justify-around items-center">
          <div><span className="font-light">84</span><br/>WK.</div>
          <div><span className="font-light">34</span><br/> INN</div>


        </div>
    </div>
  </div>
  </div>
    </>
  )
}

export default PosterImage