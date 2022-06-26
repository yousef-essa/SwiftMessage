import type {NextPage} from 'next'
import client from "../lib/client";
import {useEffect} from "react";
import HomeComponent from '../components/home/HomeComponent';

let connected = false

const Home: NextPage = () => {
    useEffect(() => {
        if (!connected) {
            client.connect()
            connected = true
        }
    })

    return <HomeComponent/>
}

export default Home
