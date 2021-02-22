<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <title>oclock</title>
</head>
<body>
    <main id="main">
        <section class="container" id="bigSec">
            <section id="sec1">

                <!-- Horloge -->

                <article id="box1" class="quadraBox">
                    <h1 id="titleHorloge">Horloge</h1>
                    <div id="horloge"></div>
                </article>

                <!-- Chronomètre -->

                <article id="box2" class="quadraBox">
                    <h1 id="titleChronometre">Chronomètre</h1>
                    <div id="chrono">00:00:00:00</div>
                    <input type="button" id="start" class="btn btn-success" value="Démarrer">
                    <input type="button" id="tour" class="btn btn-success"  value="Intervalle">
                    <input type="button" id="reset" class="btn btn-light" value="Réinitialiser">
                    <div id="lisTemps"></div>
                </article>
            </section>

            <section id="sec2">

                <!-- Minuteur -->


                <article id="box3" class="quadraBox">
                    <h1>Minuteur</h1>
                    <div>
                        <div>
                            <button class="material-icons" id="arrowTopH" >keyboard_arrow_up</button>
                            <button class="material-icons" id="arrowTopM" >keyboard_arrow_up</button>
                            <button class="material-icons" id="arrowTopS" >keyboard_arrow_up</button>
                        </div>
                        <div id="minuteur" style="display:inline-block">
                            <div id="minHeure" style="display:inline-block"></div>
                            <div style="display:inline-block; font-size:28px;">:</div>
                            <div id="minMinute" style="display:inline-block"></div>
                            <div style="display:inline-block; font-size:28px;">:</div>
                            <div id="minSeconde" style="display:inline-block"></div>
                        </div>
                        <div>
                            <button class="material-icons" id="arrowBotH" >keyboard_arrow_down</button>
                            <button class="material-icons" id="arrowBotM" >keyboard_arrow_down</button>
                            <button class="material-icons" id="arrowBotS" >keyboard_arrow_down</button>
                        </div>
                    </div>
                    <input type="button" id="startMinuteur" class="btn btn-success" value="Départ">
                </article>

                <article id="box4" class="quadraBox">
                    
                    <!-- Reveil -->

                    <h1>Réveil</h1>
                    <div id="inpBox">
                        <input type="datetime-local" id="alarmTime">
                        <input type="text" id="textAlarm">
                    </div>
                    <input type="button" id="alarmButton" value="ok" name="regler l'alarme">
                </article>
            </section>
        </section>

    </main>

    <script src="js/jquery.js"></script>
    <script src="js/script.js"></script>
</body>
</html>