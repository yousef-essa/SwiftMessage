import type {NextPage} from 'next'
import HomeComponent from "../components/HomeComponent";
import client from "../lib/client";
import {useEffect} from "react";

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
