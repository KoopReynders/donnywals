var WEB = WEB || {}; //Namespace aanmaken


(function () { // anonymous self invoking function

    //settings
    WEB.settings = {
        
    };
    //data
    WEB.dataObject = {
        //tournament = {title : "homepage title", description : "Ultimate tournament"},
    }
    
    //controler
    WEB.controler = {
        init: function () {
                //Setup objects
                // Initialize router
                WEB.router.init();
            }
    };

    //routing (gebruik de micro lib routie.js)
    WEB.router = {
        init: function () {
            routie({
                'kindjeugdengezin': function() {
                    WEB.render.page("kindjeugdengezin");
                },
                'volwassenen': function() {
                    WEB.render.page("volwassenen");
                },
                'contact': function() {
                    WEB.render.page("contact");
                },
                '*':function() { //catch all
                    //uitvoeren als je iets onbekends tegen komt
                    //error feedback? of de homepage?
                    WEB.render.page("home");
                }
            });

        }
    }

    //save data object, get, post, sync
    WEB.data = {
        //self : this,

        init: function () {
            
        },
        getData: function(){

        },
        postData: function () {
            
        },
    }



    //Templating
    WEB.render = {
        page: function(obj){
            console.log("WEB.render.page: " +obj)

            switch(obj){
                case "kindjeugdengezin":
                    
                    break;
                case "volwassenen":
                    
                    break;
                case "contact":
                    
                    break;
                default:
                    //Home page
                    console.log("Home page: ");
                    //Transparency.render(document.getElementById('home'), SCOREAPP.dataObject.tournament);
            }
        }


    }

    //Domready (gebruik de micro lib domReady.js)
    domready(function () {
        // dom is loaded! init de app:
        WEB.controler.init();
    })

})();//end:Self invoking function

