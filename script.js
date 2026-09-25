//loging button

document.getElementById('Loginbutton').addEventListener('click',function (e){
    e.preventDefault()
    const mobileNumber=12345678999
    const pinNumber=1234
    const numberValu=document.getElementById('mobile').value
    const mobileNumberValue=parseInt(numberValu)
    const pinNumberValue=document.getElementById('pin').value
    const pinNumberValueconvarted=parseInt(pinNumberValue)
    // console.log(mobileNumberValue,pinNumberValueconvarted)

    if(mobileNumberValue===mobileNumber&&pinNumberValueconvarted===pinNumber){
        window.location.href= "./home.html"
    }
    else{
        alert("Invalid credential")
    }

})