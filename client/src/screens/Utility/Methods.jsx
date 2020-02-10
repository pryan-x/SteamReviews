import React from 'react'


export const spaceArr = (arr) => {
        if (arr) {
            let tempArr = arr.map((item, index) => {
                return <p className='dev-publisher' key={index}>{item}</p>
            })
            return tempArr
        }
        return
    }

export const listKeys = (arr, endIndex, startIndex) => {
        if (arr) {
            let tempArr = Object.keys(arr)
            let arrToReturn = []
            for (let i = startIndex; i < endIndex; i++) {
                arrToReturn.push(<p className='tag-names' key={i}>{tempArr[i]}</p>)
            }
            return arrToReturn
        }
        return
    }

export const makeImgArr = (arr) => {
        if (arr) {
            let tempArr = []
            for (let i = 0; i <= 7; i++) {
                if (arr[i]) tempArr.push(<div className='screenshot-wrapper' key={[i]}><img className='screenshot' key={i} alt= {`img ${i}`} src={`${arr[i].path_full}`} /></div>)
            }
            return tempArr
        }
        return
    }

export const checkSale = (game) => {
        if (game) {
            if (game.discount_percent === 0) {
                return
            } else {
                console.log(`There is a: ${game.discount_percent}% off sale!`)
                return `Sale! ${game.discount_percent}% off!`
            }
        }
    }

export const setPrice = (price, isFree, sale) => {

        if (isFree === true) {
            return 'Free to play!'
        }

        if (price === '0') {
            return 'Non purchaseable'
        }

        let temp = price.split('')
        temp.splice(temp.length - 2, 0, '.')
        temp.splice(0, 0, '$')
        temp = temp.join('')
        return temp
    }

    // spaceArr = (arr) => {
    //     if (arr) {
    //         let tempArr = arr.map((item, index) => {
    //             return <p key={index}>{item}</p>
    //         })
    //         return tempArr
    //     }
    //     return
    // }

    // listArr = (arr) => {
    //     if (arr) {
            
    //         let tempArr =  Object.keys(arr).map((item, index) => {
    //             return <li key={index}>{item}</li>
    //         })
    //         return tempArr
    //     }
    //     return
    // }

    // makeImgArr = (arr) => {
    //     if (arr) {
    //         let tempArr = []
    //         for (let i = 0; i < 5; i++) {
    //             tempArr.push(<img key={i} src={`${arr[i].path_full}`} />)
    //         }
    //         return tempArr
    //     }
    //     return
    // }

    // checkSale = (game) => {
    //     if (game) {
    //         console.log(game)
    //         if (game.discount_percent === 0) {
    //             return
    //         } else {
    //             console.log(`There is a: ${game.discount_percent}% off sale!`)
    //             return `Sale! ${game.discount_percent}% off!`
    //         }
    //     }
    // }

    // setPrice = (price, isFree, sale) => {

    //     if (isFree === true) {
    //         return 'Free to play!'
    //     }

    //     if (price === '0') {
    //         return 'Non purchaseable'
    //     }

    //     let temp = price.split('')
    //     temp.splice(temp.length - 2, 0, '.')
    //     temp.splice(0, 0, '$')
    //     temp = temp.join('')
    //     return temp
    // }
