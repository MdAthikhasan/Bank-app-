

import React from 'react'

 export default function Getlocalstoreage() {
    const getItem = localStorage.getItem('item')
     if (getItem) {
       return JSON.parse(getItem)
    } 
    return []
}

 