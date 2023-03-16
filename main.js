// 3x3 functions

function add(event)
{

    {
        event.preventDefault()
    }


    let x1 = document.getElementById('x1').value
        x1 = Number(x1)
    let x2 = document.getElementById('x2').value
        x2 = Number(x2)
    let x3 = document.getElementById('x3').value
        x3 = Number(x3)
    let x4 = document.getElementById('x4').value
        x4 = Number(x4)
    let x5 = document.getElementById('x5').value
        x5 = Number(x5)
    let x6 = document.getElementById('x6').value
        x6 = Number(x6)
    let x7 = document.getElementById('x7').value
        x7 = Number(x7)
    let x8 = document.getElementById('x8').value
        x8 = Number(x8)
    let x9 = document.getElementById('x9').value
        x9 = Number(x9)

    let FirstValues = [x1, x2, x3, x4, x5, x6, x7, x8, x9]

    let y1 = document.getElementById('y1').value
        y1 = Number(y1)
    let y2 = document.getElementById('y2').value
        y2 = Number(y2)
    let y3 = document.getElementById('y3').value
        y3 = Number(y3)
    let y4 = document.getElementById('y4').value
        y4 = Number(y4)
    let y5 = document.getElementById('y5').value
        y5 = Number(y5)
    let y6 = document.getElementById('y6').value
        y6 = Number(y6)
    let y7 = document.getElementById('y7').value
        y7 = Number(y7)
    let y8 = document.getElementById('y8').value
        y8 = Number(y8)
    let y9 = document.getElementById('y9').value
        y9 = Number(y9)

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

    document.getElementById('z1').innerHTML = z1
    document.getElementById('z2').innerHTML = z2
    document.getElementById('z3').innerHTML = z3
    document.getElementById('z4').innerHTML = z4
    document.getElementById('z5').innerHTML = z5
    document.getElementById('z6').innerHTML = z6
    document.getElementById('z7').innerHTML = z7
    document.getElementById('z8').innerHTML = z8
    document.getElementById('z9').innerHTML = z9
    
}

// matrix subtract

function subtract(event)
{

    {
        event.preventDefault()
    }

    let x1 = document.getElementById('x1').value
        x1 = Number(x1)
    let x2 = document.getElementById('x2').value
        x2 = Number(x2)
    let x3 = document.getElementById('x3').value
        x3 = Number(x3)
    let x4 = document.getElementById('x4').value
        x4 = Number(x4)
    let x5 = document.getElementById('x5').value
        x5 = Number(x5)
    let x6 = document.getElementById('x6').value
        x6 = Number(x6)
    let x7 = document.getElementById('x7').value
        x7 = Number(x7)
    let x8 = document.getElementById('x8').value
        x8 = Number(x8)
    let x9 = document.getElementById('x9').value
        x9 = Number(x9)

    let FirstValues = [x1, x2, x3, x4, x5, x6, x7, x8, x9]

    let y1 = document.getElementById('y1').value
        y1 = Number(y1)
    let y2 = document.getElementById('y2').value
        y2 = Number(y2)
    let y3 = document.getElementById('y3').value
        y3 = Number(y3)
    let y4 = document.getElementById('y4').value
        y4 = Number(y4)
    let y5 = document.getElementById('y5').value
        y5 = Number(y5)
    let y6 = document.getElementById('y6').value
        y6 = Number(y6)
    let y7 = document.getElementById('y7').value
        y7 = Number(y7)
    let y8 = document.getElementById('y8').value
        y8 = Number(y8)
    let y9 = document.getElementById('y9').value
        y9 = Number(y9)

    let SecondValues = [y1, y2, y3, y4, y5, y6, y7, y8, y9]

    z1 = FirstValues[0] - SecondValues[0]
    z2 = FirstValues[1] - SecondValues[1]
    z3 = FirstValues[2] - SecondValues[2]
    z4 = FirstValues[3] - SecondValues[3]
    z5 = FirstValues[4] - SecondValues[4]
    z6 = FirstValues[5] - SecondValues[5]
    z7 = FirstValues[6] - SecondValues[6]
    z8 = FirstValues[7] - SecondValues[7]
    z9 = FirstValues[8] - SecondValues[8]

    document.getElementById('z1').innerHTML = z1
    document.getElementById('z2').innerHTML = z2
    document.getElementById('z3').innerHTML = z3
    document.getElementById('z4').innerHTML = z4
    document.getElementById('z5').innerHTML = z5
    document.getElementById('z6').innerHTML = z6
    document.getElementById('z7').innerHTML = z7
    document.getElementById('z8').innerHTML = z8
    document.getElementById('z9').innerHTML = z9
    

}

