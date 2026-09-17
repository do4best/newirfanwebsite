import localFont from "next/font/local";
import {Poppins} from "next/font/google";
export const discoFont = localFont({
    src: "MexcellentRg.otf",
    variable: "--font-disco",

});

export const discoFont2 = localFont({
    src: "MidcentDisco.ttf",
    variable: "--font-disco-2",

});
export const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});