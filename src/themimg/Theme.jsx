import { createTheme } from "@material-ui/core";

const white = '#ffffff'
const blue = "#85A2B7"
const black= "#303030"
const green = "#42b546"
const red = "crimson"
const teal = "teal"
const darkblue = "darkblue"
const goldenrod = "goldenrod"
const shadeGray = "#80808017"
const grayLight = "#aeaeae"
const dashboardBackground = "#e4f0fc5c"
const approvedBackground = "rgba(0, 128, 0, 0.151)"
const pendingBackground = "rgba(189, 189, 3, 0.103)"

export default createTheme({
    palette: {
        global: {
            white: `${white}`,
            black: `${black}`,
            blue: `${blue}`,
            green: `${green}`,
            red: `${red}`,
            teal: `${teal}`,
            darkblue: `${darkblue}`,
            goldenrod: `${goldenrod}`,
            shadeGray: `${shadeGray}`,
            dashboardBackground: `${dashboardBackground}`,
            grayLight: `${grayLight}`,
            approvedBackground: `${approvedBackground}`,
            pendingBackground: `${pendingBackground}`

        }
    },
    typography: {
        fontFamily: "Nunito, sans-serif",
        // fontSize: 14,
        fontWeight: 400,
        color: `${black}`
    }
})