// matrix multiply


function multiply(event)
{

    {
        event.preventDefault()
    }


    let x1 = document.getElementById('x1').value
        x1 = Number(x1)
    let x2 = document.getElementById('x2').value
        x2 = Number(x2)
    let x3 = document.getElementById('x3').value
        x3 = Number(x3)
    let x4 = document.getElementById('x4').value
        x4 = Number(x4)
    let x5 = document.getElementById('x5').value
        x5 = Number(x5)
    let x6 = document.getElementById('x6').value
        x6 = Number(x6)
    let x7 = document.getElementById('x7').value
        x7 = Number(x7)
    let x8 = document.getElementById('x8').value
        x8 = Number(x8)
    let x9 = document.getElementById('x9').value
        x9 = Number(x9)

    let FirstValues = [x1, x2, x3, x4, x5, x6, x7, x8, x9]

    let y1 = document.getElementById('y1').value
        y1 = Number(y1)
    let y2 = document.getElementById('y2').value
        y2 = Number(y2)
    let y3 = document.getElementById('y3').value
        y3 = Number(y3)
    let y4 = document.getElementById('y4').value
        y4 = Number(y4)
    let y5 = document.getElementById('y5').value
        y5 = Number(y5)
    let y6 = document.getElementById('y6').value
        y6 = Number(y6)
    let y7 = document.getElementById('y7').value
        y7 = Number(y7)
    let y8 = document.getElementById('y8').value
        y8 = Number(y8)
    let y9 = document.getElementById('y9').value
        y9 = Number(y9)

    let SecondValues = [y1, y2, y3, y4, y5, y6, y7, y8, y9]

    z1 = (FirstValues[0]*SecondValues[0]) + (FirstValues[1]*SecondValues[3]) + (FirstValues[2]*SecondValues[6])
    z2 = (FirstValues[0]*SecondValues[1]) + (FirstValues[1]*SecondValues[4]) + (FirstValues[2]*SecondValues[7])
    z3 = (FirstValues[0]*SecondValues[2]) + (FirstValues[1]*SecondValues[5]) + (FirstValues[2]*SecondValues[8])
    z4 = (FirstValues[3]*SecondValues[0]) + (FirstValues[4]*SecondValues[3]) + (FirstValues[5]*SecondValues[6])
    z5 = (FirstValues[3]*SecondValues[1]) + (FirstValues[4]*SecondValues[4]) + (FirstValues[5]*SecondValues[7])
    z6 = (FirstValues[3]*SecondValues[2]) + (FirstValues[4]*SecondValues[5]) + (FirstValues[5]*SecondValues[8])
    z7 = (FirstValues[6]*SecondValues[0]) + (FirstValues[7]*SecondValues[3]) + (FirstValues[8]*SecondValues[6])
    z8 = (FirstValues[6]*SecondValues[1]) + (FirstValues[7]*SecondValues[4]) + (FirstValues[8]*SecondValues[7])
    z9 = (FirstValues[6]*SecondValues[2]) + (FirstValues[7]*SecondValues[5]) + (FirstValues[8]*SecondValues[8])

    document.getElementById('z1').innerHTML = z1
    document.getElementById('z2').innerHTML = z2
    document.getElementById('z3').innerHTML = z3
    document.getElementById('z4').innerHTML = z4
    document.getElementById('z5').innerHTML = z5
    document.getElementById('z6').innerHTML = z6
    document.getElementById('z7').innerHTML = z7
    document.getElementById('z8').innerHTML = z8
    document.getElementById('z9').innerHTML = z9
    
}

