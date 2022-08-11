import { createTheme } from "@material-ui/core";

const white = '#ffffff'
const blue = "#85A2B7"
const black= "#303030"
const shadeGray = "#80808017"

export default createTheme({
    palette: {
        global: {
            white: `${white}`,
            black: `${black}`,
            blue: `${blue}`,
            shadeGray: `${shadeGray}`
        }
    },
    typography: {
        fontFamily: "Nunito, sans-serif",
        fontSize: 14,
        fontWeight: 400,
        color: `${black}`
    }
})