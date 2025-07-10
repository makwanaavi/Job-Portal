import { createTheme, Divider, MantineProvider } from "@mantine/core";
// import "./App.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/tiptap/styles.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindJobs from "./pages/FindJobs";
import Header from "./Header/Header";
import Footer from "./LandingPage/Footer";
import FindTelentPage from "./pages/FindTelentPage";
import TalentProfile from "./pages/TalentProfile";
import PostJob from "./pages/PostJob";
import JobDescriptionPage from "./pages/JobDescriptionPage";
import ApplyJobPage from "./pages/ApplyJobPage";
import CompanyPage from "./pages/CompanyPage";
import PostedJobPage from "./pages/PostedJobPage";

export default function App() {
  const theme = createTheme({
    fontFamily: "poppins, sans-serif",
    focusRing: "never",
    primaryColor: "brightSun",
    primaryShade: 4,
    colors: {
      brightSun: [
        "#fffbeb",
        "#fff3c6",
        "#ffe588",
        "#ffd149",
        "#ffbd20",
        "#f99b07",
        "#dd7302",
        "#b75006",
        "#943c0c",
        "#7a330d",
      ],
      mineShaft: [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
      ],
    },
  });

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <BrowserRouter>
        <div className="relative">
          <Header />
          <Divider size="xs" />

          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/find-jobs" element={<FindJobs />}></Route>
            <Route path="/find-talent" element={<FindTelentPage />}></Route>
            <Route path="/jobs" element={<JobDescriptionPage />}></Route>
            <Route path="/apply-job" element={<ApplyJobPage />}></Route>
            <Route path="/post-job" element={<PostJob />}></Route>
            <Route path="/posted-job" element={<PostedJobPage/>}></Route>
            <Route path="/company" element={<CompanyPage />}></Route>
            <Route path="/talent-profile" element={<TalentProfile />}></Route>
            <Route path="*" element={<HomePage />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}
