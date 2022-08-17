import { createTheme } from "@material-ui/core";

const white = '#ffffff'
const blue = "#85A2B7"
const black= "#303030"
const green = "#42b546"
const red = "crimson"
const shadeGray = "#80808017"
const grayLight = "#aeaeae"
const dashboardBackground = "#e4f0fc5c"

export default createTheme({
    palette: {
        global: {
            white: `${white}`,
            black: `${black}`,
            blue: `${blue}`,
            green: `${green}`,
            red: `${red}`,
            shadeGray: `${shadeGray}`,
            dashboardBackground: `${dashboardBackground}`,
            grayLight: `${grayLight}`
        }
    },
    typography: {
        fontFamily: "Nunito, sans-serif",
        // fontSize: 14,
        fontWeight: 400,
        color: `${black}`
    }
})