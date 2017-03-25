body {
    background: #f0e4fa;
    font-size: 20px;
    font-weight: 300;
}

html {
    height: 100%;
}

/* calculator container */
#calculator {
    width: 440px;
    height: auto;
    margin-top: 40px;
    padding-left: 0px;
    padding-right: 0px;
    border-radius: 10px;
    background-color: #FFF; 
}

/* display, clear and delete buttons */
.display {
    background: linear-gradient(#5a99e6, #9362d5);
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 240px;
    float: none;
    margin-top: 0px;
    margin-left: auto;
    position: absolute;
    font-family: 'Open Sans', sans-serif;
    color: white;
    font-size: 30px;

}

#clear {
    background-color: #1C1C1C;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    letter-spacing: 0.3em;
    color: white;
    height: 50px;
    width: 220px;
    float: left;
    margin-left: auto;
    position: absolute;
}

#clear:hover {
    background-color: #141414;
}

#backspace {
    background-color: #1C1C1C;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    letter-spacing: 0.3em;
    color: white;
    height: 50px;
    width: 220px;
    float: right;
    margin-right: auto;
}

#backspace:hover {
    background-color: #141414;
}

.clearBackspace {
    margin-top: 220px;
    width: 100%;
}

/* numbers row */
#numbers-row {
}

/* buttons */
button {
    width: 110px;
    height: 100px;
    border: none;
    background-color: #1C1C1C;
    color: #FFF;
    border: solid 1px;
    border-color: #303030;
    font-family: 'Open Sans', sans-serif;
    margin: 0 auto;
    float: left; 
    position: relative;
}

button:hover {
    background-color: #141414;
    color: #FFF;
    cursor: pointer;
}

button:focus {
    outline: 0;
}

#pluss {
    border-radius: 0 0 10px 0;
}

#zerobtn { 
    border-radius: 0 0 0 10px;

}

.opp {
    background-color: #1C1C1C;
    color: white;
}

.decimal:hover {
    background-color: #FFFFFF;
    color: #888888;
}

.operator:hover {
    background-color: #FFFFFF;
    color: #888888;
}

.eval:hover {
    background-color: #FFFFFF;
    color: #888888;
}

