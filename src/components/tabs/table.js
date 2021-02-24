import React from "react";
import "../style.css";

function Tabledata() {
    return(
        <div>
            <body>
                <h2>Projects</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Details</th>
                        <th>Year</th>
                    </tr>
                    <tr>
                        <td><a href="text.html">CS185 Project</a></td>
                        <td>Website layout designing and basic styling for CS 185 Spring 2021.</td>
                        <td>2021</td>
                    </tr>
                    <tr>
                        <td><a href="https://ucsb-courses-search.herokuapp.com/">Course Search</a></td>
                        <td>Website allowing UCSB students to search for classes and course history by instructor, subject, and course level.</td>
                        <td>2020</td>
                    </tr>
                </table>
            </body>
        </div>
    );
}

export default Tabledata