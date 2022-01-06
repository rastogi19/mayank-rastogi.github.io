import React from "react";
import classnames from "classnames";
import * as styles from "./index.module.less";

import icon_linkedin from "@images/icon_linkedin.png";
import icon_github from "@images/icon_github.png";
import icon_codepen from "@images/icon_codepen.png";
import icon_dev from "@images/icon_dev.png";
import icon_mail from "@images/icon_mail.png";

const socialConf = [
    {
        icon: icon_linkedin,
        name: "Linkedin",
        url: "https://www.linkedin.com/in/mayank-rastogi-11909830/",
    },
    {
        icon: icon_github,
        name: "Github",
        url: "https://github.com/rastogi19",
    },
    {
        icon: icon_codepen,
        name: "Codepen",
        url: "https://codepen.io/rastogi19",
    },
    {
        icon: icon_dev,
        name: "Dev.to",
        url: "https://dev.to/rastogi19",
    },
    {
        icon: icon_mail,
        name: "Email",
        url: "mailto:rastogimayank1991@gmail.com",
    },
];

function Social() {
    return (
        <div className={classnames("row", styles.social)}>
            {socialConf.map((s) => (
                <div key={s.name} className="col-xs-2 col-sm-2 col-md-1 col-lg-1">
                    <a target="_blank" rel="noopener noreferrer" href={s.url}>
                        <img src={s.icon} alt={s.name} />
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Social;
