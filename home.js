const validpin = 1234


// intazer convarter
function intazer(value) {
    const inputField = document.getElementById(value)
    const inputFieldvalu = inputField.value
    const inputFieldvalunumber = parseInt(inputFieldvalu)
    return inputFieldvalunumber;
}

// add money 

document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const bank = document.getElementById('bank-name').value
    const acountNumber = document.getElementById('account-number').value
    if (acountNumber.length < 11) {
        alert("Please provide valid account number")
        return;
    }
    const amount = intazer("add-amount")

    if (isNaN(amount) || amount <= 0) {
        alert('Please add amount');
        return;
    }

    const pin = intazer("pin-number")
    if (validpin !== pin) {
        alert("Please provide valid pin number")
        return;

    }
    const AvailableAmount = parseInt(document.getElementById('Available-amount').innerText)
    const AddBallance = amount + AvailableAmount
    document.getElementById('Available-amount').innerText = AddBallance


})

// cashout 

document.getElementById('Withdraw-Money-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const acountNumber = document.getElementById('account-number-1').value
    if (acountNumber.length < 11) {
        alert("Please provide valid account number")
        return;
    }
    const amount = intazer("withdraw-amount")

    if (isNaN(amount) || amount <= 0) {
        alert('Please add amount');
        return;
    }

    const pin = intazer("pin-number-1")
    if (validpin !== pin) {
        alert("Please provide valid pin number")
        return;

    }
    const AvailableAmount = parseInt(document.getElementById('Available-amount').innerText)
    const AddBallance = AvailableAmount - amount
    document.getElementById('Available-amount').innerText = AddBallance


})

// transfer money


document.getElementById('Send-Now-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const acountNumber = document.getElementById('account-number-2').value
    if (acountNumber.length < 11) {
        alert("Please provide valid account number")
        return;
    }
    const amount = intazer("transfer-amount")

    if (isNaN(amount) || amount <= 0) {
        alert('Please add amount');
        return;
    }

    const pin = intazer("pin-number-2")
    if (validpin !== pin) {
        alert("Please provide valid pin number")
        return;

    }
    const AvailableAmount = parseInt(document.getElementById('Available-amount').innerText)
    const AddBallance = AvailableAmount - amount
    document.getElementById('Available-amount').innerText = AddBallance


})


// **
// togoling feature 
// **

// cash out 

document.getElementById('cash-out-button').addEventListener('click', function (e) {
    e.preventDefault()
    const forms = document.getElementsByClassName("form")
    for (const form of forms) {
        form.style.display = 'none'
    }
    document.getElementById('cash-out-parent').style.display = 'block'
})


// add money 

document.getElementById('add-money-button').addEventListener('click', function (e) {
    e.preventDefault()
    const forms = document.getElementsByClassName("form")
    for (const form of forms) {
        form.style.display = 'none'
    }
    document.getElementById('add-money-parent').style.display = 'block'
})

// transfer

document.getElementById('Transfer-money-button').addEventListener('click', function (e) {
    e.preventDefault()
    const forms = document.getElementsByClassName("form")
    for (const form of forms) {
        form.style.display = 'none'
    }
    document.getElementById('Transfer-Money-parent').style.display = 'block'

})