// 2x2 functions

function add2(event)
{

    {
        event.preventDefault()
    }


    let x1 = document.getElementById('x1').value
        x1 = Number(x1)
    let x2 = document.getElementById('x2').value
        x2 = Number(x2)
    let x3 = document.getElementById('x3').value
        x3 = Number(x3)
    let x4 = document.getElementById('x4').value
        x4 = Number(x4)

    let FirstValues = [x1, x2, x3, x4]

    let y1 = document.getElementById('y1').value
        y1 = Number(y1)
    let y2 = document.getElementById('y2').value
        y2 = Number(y2)
    let y3 = document.getElementById('y3').value
        y3 = Number(y3)
    let y4 = document.getElementById('y4').value
        y4 = Number(y4)
    
    let SecondValues = [y1, y2, y3, y4]

    z1 = FirstValues[0] + SecondValues[0]
    z2 = FirstValues[1] + SecondValues[1]
    z3 = FirstValues[2] + SecondValues[2]
    z4 = FirstValues[3] + SecondValues[3]

    document.getElementById('z1').innerHTML = z1
    document.getElementById('z2').innerHTML = z2
    document.getElementById('z3').innerHTML = z3
    document.getElementById('z4').innerHTML = z4
    
}

// matrix subtract

function subtract2(event)
{

    {
        event.preventDefault()
    }

    let x1 = document.getElementById('x1').value
        x1 = Number(x1)
    let x2 = document.getElementById('x2').value
        x2 = Number(x2)
    let x3 = document.getElementById('x3').value
        x3 = Number(x3)
    let x4 = document.getElementById('x4').value
        x4 = Number(x4)

    let FirstValues = [x1, x2, x3, x4]

    let y1 = document.getElementById('y1').value
        y1 = Number(y1)
    let y2 = document.getElementById('y2').value
        y2 = Number(y2)
    let y3 = document.getElementById('y3').value
        y3 = Number(y3)
    let y4 = document.getElementById('y4').value
        y4 = Number(y4)

    let SecondValues = [y1, y2, y3, y4]

    z1 = FirstValues[0] - SecondValues[0]
    z2 = FirstValues[1] - SecondValues[1]
    z3 = FirstValues[2] - SecondValues[2]
    z4 = FirstValues[3] - SecondValues[3]
    z5 = FirstValues[4] - SecondValues[4]

    document.getElementById('z1').innerHTML = z1
    document.getElementById('z2').innerHTML = z2
    document.getElementById('z3').innerHTML = z3
    document.getElementById('z4').innerHTML = z4
    

}

// matrix multiply


function multiply2(event)
{

    {
        event.preventDefault()
    }


    let x1 = document.getElementById('x1').value
        x1 = Number(x1)
    let x2 = document.getElementById('x2').value
        x2 = Number(x2)
    let x3 = document.getElementById('x3').value
        x3 = Number(x3)
    let x4 = document.getElementById('x4').value
        x4 = Number(x4)

    let FirstValues = [x1, x2, x3, x4]

    let y1 = document.getElementById('y1').value
        y1 = Number(y1)
    let y2 = document.getElementById('y2').value
        y2 = Number(y2)
    let y3 = document.getElementById('y3').value
        y3 = Number(y3)
    let y4 = document.getElementById('y4').value
        y4 = Number(y4)

    let SecondValues = [y1, y2, y3, y4]

    z1 = (FirstValues[0]*SecondValues[0]) + (FirstValues[1]*SecondValues[2])
    z2 = (FirstValues[0]*SecondValues[1]) + (FirstValues[1]*SecondValues[3])
    z3 = (FirstValues[2]*SecondValues[0]) + (FirstValues[3]*SecondValues[2])
    z4 = (FirstValues[2]*SecondValues[1]) + (FirstValues[3]*SecondValues[3])

    document.getElementById('z1').innerHTML = z1
    document.getElementById('z2').innerHTML = z2
    document.getElementById('z3').innerHTML = z3
    document.getElementById('z4').innerHTML = z4
    
}

