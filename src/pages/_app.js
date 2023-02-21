import '../styles/main.css';
import Head from "next/head";
import Navbar from "@/components/layout/Navbar/Navbar";
import Sidebar from "@/components/layout/Sidebar/Sidebar";

import { library } from '@fortawesome/fontawesome-svg-core'
import {faCoffee, faCheck, faList, faPen, faSignal} from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee, faCheck, faList, faPen, faSignal)


function App({ Component, pageProps }) {
    return (<div>
        <Head>
            <title>Vol1ary: мой личный дневник</title>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Raleway:ital,wght@0,600;1,600&display=swap" rel="stylesheet"/>
        </Head>
        <Navbar />
        <Sidebar />
        <div className="container body">
            <Component {...pageProps} />
        </div>
    </div>)
}

export default App;
