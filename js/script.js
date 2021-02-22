$(document).ready(function(){
    



    ////////// Horloge //////////


    let HorlogeTit = $("#titleHorloge");

    $(HorlogeTit).css("textAlign", "center").css("marginTop", "50px");
    
    horloge()

    function horloge()
    {
        var date = new Date(), heures = ("0"+date.getHours()).slice(-2), minutes = ("0"+date.getMinutes()).slice(-2), secondes = ("0"+date.getSeconds()).slice(-2), divTime = $("#horloge");

        $(divTime).html(heures + ":" + minutes + ":" + secondes);
    }
    
    setInterval(horloge, 1000);





    ////////// Chronomètre //////////

    
    var cHeure = 0;
    var cMinute = 0;
    var cSeconde = 0;
    var cMilli = 0;
    var go;
    var init = true;
    var temps = [];
    var boucle = 0;
    var start = $("#start"), divChrono = $("#chrono"), tour = $("#tour"), reset = $("#reset"), chronoTit = $("#titleChronometre");
    tour.hide();
    reset.hide();

    function twoDigit(n) {
        return (n < 10 ? '0' : '') + n    
    }

    function chrono()
    {
        if(cMilli < 99){
            cMilli ++;
        }else{
            cMilli = 0;
            if(cSeconde < 59){
                cSeconde++;
            }
            else{
                cSeconde = 0;
                if(cMinute < 59){
                    cMinute++;
                } else {
                    cMinute = 0;
                    if(cHeure < 24){
                        cHeure++;
                    } else {
                        cHeure = 0
                    }
                }
            }
        }
        $(divChrono).html(twoDigit(cHeure) + ":" + twoDigit(cMinute) + ":" + twoDigit(cSeconde) + ":" + twoDigit(cMilli));
    }

    function onOff(){
        if(init){
            cHeure = 0;
            cMinute = 0;
            cSeconde = 0;
            cMilli = 0;
            go = setInterval(chrono, 10);
            tour.show()
            reset.hide();
            $(start).val("Arrêter");
            $(start).removeClass("btn-success");
            $(start).addClass("btn-danger");
        }
        else 
        {
            clearInterval(go)
            $(start).val("Démarrer");
            tour.hide();
            reset.show();
            $(start).removeClass("btn-danger");
            $(start).addClass("btn-success");
        }
        init =! init;
    }

    $(start).on("click",function(){
        onOff();
    });

    $(reset).on("click",function(){
        $(divChrono).html("00:00:00:00")
        $("#lisTemps").empty();
        boucle = 0;
        reset.hide();
    })

    $(tour).on("click",function(){
        temps.push($(divChrono).text());
        $.each(temps, function(){
            boucle++;
            var lastElemTab = temps.pop();
            $("#lisTemps").prepend("<div style='border-top:2px ridge #caa1a1;background-color: #eef3f0;'> Tour " + twoDigit(boucle) + "&nbsp " + lastElemTab + "</div>");
        });
    });

    

    

    ////////// Minuteur ///////////


    var mHeure = 0;
    var mMinute = 0;
    var mSeconde = 0;
    var minGo;
    var ite = true;

    var topArrH = $("#arrowTopH"), topArrM = $("#arrowTopM"), topArrS = $("#arrowTopS"), botArrH = $("#arrowBotH"), botArrM = $("#arrowBotM"), botArrS = $("#arrowBotS"), minH = $("#minHeure"), minM = $("#minMinute"), minS = $("#minSeconde"); startMin = $("#startMinuteur");

    $(startMin).css("margin", "25px");
    $(minH).css("fontSize", "28px").text(twoDigit(mHeure));
    $(minM).css("fontSize", "28px").text(twoDigit(mMinute));
    $(minS).css("fontSize", "28px").text(twoDigit(mSeconde));

    function repetitif(){
        clearInterval(minGo);
        ite = true;
        $(startMin).removeClass("btn-danger");
        $(startMin).addClass("btn-success");
        $(startMin).val("Départ");
        $("#timeEnd").remove();
    }

    function reAddVal(e, bt1, bt2, dP){
        $(e).removeClass(bt1);
        $(e).addClass(bt2);
        $(e).val(dP);
    }

// Fonction de décompte du minuteur

    function minuteur()
    {
        if(mSeconde > 0){
            mSeconde--
        } else {
            mSeconde = 0;
            if(mMinute > 0){
                mMinute--
                mSeconde = 60;
                mSeconde--;    
            } else {
                mMinute = 0
                mSeconde = 0
                if(mHeure > 0){
                    mHeure--
                    mMinute = 60;
                    mMinute--;
                    mSeconde = 60;
                    mSeconde--;
                } else {
                    clearInterval(minGo);
                    reAddVal(startMin,"btn-danger",'btn-success',"Départ");
                    ite =! ite;
                    $("#box3").append("<div id='timeEnd'>Le temps est écoulé !</div>")
                }
            }
        }
        $(minH).text(twoDigit(mHeure));
        $(minM).text(twoDigit(mMinute));
        $(minS).text(twoDigit(mSeconde));
    }

// Fonction Marche/Arret du minuteur

    function departPause(){
        if(ite){
            minGo = setInterval(minuteur,1000);
            reAddVal(startMin,"btn-success","btn-danger","Pause");
        } else {
            clearInterval(minGo);
            reAddVal(startMin,"btn-danger","btn-success","Départ");
        }
        ite =! ite;
    }

// Boutons du haut

    $(topArrH).on("click",function(){
        repetitif();
        if(mHeure < 23){
            mHeure++;
            $(minH).text(twoDigit(mHeure));
        } else {
            mHeure = 0;
            $(minH).text(twoDigit(mHeure));
        }
    });

    $(topArrM).on("click",function(){
        repetitif();
        if(mMinute < 59){
            mMinute++
            $(minM).text(twoDigit(mMinute));
        } else {  
            mMinute = 0;
            $(minM).text(twoDigit(mMinute));
        }
    });

    $(topArrS).on("click",function(){
        repetitif();
        if(mSeconde < 59){
            mSeconde++;
            $(minS).text(twoDigit(mSeconde));
        } else {
            mSeconde = 0;  
            $(minS).text(twoDigit(mSeconde));
        }
    });

// Boutons du bas

    $(botArrH).on("click",function(){
        repetitif();
        if(mHeure > 0){
            mHeure--
            $(minH).text(twoDigit(mHeure));
        }else{
            mHeure = 23;
            $(minH).text(twoDigit(mHeure));
        }
    });

    $(botArrM).on("click",function(){
        repetitif();
        if(mMinute > 0){
            mMinute--
            $(minM).text(twoDigit(mMinute));
        }else{
            mMinute = 59;
            $(minM).text(twoDigit(mMinute));
        }
    });

    $(botArrS).on("click",function(){
        repetitif();
        if(mSeconde > 0){
            mSeconde--
            $(minS).text(twoDigit(mSeconde));
        }else{
            mSeconde = 59;
            $(minS).text(twoDigit(mSeconde));
        }
    });

// Bouton de lancement 

    $(startMin).on("click", function(){
        if(minH.text() > 0 || minM.text() > 0 || minS.text() > 0){
            departPause();
        }
    });



    ////////// Réveil //////////

    var alarmBtn = $("#alarmButton"), alarmTime = $("#alarmTime"),alarmTimer, tabAlarm = [];
    var textDisplayed;

    function twoDigit(n) {
        return (n < 10 ? '0' : '') + n    
    }

    function setAlarm(){
        var texte = $("#textAlarm").val();
        var ms = document.getElementById("alarmTime").valueAsNumber;
        if(isNaN(ms)){
            alert("Invalid Date");
            return;
        }

        var alarm = new Date(ms);
        var alarmTimes = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
        var diffInMs = alarmTimes.getTime() - (new Date()).getTime();
        if(diffInMs < 0){
            alert("Le temps est déjà passé");
            return;
        }
        setTimeout(function() {
            initAlarm(texte);
            }, diffInMs);
    }

    function initAlarm(texte){
        alert(texte);
    }

    

    $(alarmBtn).on("click",setAlarm);  
 
});