// 4x4 functions


function add4(event)
{

    {
        event.preventDefault()
    }


    let x1 = document.getElementById('x1').value
        x1 = Number(x1)
    let x2 = document.getElementById('x2').value
        x2 = Number(x2)
    let x3 = document.getElementById('x3').value
        x3 = Number(x3)
    let x4 = document.getElementById('x4').value
        x4 = Number(x4)
    let x5 = document.getElementById('x5').value
        x5 = Number(x5)
    let x6 = document.getElementById('x6').value
        x6 = Number(x6)
    let x7 = document.getElementById('x7').value
        x7 = Number(x7)
    let x8 = document.getElementById('x8').value
        x8 = Number(x8)
    let x9 = document.getElementById('x9').value
        x9 = Number(x9)
    let x10 = document.getElementById('x10').value
        x10 = Number(x10)
    let x11 = document.getElementById('x11').value
        x11 = Number(x11)
    let x12 = document.getElementById('x12').value
        x12 = Number(x12)
    let x13 = document.getElementById('x13').value
        x13 = Number(x13)
    let x14 = document.getElementById('x14').value
        x14 = Number(x14)
    let x15 = document.getElementById('x15').value
        x15 = Number(x15)
    let x16 = document.getElementById('x16').value
        x16 = Number(x16)

    let FirstValues = [x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16]

    let y1 = document.getElementById('y1').value
        y1 = Number(y1)
    let y2 = document.getElementById('y2').value
        y2 = Number(y2)
    let y3 = document.getElementById('y3').value
        y3 = Number(y3)
    let y4 = document.getElementById('y4').value
        y4 = Number(y4)
    let y5 = document.getElementById('y5').value
        y5 = Number(y5)
    let y6 = document.getElementById('y6').value
        y6 = Number(y6)
    let y7 = document.getElementById('y7').value
        y7 = Number(y7)
    let y8 = document.getElementById('y8').value
        y8 = Number(y8)
    let y9 = document.getElementById('y9').value
        y9 = Number(y9)
    let y10 = document.getElementById('y10').value
        y10 = Number(y10)
    let y11 = document.getElementById('y11').value
        y11 = Number(y11)
    let y12 = document.getElementById('y12').value
        y12 = Number(y12)
    let y13 = document.getElementById('y13').value
        y13 = Number(y13)
    let y14 = document.getElementById('y14').value
        y14 = Number(y14)
    let y15 = document.getElementById('y15').value
        y15 = Number(y15)
    let y16 = document.getElementById('y16').value
        y16 = Number(y16)
    
    let SecondValues = [y1, y2, y3, y4, y5, y6, y7, y8, y9, y10, y11, y12, y13, y14, y15, y16]

    z1 = FirstValues[0] + SecondValues[0]
    z2 = FirstValues[1] + SecondValues[1]
    z3 = FirstValues[2] + SecondValues[2]
    z4 = FirstValues[3] + SecondValues[3]
    z5 = FirstValues[4] + SecondValues[4]
    z6 = FirstValues[5] + SecondValues[5]
    z7 = FirstValues[6] + SecondValues[6]
    z8 = FirstValues[7] + SecondValues[7]
    z9 = FirstValues[8] + SecondValues[8]
    z10 = FirstValues[9] + SecondValues[9]
    z11 = FirstValues[10] + SecondValues[10]
    z12 = FirstValues[11] + SecondValues[11]
    z13 = FirstValues[12] + SecondValues[12]
    z14 = FirstValues[13] + SecondValues[13]
    z15 = FirstValues[14] + SecondValues[14]
    z16 = FirstValues[15] + SecondValues[15]

    document.getElementById('z1').innerHTML = z1
    document.getElementById('z2').innerHTML = z2
    document.getElementById('z3').innerHTML = z3
    document.getElementById('z4').innerHTML = z4
    document.getElementById('z5').innerHTML = z5
    document.getElementById('z6').innerHTML = z6
    document.getElementById('z7').innerHTML = z7
    document.getElementById('z8').innerHTML = z8
    document.getElementById('z9').innerHTML = z9
    document.getElementById('z10').innerHTML = z10
    document.getElementById('z11').innerHTML = z11
    document.getElementById('z12').innerHTML = z12
    document.getElementById('z13').innerHTML = z13
    document.getElementById('z14').innerHTML = z14
    document.getElementById('z15').innerHTML = z15
    document.getElementById('z16').innerHTML = z16
    
}

