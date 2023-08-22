let qrText = document.getElementById("qrText");
let imgBox = document.getElementById("imgBox") ;
let qrImg = document.getElementById("qrImg");
let generateBtn = document.getElementsByClassName(".btn");


function generateQR(){
    if(qrText.value.length > 0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=" +  qrText.value ;
        imgBox.classList.add("showImg");
        console.log( qrText.value)
        console.log(qrImg);

    }else{
    
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
        // alert("enter text or URL");
    }
   

    // qrText.value = "";
}

// generateBtn.addEventListener('click', generateQR);