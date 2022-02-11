let tip;
let billAmount;
let numberOfPeople;
let k;
let customTip

function OnBillEntered()
{
    billAmount = document.getElementById("bills").value;
    console.log(parseFloat(billAmount))
}

function peopleEntered()
{
    numberOfPeople = document.getElementById("people").value;
    console.log(parseInt(numberOfPeople))
    if(parseInt(numberOfPeople) > 0)
    {
        let tip_amount = (billAmount*(tip/100))/numberOfPeople
        console.log(tip_amount.toFixed(2))

        let total = (billAmount/numberOfPeople) + tip_amount;
        console.log(total.toFixed(2))

        document.getElementById("tip-per-person").innerText = "$" + tip_amount.toFixed(2).toString()
        document.getElementById("total-per-person").innerText = "$" + total.toFixed(2).toString()

        document.getElementById("people").style.border = "none"
        document.getElementById("opt").style.opacity = "0"
    }
    else if(parseInt(numberOfPeople) === 0)
    {
        document.getElementById("people").style.border = "1px solid red"
        document.getElementById("opt").style.opacity = "100"
    }
}

function customBtnClicked()
{
    for(let j = 1; j < 6; j++)
    {
        let btn = document.getElementById(j.toString());
        btn.style.color = "white";
        btn.style.backgroundColor = "hsl(183, 100%, 15%)";
    }
    tip = document.getElementById("cus-inp").value;
    console.log(parseInt(tip))
    customTip = true
}

function tipBtnClicked(i)
{
    k = i
    for(let j = 1; j < 6; j++)
    {
        if(j === i)
        {
            continue
        }
        let btn = document.getElementById(j.toString());
        btn.style.color = "white";
        btn.style.backgroundColor = "hsl(183, 100%, 15%)";
    }
    let tipBtn = document.getElementById(i);
    tipBtn.style.color = "hsl(183, 100%, 15%)";
    tipBtn.style.backgroundColor = "hsl(172, 67%, 45%)";

    tip = parseInt(tipBtn.innerText);
    customTip = false
}

function resetBtnClicked()
{
    document.getElementById("bills").value = null
    if(customTip === false)
    {
        document.getElementById(k).style.color = "white"
        document.getElementById(k).style.backgroundColor = "hsl(183, 100%, 15%)"
    }
    document.getElementById("people").value = null
    document.getElementById("tip-per-person").innerText = "$0.00"
    document.getElementById("total-per-person").innerText = "$0.00"
    document.getElementById("cus-inp").value = null
    document.getElementById("people").style.border = "none"
    document.getElementById("opt").style.opacity = "0"
}
