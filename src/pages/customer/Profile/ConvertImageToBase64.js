

/**
 * this method will convert an image to a base64 format, and notify the call back
 * @param {is the image that user did pick up from the input tag} image 
 * @param {is the callback that will recive the result once its ready} onResult 
 */
 const ConvertImageToBase64=  (image,onResult)=>{


      //intilize the file reader
    let reader = new FileReader();

    //convert the image to base64 text
       reader.readAsDataURL(image);
      
       //notify us when its ready
    reader.onload=  ()=>{

      const base64Word="base64,";
      const index=reader.result.indexOf(base64Word);
        // Make a fileInfo Object
        let fileInfo = {
            name: image.name,
            type: image.type,
            size: Math.round(image.size / 1000) + ' kB',
            base64: reader.result.substring (index+base64Word.length),
            image: image,
          };
          //the callback that will set the file info
          onResult(fileInfo);

          
        }
}

export default  ConvertImageToBase64;