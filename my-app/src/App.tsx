import { Navbar } from "./Components/Navbar.tsx"
import { Hero } from "./Components/Hero.tsx"
import { About } from "./Components/About.tsx"
import { Projects } from "./Components/Projects.tsx"
import { Skills } from "./Components/Skills.tsx"
import { ContactMe } from "./Components/Contact.tsx"

function App() {
 return <>
   <Navbar/>
   <Hero/>
   <About/>
   <Projects/>
   <Skills/>
   <ContactMe/>
 </>
}

export default App
