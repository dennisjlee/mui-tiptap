import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
  AppBar,
  CssBaseline,
  IconButton,
  PaletteMode,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import PageContentWithEditor from "./PageContentWithEditor";

export default function App() {
  const systemSettingsPrefersDarkMode = useMediaQuery(
    "(prefers-color-scheme: dark)"
  );
  const [paletteMode, setPaletteMode] = useState<PaletteMode>(
    systemSettingsPrefersDarkMode ? "dark" : "light"
  );
  const togglePaletteMode = useCallback(
    () =>
      setPaletteMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: paletteMode,
        },
      }),
    [paletteMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Example app using <code>mui-tiptap</code>
            </Typography>

            <IconButton onClick={togglePaletteMode} color="inherit">
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Toolbar>
        </AppBar>

        <PageContentWithEditor />
      </div>
    </ThemeProvider>
  );
}
