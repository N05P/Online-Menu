import { configureStore } from '@reduxjs/toolkit'

import AddSlice from './AddSlice'

const Store =configureStore({
    reducer:{
        additems:AddSlice
    }
})


export default Store