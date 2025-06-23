import { configureStore } from '@reduxjs/toolkit'
import LikedSlice from './LikedSlice'

const Store =configureStore({
    reducer:{
        liked:LikedSlice
    }
})


export default Store