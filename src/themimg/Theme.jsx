import { createTheme } from "@material-ui/core";

const white = '#ffffff'
const blue = ""
const black= "#303030"

export default createTheme({
    palette: {
        global: {
            white: `${white}`,
            black: `${black}`
        }
    },
    typography: {
        fontFamily: "Nunito, sans-serif",
        fontSize: 14,
        fontWeight: 400,
        color: `${black}`
    }
})