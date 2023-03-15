function add(event)
{

    {
        event.preventDefault()
    }


    let x1 = document.getElementById('x1').value
    let x2 = document.getElementById('x2').value
    let x3 = document.getElementById('x3').value
    let x4 = document.getElementById('x4').value
    let x5 = document.getElementById('x5').value
    let x6 = document.getElementById('x6').value
    let x7 = document.getElementById('x7').value
    let x8 = document.getElementById('x8').value
    let x9 = document.getElementById('x9').value

    let FirstValues = [x1, x2, x3, x4, x5, x6, x7, x8, x9]

    let y1 = document.getElementById('y1').value
    let y2 = document.getElementById('y2').value
    let y3 = document.getElementById('y3').value
    let y4 = document.getElementById('y4').value
    let y5 = document.getElementById('y5').value
    let y6 = document.getElementById('y6').value
    let y7 = document.getElementById('y7').value
    let y8 = document.getElementById('y8').value
    let y9 = document.getElementById('y9').value

    let SecondValues = [y1, y2, y3, y4, y5, y6, y7, y8, y9]

    z1 = FirstValues[0] + SecondValues[0]
    z2 = FirstValues[1] + SecondValues[1]
    z3 = FirstValues[2] + SecondValues[2]
    z4 = FirstValues[3] + SecondValues[3]
    z5 = FirstValues[4] + SecondValues[4]
    z6 = FirstValues[5] + SecondValues[5]
    z7 = FirstValues[6] + SecondValues[6]
    z8 = FirstValues[7] + SecondValues[7]
    z9 = FirstValues[8] + SecondValues[8]

    console.log (z1)
    
}