// matrix subtract

function subtract4(event)
{

    {
        event.preventDefault()
    }


    let x1 = document.getElementById('x1').value
        x1 = Number(x1)
    let x2 = document.getElementById('x2').value
        x2 = Number(x2)
    let x3 = document.getElementById('x3').value
        x3 = Number(x3)
    let x4 = document.getElementById('x4').value
        x4 = Number(x4)
    let x5 = document.getElementById('x5').value
        x5 = Number(x5)
    let x6 = document.getElementById('x6').value
        x6 = Number(x6)
    let x7 = document.getElementById('x7').value
        x7 = Number(x7)
    let x8 = document.getElementById('x8').value
        x8 = Number(x8)
    let x9 = document.getElementById('x9').value
        x9 = Number(x9)
    let x10 = document.getElementById('x10').value
        x10 = Number(x10)
    let x11 = document.getElementById('x11').value
        x11 = Number(x11)
    let x12 = document.getElementById('x12').value
        x12 = Number(x12)
    let x13 = document.getElementById('x13').value
        x13 = Number(x13)
    let x14 = document.getElementById('x14').value
        x14 = Number(x14)
    let x15 = document.getElementById('x15').value
        x15 = Number(x15)
    let x16 = document.getElementById('x16').value
        x16 = Number(x16)

    let FirstValues = [x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16]

    let y1 = document.getElementById('y1').value
        y1 = Number(y1)
    let y2 = document.getElementById('y2').value
        y2 = Number(y2)
    let y3 = document.getElementById('y3').value
        y3 = Number(y3)
    let y4 = document.getElementById('y4').value
        y4 = Number(y4)
    let y5 = document.getElementById('y5').value
        y5 = Number(y5)
    let y6 = document.getElementById('y6').value
        y6 = Number(y6)
    let y7 = document.getElementById('y7').value
        y7 = Number(y7)
    let y8 = document.getElementById('y8').value
        y8 = Number(y8)
    let y9 = document.getElementById('y9').value
        y9 = Number(y9)
    let y10 = document.getElementById('y10').value
        y10 = Number(y10)
    let y11 = document.getElementById('y11').value
        y11 = Number(y11)
    let y12 = document.getElementById('y12').value
        y12 = Number(y12)
    let y13 = document.getElementById('y13').value
        y13 = Number(y13)
    let y14 = document.getElementById('y14').value
        y14 = Number(y14)
    let y15 = document.getElementById('y15').value
        y15 = Number(y15)
    let y16 = document.getElementById('y16').value
        y16 = Number(y16)
    
    let SecondValues = [y1, y2, y3, y4, y5, y6, y7, y8, y9, y10, y11, y12, y13, y14, y15, y16]

    z1 = FirstValues[0] - SecondValues[0]
    z2 = FirstValues[1] - SecondValues[1]
    z3 = FirstValues[2] - SecondValues[2]
    z4 = FirstValues[3] - SecondValues[3]
    z5 = FirstValues[4] - SecondValues[4]
    z6 = FirstValues[5] - SecondValues[5]
    z7 = FirstValues[6] - SecondValues[6]
    z8 = FirstValues[7] - SecondValues[7]
    z9 = FirstValues[8] - SecondValues[8]
    z10 = FirstValues[9] - SecondValues[9]
    z11 = FirstValues[10] - SecondValues[10]
    z12 = FirstValues[11] - SecondValues[11]
    z13 = FirstValues[12] - SecondValues[12]
    z14 = FirstValues[13] - SecondValues[13]
    z15 = FirstValues[14] - SecondValues[14]
    z16 = FirstValues[15] - SecondValues[15]

    document.getElementById('z1').innerHTML = z1
    document.getElementById('z2').innerHTML = z2
    document.getElementById('z3').innerHTML = z3
    document.getElementById('z4').innerHTML = z4
    document.getElementById('z5').innerHTML = z5
    document.getElementById('z6').innerHTML = z6
    document.getElementById('z7').innerHTML = z7
    document.getElementById('z8').innerHTML = z8
    document.getElementById('z9').innerHTML = z9
    document.getElementById('z10').innerHTML = z10
    document.getElementById('z11').innerHTML = z11
    document.getElementById('z12').innerHTML = z12
    document.getElementById('z13').innerHTML = z13
    document.getElementById('z14').innerHTML = z14
    document.getElementById('z15').innerHTML = z15
    document.getElementById('z16').innerHTML = z16
    
}


