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
const dashboardBackground = "#f7f7f7"
const approvedBackground = "rgba(0, 128, 0, 0.151)"
const pendingBackground = "rgba(189, 189, 3, 0.103)"

export const lightTheme =  createTheme({
    palette: {
        // type: 'dark',
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
            // dashboardBackground: `${dashboardBackground}`,
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

// const topbarBackground = "#424242"
export const darkTheme = createTheme({
    palette: {
        type: "dark",
    }
})