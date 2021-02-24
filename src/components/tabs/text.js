import React from "react";
import "../style.css";

function Textdata() {
    return(
        <div>
            <body>
                <label for="fname">First name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>
                <label for="lname">Last name:</label><br/>
                <input type="text" id="lname" name="lname"/><br/><br/>
                <p>Favorite Movie</p>
                <input type="radio" id="avengers" name="movie" value="avengers"/>
                <label for="avengers">Avengers</label><br/>
                <input type="radio" id="darkknight" name="movie" value="darkknight"/>
                <label for="darkknight">Dark Knight</label><br/>
                <input type="radio" id="tenet" name="movie" value="tenet"/>
                <label for="tenet">Tenet</label><br/>
                <br/>
                <button type="submit" value="Done">Done</button>
            </body>
        </div>
    );
}

export default Textdata