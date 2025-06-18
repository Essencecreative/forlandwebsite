import { Routes, Route } from "react-router";
import './App.css';
import Home from './pages/home';
import Background from "./pages/background";
import Goal from "./pages/goal";
import Organization from "./pages/organization";
import Team from "./pages/team";
import Partners from "./pages/partners";
import Whatwedo from "./pages/whatwedo";
import Focusareas from "./pages/focusareas";
import Beneficiaries from "./pages/beneficiaries";
import Wherewework from "./pages/wherewework";
import Forlandimpact from "./pages/forlandimpact";
import Publications from "./pages/publications";
import News from "./pages/news";
import Opportunities from "./pages/opportunities";
import ContactUs from "./pages/contactus";
import Administration from "./pages/administrationandfinancialreports";
import Brochure from "./pages/brochureandnewsletters";
import Forms from "./pages/formandguidlines";
import Project from "./pages/projecttechnicalreports";
import Generalnews from "./pages/generalnews";
import Medinews from "./pages/medianews";
import Radioprogrammes from "./pages/radioprogrammes";
import Events from "./pages/eventsandtraining";
import ProjectGallery from "./pages/gallery";
import BlogSingle from "./pages/blogsingle";
import Pfptechnicalreports from "./pages/pfptechnicalreports";
import Forvactechnicalreports from "./pages/forvactechnicalreports";
import InstitutionalSupportReport from "./pages/institutionalsupportreport";
import InstitutionalSupportNews from "./pages/institutionalsupportnews";
import Teamdetails from "./pages/teamdetails";
import Blog from "./pages/blogs";
import NewsBlog from "./pages/blogs/newsblog";
import Callforproposal from "./pages/callforproposal";
import Jobvacancies from "./pages/jobvacancies";

function App() {
  return (
    <Routes>
    <Route index element={<Home />} />
    <Route path="/background" element={<Background />} />
    <Route path="/goal-and-outcome" element={<Goal />} />
    <Route path="/organization-structure" element={<Organization />} />
    <Route path="/management-team" element={<Team />} />
    <Route path="/teamdetails/:id" element={<Teamdetails />} />
    <Route path="/partners-and-collaborators" element={<Partners />} />
    <Route path="/what-we-do" element={<Whatwedo />} />
    <Route path="/focus-areas" element={<Focusareas />} />
    <Route path="/beneficiaries" element={<Beneficiaries />} />
    <Route path="/where-we-work" element={<Wherewework />} />
    <Route path="/forland-impact" element={<Forlandimpact />} />
    <Route path="/publications" element={<Publications />} />
    <Route path="/news" element={<News />} />
    <Route path="/call-for-proposals" element={<Callforproposal />} />
    <Route path="/job-vacancies" element={<Jobvacancies />} />
    <Route path="/contactus" element={<ContactUs />} />
    <Route path="/forland/administration-and-financial-reports" element={<Administration />} />
    <Route path="/forland/administration-and-financial-reports/:id" element={<Blog />} />
    <Route path="/forland/brochure-and-newsletters" element={<Brochure />} />
    <Route path="/forland/brochure-and-newsletters/:id" element={<Blog />} />
    <Route path="/forland/forms-and-guidelines" element={<Forms />} />
    <Route path="/forland/forms-and-guidelines/:id" element={<Blog />} />
    <Route path="/forland/project-technical-reports" element={<Project />} />
    <Route path="/forland/project-technical-reports/:id" element={<Blog />} />
    <Route path="/general-news" element={<Generalnews />} />
    <Route path="/general-news/:id" element={<NewsBlog />} />
    <Route path="/media-news" element={<Medinews />} />
    <Route path="/media-news/:id" element={<NewsBlog />} />
    <Route path="/radio-programmes" element={<Radioprogrammes />} />
    <Route path="/radio-programmes/:id" element={<NewsBlog />} />
    <Route path="/events-and-training" element={<Events />} />
    <Route path="/events-and-training/:id" element={<NewsBlog />} />
    <Route path="/gallery" element={<ProjectGallery />} />
    <Route path="/blog-single" element={<BlogSingle />} />
    <Route path="/pfp-technical-reports" element={<Pfptechnicalreports />} />
    <Route path="/pfp-technical-reports/:id" element={<Blog />} />
    <Route path="/forvac-technical-reports" element={<Forvactechnicalreports />} />
    <Route path="/forvac-technical-reports/:id" element={<Blog />} />
    <Route path="/forland/institutional-support" element={<InstitutionalSupportReport />} />
    <Route path="/forland/institutional-support/:id" element={<Blog />} />
    <Route path="/institutional-support" element={<InstitutionalSupportNews />} />
    <Route path="/institutional-support/:id" element={<NewsBlog />} />
  </Routes>
  );
}

export default App;