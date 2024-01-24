
import {Home} from "./views/Home/home";
import {Blockchain} from "./views/Blockchain/blockchain";
import {Labs} from "./views/Labs/labs";
import {Faq} from "./views/Faq/faq";
import {Disclaimer} from "./views/Disclaimer/disclaimer";
import {Terms} from "./views/Disclaimer/terms";
import {Contact} from "./views/Contact/contact";
import {Whitepaper} from "./views/Whitepaper/whitepaper";
import {Blogs} from "./views/Blog/blog";
import {Blogpost} from "./views/Blog/blogpost";
import {Bots} from "./views/Projects/bots";

import { Route, Routes  } from "react-router-dom";
import {Arborswap} from "./views/arborswap/arborswap";
import {Updates} from "./views/Updates/updates";
import {Temp} from "./views/temp";
import {WalletSignup} from "./views/WalletSignup/walletSignup";


const Main = () => {

    return (
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/blockchain" element={<Blockchain />} />
                <Route path="/labs" element={<Labs />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/terms-and-conditions" element={<Terms />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/whitepaper" element={<Whitepaper />} />
                <Route path="/blog" element={<Blogs />} />
                <Route path="/blog/:id/:title" element={<Blogpost />} />
                <Route path="/bots" element={<Bots />} />
                <Route path="/arborswap" element={<Arborswap />} />
                <Route path="/wallet-signup" element={<WalletSignup />} />
                <Route path="/updates" element={<Updates />} />
                <Route path="/temp" element={<Temp />} />
            </Routes >
    )
}
export default Main;