// matrix multiply

function multiply4(event)
{

    {
        event.preventDefault()
    }


    let x1 = document.getElementById('x1').value
        x1 = Number(x1)
    let x2 = document.getElementById('x2').value
        x2 = Number(x2)
    let x3 = document.getElementById('x3').value
        x3 = Number(x3)
    let x4 = document.getElementById('x4').value
        x4 = Number(x4)
    let x5 = document.getElementById('x5').value
        x5 = Number(x5)
    let x6 = document.getElementById('x6').value
        x6 = Number(x6)
    let x7 = document.getElementById('x7').value
        x7 = Number(x7)
    let x8 = document.getElementById('x8').value
        x8 = Number(x8)
    let x9 = document.getElementById('x9').value
        x9 = Number(x9)
    let x10 = document.getElementById('x10').value
        x10 = Number(x10)
    let x11 = document.getElementById('x11').value
        x11 = Number(x11)
    let x12 = document.getElementById('x12').value
        x12 = Number(x12)
    let x13 = document.getElementById('x13').value
        x13 = Number(x13)
    let x14 = document.getElementById('x14').value
        x14 = Number(x14)
    let x15 = document.getElementById('x15').value
        x15 = Number(x15)
    let x16 = document.getElementById('x16').value
        x16 = Number(x16)

    let FirstValues = [x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16]

    let y1 = document.getElementById('y1').value
        y1 = Number(y1)
    let y2 = document.getElementById('y2').value
        y2 = Number(y2)
    let y3 = document.getElementById('y3').value
        y3 = Number(y3)
    let y4 = document.getElementById('y4').value
        y4 = Number(y4)
    let y5 = document.getElementById('y5').value
        y5 = Number(y5)
    let y6 = document.getElementById('y6').value
        y6 = Number(y6)
    let y7 = document.getElementById('y7').value
        y7 = Number(y7)
    let y8 = document.getElementById('y8').value
        y8 = Number(y8)
    let y9 = document.getElementById('y9').value
        y9 = Number(y9)
    let y10 = document.getElementById('y10').value
        y10 = Number(y10)
    let y11 = document.getElementById('y11').value
        y11 = Number(y11)
    let y12 = document.getElementById('y12').value
        y12 = Number(y12)
    let y13 = document.getElementById('y13').value
        y13 = Number(y13)
    let y14 = document.getElementById('y14').value
        y14 = Number(y14)
    let y15 = document.getElementById('y15').value
        y15 = Number(y15)
    let y16 = document.getElementById('y16').value
        y16 = Number(y16)
    
    let SecondValues = [y1, y2, y3, y4, y5, y6, y7, y8, y9, y10, y11, y12, y13, y14, y15, y16]

    z1 =  (FirstValues[0]*SecondValues[0]) + (FirstValues[1]*SecondValues[4]) + (FirstValues[2]*SecondValues[8]) + (FirstValues[3]*SecondValues[12])
    z2 =  (FirstValues[0]*SecondValues[1]) + (FirstValues[1]*SecondValues[5]) + (FirstValues[2]*SecondValues[9]) + (FirstValues[3]*SecondValues[13])
    z3 =  (FirstValues[0]*SecondValues[2]) + (FirstValues[1]*SecondValues[6]) + (FirstValues[2]*SecondValues[10]) + (FirstValues[3]*SecondValues[14])
    z4 =  (FirstValues[0]*SecondValues[3]) + (FirstValues[1]*SecondValues[7]) + (FirstValues[2]*SecondValues[11]) + (FirstValues[3]*SecondValues[15])

    z5 =  (FirstValues[4]*SecondValues[0]) + (FirstValues[5]*SecondValues[4]) + (FirstValues[6]*SecondValues[8]) + (FirstValues[7]*SecondValues[12])
    z6 =  (FirstValues[4]*SecondValues[1]) + (FirstValues[5]*SecondValues[5]) + (FirstValues[6]*SecondValues[9]) + (FirstValues[7]*SecondValues[13])
    z7 =  (FirstValues[4]*SecondValues[2]) + (FirstValues[5]*SecondValues[6]) + (FirstValues[6]*SecondValues[10]) + (FirstValues[7]*SecondValues[14])
    z8 =  (FirstValues[4]*SecondValues[3]) + (FirstValues[5]*SecondValues[7]) + (FirstValues[6]*SecondValues[11]) + (FirstValues[7]*SecondValues[15])
    
    z9 =  (FirstValues[8]*SecondValues[0]) + (FirstValues[9]*SecondValues[4]) + (FirstValues[10]*SecondValues[8]) + (FirstValues[11]*SecondValues[12])
    z10 = (FirstValues[8]*SecondValues[1]) + (FirstValues[9]*SecondValues[5]) + (FirstValues[10]*SecondValues[9]) + (FirstValues[11]*SecondValues[13])
    z11 = (FirstValues[8]*SecondValues[2]) + (FirstValues[9]*SecondValues[6]) + (FirstValues[10]*SecondValues[10]) + (FirstValues[11]*SecondValues[14])
    z12 = (FirstValues[8]*SecondValues[3]) + (FirstValues[9]*SecondValues[7]) + (FirstValues[10]*SecondValues[11]) + (FirstValues[11]*SecondValues[15])
    
    z13 = (FirstValues[12]*SecondValues[0]) + (FirstValues[13]*SecondValues[4]) + (FirstValues[14]*SecondValues[8]) + (FirstValues[15]*SecondValues[12])
    z14 = (FirstValues[12]*SecondValues[1]) + (FirstValues[13]*SecondValues[5]) + (FirstValues[14]*SecondValues[9]) + (FirstValues[15]*SecondValues[13])
    z15 = (FirstValues[12]*SecondValues[2]) + (FirstValues[13]*SecondValues[6]) + (FirstValues[14]*SecondValues[10]) + (FirstValues[15]*SecondValues[14])
    z16 = (FirstValues[12]*SecondValues[3]) + (FirstValues[13]*SecondValues[7]) + (FirstValues[14]*SecondValues[11]) + (FirstValues[15]*SecondValues[15])

    document.getElementById('z1').innerHTML = z1
    document.getElementById('z2').innerHTML = z2
    document.getElementById('z3').innerHTML = z3
    document.getElementById('z4').innerHTML = z4
    document.getElementById('z5').innerHTML = z5
    document.getElementById('z6').innerHTML = z6
    document.getElementById('z7').innerHTML = z7
    document.getElementById('z8').innerHTML = z8
    document.getElementById('z9').innerHTML = z9
    document.getElementById('z10').innerHTML = z10
    document.getElementById('z11').innerHTML = z11
    document.getElementById('z12').innerHTML = z12
    document.getElementById('z13').innerHTML = z13
    document.getElementById('z14').innerHTML = z14
    document.getElementById('z15').innerHTML = z15
    document.getElementById('z16').innerHTML = z16
    
}
