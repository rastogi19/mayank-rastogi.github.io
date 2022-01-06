import React from "react";
import * as styles from "./index.module.less";

function Story() {
    return (
        <div className={styles.about}>
            <div className={styles.sub}>Developer | Geek | Problem Solver | Reader</div>

            <div> I am a frontend developer and a learner who is trying to bust the myths about being a full-stack developer.</div>

            <div>
                <span>TL;DR</span>
                Full stack web developer with over 8 years of experience in developing Video
                Analytics Frontend Libraries and SDK in JavaScript for Web Browsers and connected
                devices, Specialised in Video streaming applications with OVP players, deep understanding
                of Adaptive streaming protocols, good understanding of various ad platforms,
                building applications across JavaScript stacks, developing RESTful APIS against SQL
                and NoSQL databases, analytics systems and building corresponding user interfaces,
                I am proficient in end to end development, from requirement analysis to design,
                development and CI/CD.
            </div>

            <div>
                <span>Stack</span>
                <ul>
                    <li>
                        OVP Players : Video JS, Brightcove, HTML5 Video Element, Play Station WEBMAF.
                    </li>
                    <li>
                        Ad Managers / Technologies : Google IMA, YoSpace/ CSAI, SSAI .
                    </li>
                    <li>
                        Knowledge of Streaming protocols: HLS, MPEG-DASH.
                    </li>
                    <li>
                        Frontend: JavaScript, React, Redux, Saga, Less (styled-components,
                        Typescript)
                    </li>
                    <li>
                        Backend: JavaScript - Node/Express
                    </li>
                    <li>Database: MySQL, MongoDB (Cassandra, Elasticsearch, Redis)</li>
                    <li>CI/CD: Docker, Nginx, CircleCI</li>
                </ul>
            </div>

            <div>
                <span>More</span>I have a Bachelors degree in Information Technology. After
                graduation, I started as a FullStack developer creating Enterprise web applications.
                Got the chance to create hybrid application from the scratch.
                I learned to create Metro layout dashboard and created different modules for the
                dashboard and Integared those modules in the dashboard for seamless single experience.
                I&apos;ve built apps in Java, MongoDb and Postgresql along with Sencha Touch and Angular.js.
            </div>

            <div>
                Next I switched my focus on to JavaScript and entered to the world of OTT and Web Video Players.
                I have worked on various projects in the field of Video Streaming SDKs, Video Streaming Libraries,
                These sdk and libraries are based on event driven architecture. Redesigned SDK to bring down the
                integration time of our sdk from 3 weeks to 1 day.

            </div>

            <div>
                Now I&apos;m working on migrating a legacy Python/Django(v1) application
                on to a modern stack, React/Node.
            </div>
        </div>
    );
}

export default Story;
export { default as Social } from "./Social";
