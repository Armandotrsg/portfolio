import React from "react"
import { Banner } from "./Banner"
import { Skills } from "./Skills"
import { Projects } from "./Projects"
import { Contact } from "./Contact"
import { Education } from "./Education"

export const Home = () => {
    return (
        <React.Fragment>
            <Banner />
            <Skills />
            <Education />
            <Projects />
            <Contact />
        </React.Fragment>
    )
}