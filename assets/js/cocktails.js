const cocktailsDatabase = [
    { 
        "id": 25, 
        "nome": "Alexander", 
        "ingredienti": ["Cognac", "Crema cacao", "Panna"], 
        "alcolico": true, 
        "gusto": "dolce", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/alexander.webp",
        "ricetta": "Versare 30ml di Cognac, 30ml di crema di cacao scura e 30ml di panna fresca nello shaker con ghiaccio. Shakerare bene e filtrare in coppetta. Spolverare con noce moscata grattugiata." 
    },
    { 
        "id": 59, 
        "nome": "Amaretto Sour", 
        "ingredienti": ["Amaretto", "Succo di limone", "Zucchero", "Albume"], 
        "alcolico": true, 
        "gusto": "dolce", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/amaretto-sour.webp",
        "ricetta": "Nello shaker unire 45ml di Amaretto, 30ml di succo di limone fresco, un barspoon di zucchero e 15ml di albume. Agitare senza ghiaccio. Aggiungere ghiaccio, agitare ancora e filtrare in un bicchiere Old Fashioned su ghiaccio nuovo. Guarnire con scorza di limone e ciliegia." 
    },
    { 
        "id": 17, 
        "nome": "Americano", 
        "ingredienti": ["Campari", "Vermouth rosso", "Soda"], 
        "alcolico": true, 
        "gusto": "amaro", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/americano.webp",
        "ricetta": "In un bicchiere Old Fashioned colmo di ghiaccio, versare 30ml di Campari e 30ml di Vermouth Rosso. Completare con uno splash di soda. Mescolare delicatamente e guarnire con mezza fetta d'arancia e scorza di limone." 
    },
    { 
        "id": 110, 
        "nome": "Apple Sparkler", 
        "ingredienti": ["Succo di mela", "Ginger ale", "Succo di lime", "Cannella"], 
        "alcolico": false, 
        "gusto": "dolce", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/apple-sparkler.webp",
        "ricetta": "Versare 90ml di succo di mela limpido (clear apple juice) in un bicchiere alto colmo di ghiaccio. Aggiungere 10ml di succo di lime fresco e colmare con Ginger Ale. Mescolare e guarnire con fettine sottili di mela verde e una stecca di cannella." 
    },
    { 
        "id": 99, 
        "nome": "Arnold Palmer", 
        "ingredienti": ["Tè freddo", "Limonata"], 
        "alcolico": false, 
        "gusto": "agrumato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/arnold-palmer.webp",
        "ricetta": "In un bicchiere alto colmo di ghiaccio, versare 90ml di Tè freddo non zuccherato e 90ml di Limonata fresca dolce (parti uguali). Mescolare e guarnire con una fetta di limone." 
    },
    { 
        "id": 23, 
        "nome": "Aviation", 
        "ingredienti": ["Gin", "Maraschino", "Violetta", "Succo di limone"], 
        "alcolico": true, 
        "gusto": "floreale", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/aviation.webp",
        "ricetta": "Versare 45ml di Gin, 15ml di liquore Maraschino, 15ml di succo di limone e 1 barspoon (5ml) di liquore alla Violetta nello shaker con ghiaccio. Shakerare e filtrare in coppetta. Guarnire con ciliegina al maraschino." 
    },
    { 
        "id": 65, 
        "nome": "B-52", 
        "ingredienti": ["Liquore al caffè", "Crema al whiskey", "Grand Marnier"], 
        "alcolico": true, 
        "gusto": "dolce", 
        "difficolta": "Difficile", 
        "immagine": "assets/images/cocktails/b-52.webp",
        "ricetta": "In un bicchierino da shot, versare 15ml di liquore al caffè (es. Kahlua). Usando il dorso di un cucchiaino da bar, far scivolare lentamente sopra 15ml di crema al whiskey (Baileys), e infine 15ml di Grand Marnier creando tre strati netti." 
    },
    { 
        "id": 19, 
        "nome": "Bellini", 
        "ingredienti": ["Prosecco", "Pesca"], 
        "alcolico": true, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/bellini.webp",
        "ricetta": "In un flute freddo, versare 50ml di purea di pesca bianca fresca. Aggiungere lentamente 100ml di Prosecco ghiacciato, mescolando molto delicatamente per non sgasare il vino." 
    },
    { 
        "id": 38, 
        "nome": "Black Russian", 
        "ingredienti": ["Vodka", "Liquore al caffè"], 
        "alcolico": true, 
        "gusto": "dolce", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/black-russian.webp",
        "ricetta": "Versare 50ml di Vodka e 20ml di liquore al caffè (es. Kahlua) direttamente in un bicchiere Old Fashioned colmo di cubetti di ghiaccio. Mescolare dolcemente per raffreddare." 
    },
    { 
        "id": 26, 
        "nome": "Bloody Mary", 
        "ingredienti": ["Vodka", "Pomodoro", "Succo di limone", "Spezie"], 
        "alcolico": true, 
        "gusto": "sapido", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/bloody-mary.webp",
        "ricetta": "In un mixing glass, versare 45ml di Vodka, 90ml di succo di pomodoro, 15ml di limone, 2 gocce di Tabasco, 3 gocce di Worcestershire, un pizzico di sale e pepe. Passare delicatamente il liquido da un bicchiere all'altro per raffreddare senza annacquare. Guarnire con gambo di sedano." 
    },
    { 
        "id": 95, 
        "nome": "Blue Hawaiian", 
        "ingredienti": ["Rum bianco", "Blue curaçao", "Cocco", "Succo d'ananas"], 
        "alcolico": true, 
        "gusto": "dolce", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/blue-hawaiian.webp",
        "ricetta": "Frullare (o shakerare energicamente) 30ml di Rum Bianco, 15ml di Blue Curaçao, 15ml di crema di cocco e 60ml di succo d'ananas fresco con ghiaccio tritato. Servire in bicchiere capiente con ombrellino e ananas." 
    },
    { 
        "id": 102, 
        "nome": "Bora Bora", 
        "ingredienti": ["Succo d'ananas", "Maracuja", "Succo di limone", "Granatina"], 
        "alcolico": false, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/bora-bora.webp",
        "ricetta": "Versare nello shaker 60ml di succo d'ananas, 30ml di succo di frutto della passione (maracuja), 15ml di succo di limone e 10ml di sciroppo di Granatina. Shakerare energicamente con ghiaccio e filtrare in un bicchiere alto colmo di ghiaccio fresco." 
    },
    { 
        "id": 28, 
        "nome": "Boulevardier", 
        "ingredienti": ["Bourbon", "Vermouth rosso", "Campari"], 
        "alcolico": true, 
        "gusto": "amaro", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/boulevardier.webp",
        "ricetta": "Versare 45ml di Bourbon, 30ml di Campari e 30ml di Vermouth Rosso in un mixing glass con ghiaccio. Mescolare per raffreddare e filtrare su ghiaccio nuovo in un Old Fashioned o in coppetta. Scorza d'arancia." 
    },
    { 
        "id": 44, 
        "nome": "Bramble", 
        "ingredienti": ["Gin", "Succo di limone", "Zucchero", "Liquore mora"], 
        "alcolico": true, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/bramble.webp",
        "ricetta": "Shakerare 40ml di Gin, 15ml di succo di limone e 10ml di sciroppo di zucchero. Versare su ghiaccio tritato in un Old Fashioned. Aggiungere infine 15ml di liquore alla mora (Crème de Mûre) facendolo sanguinare attraverso il ghiaccio." 
    },
    { 
        "id": 11, 
        "nome": "Caipirinha", 
        "ingredienti": ["Cachaça", "Succo di lime", "Zucchero"], 
        "alcolico": true, 
        "gusto": "agrumato", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/caipirinha.webp",
        "ricetta": "Tagliare mezzo lime a cubetti, metterlo in un bicchiere Old Fashioned con 2 cucchiaini di zucchero di canna e pestare vigorosamente. Riempire di ghiaccio (tritato o a cubetti) e versare 50ml di Cachaça. Mescolare bene." 
    },
    { 
        "id": 94, 
        "nome": "Caipiroska", 
        "ingredienti": ["Vodka", "Succo di lime", "Zucchero"], 
        "alcolico": true, 
        "gusto": "agrumato", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/caipiroska.webp",
        "ricetta": "In un bicchiere Old Fashioned, pestare mezzo lime tagliato a spicchietti con due cucchiaini colmi di zucchero di canna bianco. Riempire il bicchiere di ghiaccio tritato e versare 50ml di Vodka. Mescolare energicamente dal basso verso l'alto." 
    },
    { 
        "id": 107, 
        "nome": "Cinderella", 
        "ingredienti": ["Succo d'arancia", "Succo d'ananas", "Succo di limone", "Ginger ale", "Soda"], 
        "alcolico": false, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/cinderella.webp",
        "ricetta": "Shakerare 40ml di succo d'arancia, 40ml di succo d'ananas e 20ml di succo di limone fresco. Filtrare in un bicchiere colmo di ghiaccio e colmare con un top di Ginger Ale (o Soda) per dare frizzantezza. Guarnire con frutta fresca." 
    },
    { 
        "id": 42, 
        "nome": "Clover Club", 
        "ingredienti": ["Gin", "Lampone", "Succo di limone", "Albume"], 
        "alcolico": true, 
        "gusto": "fruttato", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/clover-club.webp",
        "ricetta": "Nello shaker, inserire 45ml di Gin, 15ml di sciroppo di lampone fresco, 15ml di limone e 15ml di albume. Agitare senza ghiaccio. Aggiungere ghiaccio, shakerare energicamente e filtrare in coppetta." 
    },
    { 
        "id": 85, 
        "nome": "Corpse Reviver #2", 
        "ingredienti": ["Gin", "Lillet blanc", "Triple sec", "Succo di limone", "Assenzio"], 
        "alcolico": true, 
        "gusto": "agrumato", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/corpse-reviver-no-2.webp",
        "ricetta": "Risciacquare una coppetta con 3 gocce di Assenzio e scartare l'eccesso. Nello shaker, unire in parti uguali 20ml Gin, 20ml Lillet Blanc, 20ml Triple Sec (Cointreau) e 20ml succo di limone fresco. Agitare con ghiaccio e filtrare nella coppetta. Scorza d'arancia." 
    },
    { 
        "id": 31, 
        "nome": "Cosmopolitan", 
        "ingredienti": ["Vodka citron", "Triple sec", "Succo di lime", "Succo di mirtillo rosso"], 
        "alcolico": true, 
        "gusto": "agrumato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/cosmopolitan.webp",
        "ricetta": "Versare 40ml di Vodka Citron, 15ml di Triple Sec, 15ml di succo di lime e 30ml di succo di mirtillo rosso (cranberry) in uno shaker. Shakerare e filtrare (Double Strain) in coppetta. Scorza di fiamma d'arancia." 
    },
    { 
        "id": 52, 
        "nome": "Cranberry Cooler", 
        "ingredienti": ["Succo di mirtillo rosso", "Succo d'arancia", "Acqua tonica"], 
        "alcolico": false, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/cranberry-cooler.webp",
        "ricetta": "In un bicchiere alto con tanto ghiaccio, versare 60ml di succo di mirtillo rosso (cranberry) e 60ml di succo d'arancia. Completare con un top di Acqua Tonica. Mescolare e guarnire con fetta d'arancia." 
    },
    { 
        "id": 58, 
        "nome": "Cuba Libre", 
        "ingredienti": ["Rum bianco", "Cola", "Succo di lime"], 
        "alcolico": true, 
        "gusto": "agrumato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/cuba-libre.webp",
        "ricetta": "Spremere mezzo lime (circa 10ml di succo) in un bicchiere alto e lasciare cadere la scorza all'interno. Aggiungere ghiaccio, 50ml di Rum Bianco e colmare con circa 120ml di Cola. Mescolare delicatamente." 
    },
    { 
        "id": 5, 
        "nome": "Daiquiri", 
        "ingredienti": ["Rum bianco", "Succo di lime", "Zucchero"], 
        "alcolico": true, 
        "gusto": "agrumato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/daiquiri.webp",
        "ricetta": "Versare 45ml di Rum Bianco, 25ml di succo di lime fresco e 15ml di sciroppo di zucchero in uno shaker con ghiaccio. Shakerare vigorosamente e filtrare (Double Strain) in una coppetta ghiacciata." 
    },
    { 
        "id": 14, 
        "nome": "Dark 'n' Stormy", 
        "ingredienti": ["Rum scuro", "Ginger beer"], 
        "alcolico": true, 
        "gusto": "speziato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/dark-n-stormy.webp",
        "ricetta": "Riempire un bicchiere alto di ghiaccio. Versare 100ml di Ginger Beer. Aggiungere lentamente 60ml di Rum scuro facendolo galleggiare in superficie (float). Guarnire con uno spicchio di lime." 
    },
    { 
        "id": 61, 
        "nome": "Dirty Martini", 
        "ingredienti": ["Vodka", "Gin", "Vermouth dry", "Salamoia di oliva"], 
        "alcolico": true, 
        "gusto": "sapido", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/dirty-martini.webp",
        "ricetta": "Versare 60ml di Vodka (o Gin), 10ml di Vermouth Dry e 10ml di salamoia di olive in un mixing glass con ghiaccio. Mescolare bene per raffreddare e filtrare in una coppetta Martini. Guarnire con 1 o 3 olive." 
    },
    { 
        "id": 3, 
        "nome": "Dry Martini", 
        "ingredienti": ["Gin", "Vermouth dry"], 
        "alcolico": true, 
        "gusto": "secco", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/dry-martini.webp",
        "ricetta": "Versare 60ml di Gin e 10ml di Vermouth Dry in un mixing glass con ghiaccio. Mescolare per raffreddare e diluire, poi filtrare in una coppetta Martini ghiacciata. Guarnire con oliva o scorza di limone." 
    },
    { 
        "id": 51, 
        "nome": "Elderflower Fizz", 
        "ingredienti": ["Sciroppo di sambuco", "Succo di limone", "Cetriolo", "Soda"], 
        "alcolico": false, 
        "gusto": "floreale", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/elderflower-fizz.webp",
        "ricetta": "In un calice colmo di ghiaccio, versare 30ml di sciroppo di sambuco, 15ml di succo di limone e inserire fette sottili di cetriolo fresco. Colmare con acqua gasata (soda) e mescolare delicatamente." 
    },
    { 
        "id": 7, 
        "nome": "Espresso Martini", 
        "ingredienti": ["Vodka", "Liquore al caffè", "Caffè"], 
        "alcolico": true, 
        "gusto": "amaro", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/espresso-martini.webp",
        "ricetta": "Versare 50ml di Vodka, 10ml di liquore al caffè e 30ml di caffè espresso (meglio se caldo) nello shaker. Shakerare con molta forza per creare la schiuma, filtrare in coppetta. Guarnire con 3 chicchi di caffè." 
    },
    { 
        "id": 54, 
        "nome": "Florida", 
        "ingredienti": ["Succo di pompelmo", "Succo d'arancia", "Succo di limone", "Soda"], 
        "alcolico": false, 
        "gusto": "agrumato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/florida.webp",
        "ricetta": "Shakerare 40ml di succo di pompelmo, 40ml di succo d'arancia e 20ml di succo di limone con ghiaccio. Filtrare in un bicchiere alto e colmare con soda o acqua frizzante." 
    },
    { 
        "id": 33, 
        "nome": "French 75", 
        "ingredienti": ["Gin", "Champagne", "Succo di limone", "Zucchero"], 
        "alcolico": true, 
        "gusto": "agrumato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/french-75.webp",
        "ricetta": "Shakerare 30ml di Gin, 15ml di succo di limone fresco e 15ml di sciroppo di zucchero. Filtrare in un flute e completare dolcemente con 60ml di Champagne freddo. Guarnire con scorza di limone." 
    },
    { 
        "id": 69, 
        "nome": "French Connection", 
        "ingredienti": ["Cognac", "Amaretto"], 
        "alcolico": true, 
        "gusto": "dolce", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/french-connection.webp",
        "ricetta": "Versare 35ml di Cognac e 35ml di Amaretto direttamente in un bicchiere Old Fashioned (o un bicchiere a palloncino da Cognac) colmo di cubetti di ghiaccio. Mescolare delicatamente." 
    },
    { 
        "id": 62, 
        "nome": "French Martini", 
        "ingredienti": ["Vodka", "Chambord", "Succo d'ananas"], 
        "alcolico": true, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/french-martini.webp",
        "ricetta": "Versare 45ml di Vodka, 15ml di liquore Chambord (lampone) e 45ml di succo d'ananas nello shaker. Shakerare energicamente per creare una bella schiuma e filtrare in una coppetta." 
    },
    { 
        "id": 55, 
        "nome": "Fruit Punch", 
        "ingredienti": ["Succo d'ananas", "Succo d'arancia", "Succo di lime", "Granatina"], 
        "alcolico": false, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/fruit-punch.webp",
        "ricetta": "Unire 40ml di succo d'ananas, 40ml di succo d'arancia, 20ml di succo di lime fresco e 10ml di Granatina nello shaker. Agitare e filtrare su ghiaccio fresco in bicchiere grande. Guarnire con frutta di stagione." 
    }, 
    { 
        "id": 20, 
        "nome": "Garibaldi", 
        "ingredienti": ["Campari", "Succo d'arancia"], 
        "alcolico": true, 
        "gusto": "amaro", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/garibaldi.webp",
        "ricetta": "Frullare o montare 120ml di succo d'arancia fresco per renderlo spumoso ('fluffy'). Versare 40ml di Campari in un bicchiere con ghiaccio e colmare con il succo montato. Mescolare delicatamente." 
    },
    { 
        "id": 32, 
        "nome": "Gimlet", 
        "ingredienti": ["Gin", "Lime cordial"], 
        "alcolico": true, 
        "gusto": "agrumato", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/gimlet.webp",
        "ricetta": "Versare 60ml di Gin e 20ml di Lime Cordial in un mixing glass con ghiaccio. Mescolare finché non è ben freddo e filtrare in una coppetta. Guarnire con fettina o scorza di lime." 
    },
    { 
        "id": 64, 
        "nome": "Gin Basil Smash", 
        "ingredienti": ["Gin", "Succo di limone", "Zucchero", "Basilico"], 
        "alcolico": true, 
        "gusto": "erbaceo", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/gin-basil-smash.webp",
        "ricetta": "Pestare 10-12 foglie di basilico fresco nello shaker insieme a 20ml di succo di limone e 15ml di sciroppo di zucchero. Aggiungere 60ml di Gin e ghiaccio, shakerare vigorosamente. Filtrare (Double Strain) in un bicchiere Old Fashioned con ghiaccio." 
    },
    { 
        "id": 10, 
        "nome": "Gin Tonic", 
        "ingredienti": ["Gin", "Acqua tonica"], 
        "alcolico": true, 
        "gusto": "amaro", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/gin-tonic.webp",
        "ricetta": "Riempire un bicchiere alto o un baloon di ghiaccio. Versare 50ml di Gin e completare con circa 100-150ml di Acqua Tonica, versandola dolcemente per non sgasarla. Mescolare leggermente e guarnire con bacche di ginepro o scorza di lime." 
    },
    { 
        "id": 67, 
        "nome": "Godfather", 
        "ingredienti": ["Scotch", "Amaretto"], 
        "alcolico": true, 
        "gusto": "amaro", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/godfather.webp",
        "ricetta": "In un bicchiere Old Fashioned pieno di ghiaccio, versare 50ml di Scotch Whisky e 25ml di liquore Amaretto. Mescolare delicatamente. Nessuna guarnizione necessaria." 
    },
    { 
        "id": 68, 
        "nome": "Godmother", 
        "ingredienti": ["Vodka", "Amaretto"], 
        "alcolico": true, 
        "gusto": "dolce", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/godmother.webp",
        "ricetta": "Come il Godfather, versare 50ml di Vodka e 25ml di liquore Amaretto in un bicchiere Old Fashioned colmo di ghiaccio. Mescolare delicatamente." 
    },
    { 
        "id": 66, 
        "nome": "Grasshopper", 
        "ingredienti": ["Crema di cacao bianca", "Crema di menta verde", "Panna"], 
        "alcolico": true, 
        "gusto": "dolce", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/grasshopper.webp",
        "ricetta": "Versare nello shaker parti uguali (30ml ciascuna) di Crema di cacao bianca, Crema di menta verde e panna liquida. Shakerare energicamente per emulsionare la panna e filtrare in una coppetta preraffreddata." 
    },
    { 
        "id": 108, 
        "nome": "Green Light", 
        "ingredienti": ["Succo d'ananas", "Sciroppo di menta", "Succo di limone"], 
        "alcolico": false, 
        "gusto": "erbaceo", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/greenlight.webp",
        "ricetta": "Versare nello shaker 80ml di succo d'ananas, 10ml di sciroppo di menta verde e 10ml di succo di limone fresco. Shakerare vigorosamente con ghiaccio e filtrare. Il risultato è un drink dal colore verde smeraldo, dolce ed estremamente dissetante." 
    },
    { 
        "id": 70, 
        "nome": "Hemingway Special (Papa Doble)", 
        "ingredienti": ["Rum bianco", "Maraschino", "Succo di pompelmo", "Succo di lime"], 
        "alcolico": true, 
        "gusto": "agrumato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/hemingway-special.webp",
        "ricetta": "Shakerare 60ml di Rum Bianco, 15ml di liquore Maraschino, 40ml di succo di pompelmo e 15ml di succo di lime fresco. Filtrare in una grande coppetta ghiacciata. Nessuno sciroppo di zucchero aggiunto." 
    },
    { 
        "id": 16, 
        "nome": "Hugo", 
        "ingredienti": ["Prosecco", "Sciroppo di sambuco", "Menta", "Soda"], 
        "alcolico": true, 
        "gusto": "floreale", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/hugo-spritz.webp",
        "ricetta": "In un calice con ghiaccio, versare 30ml di sciroppo di fiori di sambuco, 150ml di Prosecco, uno splash di soda e qualche foglia di menta fresca precedentemente schiaffeggiata. Mescolare dolcemente." 
    },
    { 
        "id": 71, 
        "nome": "Hurricane", 
        "ingredienti": ["Rum scuro", "Rum bianco", "Maracuja", "Succo d'arancia", "Succo di lime", "Zucchero", "Granatina"], 
        "alcolico": true, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/hurricane.webp",
        "ricetta": "Versare 60ml Rum Scuro, 60ml Rum Bianco, 60ml purea di frutto della passione, 30ml arancia, 15ml lime, 15ml sciroppo semplice e 1 cucchiaino di Granatina. Shakerare con ghiaccio, filtrare in un bicchiere Hurricane con ghiaccio fresco. Guarnire abbondantemente." 
    },
    { 
        "id": 101, 
        "nome": "Ipanema", 
        "ingredienti": ["Succo di lime", "Zucchero", "Ginger ale", "Maracuja"], 
        "alcolico": false, 
        "gusto": "fruttato", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/ipanema.webp",
        "ricetta": "L'alternativa analcolica alla Caipirinha. In un bicchiere Old Fashioned, pestare mezzo lime a cubetti con 2 cucchiaini di zucchero di canna e la polpa di mezzo frutto della passione (maracuja). Riempire con ghiaccio tritato e colmare con Ginger Ale. Mescolare bene." 
    },
    { 
        "id": 72, 
        "nome": "Irish Coffee", 
        "ingredienti": ["Irish whiskey", "Caffè caldo", "Zucchero", "Panna fresca"], 
        "alcolico": true, 
        "gusto": "dolce", 
        "difficolta": "Difficile", 
        "immagine": "assets/images/cocktails/irish-coffee.webp",
        "ricetta": "In un bicchiere a calice riscaldato, sciogliere 1 cucchiaino colmo di zucchero di canna scuro in 120ml di caffè filtro ben caldo. Aggiungere 50ml di Irish Whiskey e mescolare. Far scivolare in superficie 50ml di panna fresca agitata a mano ma non montata a neve." 
    },
    { 
        "id": 112, 
        "nome": "Italian Soda", 
        "ingredienti": ["Sciroppo di lampone", "Soda", "Panna"], 
        "alcolico": false, 
        "gusto": "dolce", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/italian-soda.webp",
        "ricetta": "Riempire un bicchiere alto di ghiaccio. Versare 30ml di sciroppo di lampone (o amarena/fragola) sul fondo. Colmare quasi fino all'orlo con acqua gasata (soda). Versare infine delicatamente in superficie 15ml di panna liquida, lasciando che si mescoli lentamente scendendo verso il fondo." 
    },
    { 
        "id": 82, 
        "nome": "Jungle Bird", 
        "ingredienti": ["Rum scuro", "Campari", "Succo d'ananas", "Succo di lime", "Zucchero"], 
        "alcolico": true, 
        "gusto": "amaro", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/jungle-bird.webp",
        "ricetta": "Nello shaker versare 45ml di Rum Scuro (es. Blackstrap o Jamaican), 20ml di Campari, 45ml di succo d'ananas, 15ml di lime e 15ml di sciroppo di zucchero. Agitare con ghiaccio e filtrare su ghiaccio nuovo in un Old Fashioned. Ananas come guarnizione." 
    },
    { 
        "id": 96, 
        "nome": "Kamikaze", 
        "ingredienti": ["Vodka", "Triple sec", "Succo di lime"], 
        "alcolico": true, 
        "gusto": "agrumato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/kamikaze.webp",
        "ricetta": "Versare 30ml di Vodka, 30ml di Triple Sec e 30ml di succo di lime fresco nello shaker. Agitare con ghiaccio e filtrare in una coppetta o servire come shot freddo. Guarnire con scorza di lime." 
    },
    { 
        "id": 73, 
        "nome": "Kir Royale", 
        "ingredienti": ["Champagne", "Crème de cassis"], 
        "alcolico": true, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/kir-royale.webp",
        "ricetta": "Versare 10ml di Crème de Cassis (liquore al ribes nero) sul fondo di un flute ghiacciato. Colmare delicatamente con 90ml di Champagne ben freddo. Per la versione normale ('Kir'), usare vino bianco secco al posto dello Champagne." 
    },
    { 
        "id": 43, 
        "nome": "Last Word", 
        "ingredienti": ["Gin", "Chartreuse", "Maraschino", "Succo di lime"], 
        "alcolico": true, 
        "gusto": "erbaceo", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/last-word.webp",
        "ricetta": "Inserire nello shaker parti uguali di tutti gli ingredienti: 20ml di Gin, 20ml di Chartreuse Verde, 20ml di liquore Maraschino e 20ml di succo di lime. Shakerare vigorosamente e filtrare in coppetta." 
    },
    { 
        "id": 56, 
        "nome": "Lemon Squash", 
        "ingredienti": ["Succo di limone", "Zucchero", "Soda"], 
        "alcolico": false, 
        "gusto": "agrumato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/lemon-squash.webp",
        "ricetta": "Shakerare energicamente 45ml di succo di limone fresco e 20ml di sciroppo di zucchero per amalgamare. Filtrare in bicchiere alto pieno di ghiaccio e colmare con soda. Guarnire con una fetta di limone." 
    },
    { 
        "id": 27, 
        "nome": "Long Island Iced Tea", 
        "ingredienti": ["Vodka", "Rum bianco", "Gin", "Tequila", "Triple sec", "Succo di limone", "Zucchero", "Cola"], 
        "alcolico": true, 
        "gusto": "agrumato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/long-island-iced-tea.webp",
        "ricetta": "Shakerare 15ml di Vodka, 15ml Rum Bianco, 15ml Gin, 15ml Tequila, 15ml Triple Sec, 25ml di limone e 20ml di sciroppo di zucchero. Versare in un bicchiere alto con ghiaccio e colmare con un top di Cola." 
    },
    { 
        "id": 29, 
        "nome": "Mai Tai", 
        "ingredienti": ["Rum ambrato", "Rum scuro", "Orange curaçao", "Orzata", "Succo di lime"], 
        "alcolico": true, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/mai-tai.webp",
        "ricetta": "Shakerare 30ml di Rum Ambrato, 30ml di Rum Scuro, 15ml di Orange Curaçao, 15ml di sciroppo di Orzata e 30ml di succo di lime fresco. Servire in bicchiere basso colmo di ghiaccio tritato. Guarnire con menta." 
    },
    { 
        "id": 113, 
        "nome": "Mango Mule", 
        "ingredienti": ["Mango", "Miele", "Succo di lime", "Ginger beer"], 
        "alcolico": false, 
        "gusto": "speziato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/mango-mule.webp",
        "ricetta": "Shakerare 45ml di purea di mango, 15ml di sciroppo di miele e 15ml di succo di lime. Filtrare in un mug di rame pieno di ghiaccio, colmare con 90ml di Ginger Beer e mescolare dolcemente. Guarnire con menta." 
    },
    { 
        "id": 6, 
        "nome": "Manhattan", 
        "ingredienti": ["Rye whiskey", "Vermouth rosso", "Angostura"], 
        "alcolico": true, 
        "gusto": "amaro", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/manhattan.webp",
        "ricetta": "In un mixing glass con ghiaccio versare 50ml di Rye Whiskey, 20ml di Vermouth Rosso e 1 goccia di Angostura. Mescolare dolcemente e filtrare in una coppetta. Guarnire con una ciliegina al maraschino." 
    },
    { 
        "id": 4, 
        "nome": "Margarita", 
        "ingredienti": ["Tequila", "Triple sec", "Succo di lime"], 
        "alcolico": true, 
        "gusto": "agrumato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/margarita.webp",
        "ricetta": "Inserire 50ml di Tequila, 20ml di Triple Sec e 15ml di succo di lime fresco nello shaker con ghiaccio. Shakerare vigorosamente e filtrare in una coppetta con un anello di sale (crusta) sul bordo." 
    },
    { 
        "id": 87, 
        "nome": "Mary Pickford", 
        "ingredienti": ["Rum bianco", "Succo d'ananas", "Maraschino", "Granatina"], 
        "alcolico": true, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/mary-pickford.webp",
        "ricetta": "Nello shaker versare 45ml di Rum Bianco, 45ml di succo d'ananas fresco, 5ml di liquore Maraschino e 5ml di sciroppo di Granatina. Agitare energicamente con ghiaccio e filtrare in una coppetta." 
    },
    { 
        "id": 97, 
        "nome": "Mezcalita", 
        "ingredienti": ["Mezcal", "Triple sec", "Succo di lime"], 
        "alcolico": true, 
        "gusto": "speziato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/mezcalita.webp",
        "ricetta": "Come un Margarita, shakerare 50ml di Mezcal (al posto della Tequila per la nota affumicata), 20ml di Triple Sec e 15ml di succo di lime. Filtrare in un bicchiere con ghiaccio, bordo precedentemente cosparso di sale (o sale al peperoncino)." 
    },
    { 
        "id": 83, 
        "nome": "Michelada", 
        "ingredienti": ["Birra chiara", "Succo di lime", "Sale", "Tabasco", "Salsa Worcestershire"], 
        "alcolico": true, 
        "gusto": "sapido", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/michelada.webp",
        "ricetta": "Bordare un bicchiere da birra con sale. Aggiungere ghiaccio, 15ml di succo di lime fresco, alcune gocce di Tabasco, alcune di Worcestershire e un pizzico di sale. Colmare con circa 330ml di Birra messicana (Lager) ghiacciata. Mescolare piano." 
    },
    { 
        "id": 74, 
        "nome": "Mimosa", 
        "ingredienti": ["Prosecco", "Champagne", "Succo d'arancia"], 
        "alcolico": true, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/mimosa.webp",
        "ricetta": "Versare in un flute o bicchiere da vino 75ml di succo d'arancia fresco filtrato. Aggiungere con cautela 75ml di Prosecco o Champagne ben freddo. Non mescolare per non sgasare." 
    },
    { 
        "id": 57, 
        "nome": "Mint Julep", 
        "ingredienti": ["Bourbon", "Menta", "Zucchero", "Acqua"], 
        "alcolico": true, 
        "gusto": "erbaceo", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/mint-julep.webp",
        "ricetta": "In un Julep cup in acciaio, pestare leggermente 4 rametti di menta con 10ml di sciroppo di zucchero e 10ml di acqua. Riempire colmo di ghiaccio tritato, versare 60ml di Bourbon, mescolare vigorosamente e guarnire con abbondante menta." 
    },
    { 
        "id": 8, 
        "nome": "Mojito", 
        "ingredienti": ["Rum bianco", "Menta", "Succo di lime", "Zucchero", "Soda"], 
        "alcolico": true, 
        "gusto": "erbaceo", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/mojito.webp",
        "ricetta": "In un bicchiere alto, pestare delicatamente 20ml di succo di lime, 2 cucchiaini di zucchero bianco e 6-8 foglie di menta. Riempire di ghiaccio (meglio se tritato), aggiungere 45ml di Rum bianco, completare con soda e mescolare tirando su menta e lime." 
    },
    { 
        "id": 88, 
        "nome": "Monkey Gland", 
        "ingredienti": ["Gin", "Succo d'arancia", "Assenzio", "Granatina"], 
        "alcolico": true, 
        "gusto": "agrumato", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/monkey-gland.webp",
        "ricetta": "Risciacquare una coppetta con Assenzio. Shakerare 50ml di Gin, 30ml di succo d'arancia fresco e 2 gocce di Granatina con ghiaccio. Filtrare nella coppetta aromatizzata." 
    },
    { 
        "id": 9, 
        "nome": "Moscow Mule", 
        "ingredienti": ["Vodka", "Ginger beer", "Succo di lime"], 
        "alcolico": true, 
        "gusto": "speziato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/moscow-mule.webp",
        "ricetta": "In una tazza di rame (Mug) colma di ghiaccio, versare 45ml di Vodka e 15ml di succo di lime fresco. Colmare con circa 90ml di Ginger Beer. Mescolare leggermente e guarnire con uno spicchio di lime e menta." 
    },
    { 
        "id": 1, 
        "nome": "Negroni", 
        "ingredienti": ["Gin", "Campari", "Vermouth rosso"], 
        "alcolico": true, 
        "gusto": "amaro", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/negroni.webp",
        "ricetta": "Versare 30ml di Gin, 30ml di Campari e 30ml di Vermouth Rosso in un bicchiere Old Fashioned colmo di ghiaccio. Mescolare delicatamente per 15-20 secondi. Guarnire con una scorza d'arancia." 
    },
    { 
        "id": 18, 
        "nome": "Negroni Sbagliato", 
        "ingredienti": ["Prosecco", "Vermouth rosso", "Campari"], 
        "alcolico": true, 
        "gusto": "amaro", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/negroni-sbagliato.webp",
        "ricetta": "In un bicchiere Old Fashioned con ghiaccio, versare 30ml di Campari e 30ml di Vermouth Rosso. Completare con 30ml di Prosecco (al posto del Gin). Mescolare delicatamente e guarnire con fetta d'arancia." 
    },
    { 
        "id": 84, 
        "nome": "New York Sour", 
        "ingredienti": ["Bourbon", "Succo di limone", "Zucchero", "Albume", "Vino rosso"], 
        "alcolico": true, 
        "gusto": "agrumato", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/new-york-sour.webp",
        "ricetta": "Preparare un Whiskey Sour shakerando 60ml Bourbon, 30ml limone, 15ml sciroppo e (opzionale) 15ml albume. Filtrare in un bicchiere con ghiaccio. Versare delicatamente sul retro di un cucchiaio 15ml di Vino Rosso secco (es. Syrah o Malbec) per farlo galleggiare." 
    },
    { 
        "id": 2, 
        "nome": "Old Fashioned", 
        "ingredienti": ["Bourbon", "Angostura", "Zucchero"], 
        "alcolico": true, 
        "gusto": "amaro", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/old-fashioned.webp",
        "ricetta": "Mettere 1 zolletta di zucchero (o 10ml sciroppo) nel bicchiere, aggiungere 2 gocce di Angostura e un goccio d'acqua. Pestare finché non si scioglie. Aggiungere ghiaccio e 45ml di Bourbon. Mescolare bene. Guarnire con scorza d'arancia." 
    },
    { 
        "id": 13, 
        "nome": "Paloma", 
        "ingredienti": ["Tequila", "Soda al pompelmo", "Succo di lime"], 
        "alcolico": true, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/paloma.webp",
        "ricetta": "In un bicchiere alto con ghiaccio, versare 50ml di Tequila, 15ml di succo di lime fresco e un pizzico di sale. Colmare con circa 100ml di soda al pompelmo rosa. Mescolare delicatamente." 
    },
    { 
        "id": 104, 
        "nome": "Pantera Rosa", 
        "ingredienti": ["Succo d'ananas", "Panna", "Granatina"], 
        "alcolico": false, 
        "gusto": "dolce", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/pantera-rosa.webp",
        "ricetta": "Nello shaker unire 90ml di succo d'ananas, 30ml di panna liquida e 15ml di sciroppo di granatina. Shakerare energicamente per creare una consistenza spumosa e un colore rosa uniforme. Filtrare in un bicchiere alto o in una coppa capiente." 
    },
    { 
        "id": 46, 
        "nome": "Paper Plane", 
        "ingredienti": ["Bourbon", "Amaro Nonino", "Aperol", "Succo di limone"], 
        "alcolico": true, 
        "gusto": "amaro", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/paper-plane.webp",
        "ricetta": "Versare nello shaker parti uguali: 30ml di Bourbon, 30ml di Amaro Nonino, 30ml di Aperol e 30ml di succo di limone fresco. Shakerare e filtrare in una coppetta." 
    },
    { 
        "id": 89, 
        "nome": "Paradise", 
        "ingredienti": ["Gin", "Apricot brandy", "Succo d'arancia"], 
        "alcolico": true, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/paradise.webp",
        "ricetta": "Shakerare vigorosamente 35ml di Gin, 20ml di Apricot Brandy e 15ml di succo d'arancia fresco con cubetti di ghiaccio. Filtrare in una coppetta ghiacciata." 
    },
    { 
        "id": 45, 
        "nome": "Penicillin", 
        "ingredienti": ["Scotch", "Zenzero", "Miele", "Succo di limone"], 
        "alcolico": true, 
        "gusto": "speziato", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/penicillin.webp",
        "ricetta": "Shakerare 60ml di Blended Scotch, 20ml di succo di limone, e 20ml di sciroppo di miele/zenzero. Filtrare su un grosso cubo di ghiaccio e versare delicatamente in superficie (float) 10ml di Islay Single Malt Scotch affumicato." 
    },
    { 
        "id": 98, 
        "nome": "Pimm's Cup", 
        "ingredienti": ["Pimm's No.1", "Ginger ale", "Frutta fresca", "Cetriolo", "Menta"], 
        "alcolico": true, 
        "gusto": "erbaceo", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/pimms-cup.webp",
        "ricetta": "In un grande bicchiere o calice con ghiaccio, versare 50ml di Pimm's No.1. Aggiungere fette di fragole, fette d'arancia, fette di cetriolo e rametti di menta. Colmare con circa 150ml di Ginger Ale (o limonata) e mescolare dolcemente." 
    },
    { 
        "id": 12, 
        "nome": "Pina Colada", 
        "ingredienti": ["Rum bianco", "Cocco", "Succo d'ananas"], 
        "alcolico": true, 
        "gusto": "dolce", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/pina-colada.webp",
        "ricetta": "In un frullatore, inserire 50ml di Rum Bianco, 30ml di crema di cocco, 50ml di succo d'ananas fresco e mezza tazza di ghiaccio tritato. Frullare fino a ottenere un composto spumoso. Servire in un bicchiere capiente con fetta d'ananas." 
    },
    { 
        "id": 22, 
        "nome": "Pisco Sour", 
        "ingredienti": ["Pisco", "Succo di limone", "Zucchero", "Albume"], 
        "alcolico": true, 
        "gusto": "agrumato", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/pisco-sour.webp",
        "ricetta": "Shakerare 60ml di Pisco, 30ml di succo di limone, 20ml di sciroppo di zucchero e 15ml di albume senza ghiaccio. Aggiungere ghiaccio, shakerare e filtrare in coppetta. Guarnire con 3 gocce di Angostura sulla schiuma." 
    },
    { 
        "id": 90, 
        "nome": "Planter's Punch", 
        "ingredienti": ["Rum scuro", "Succo di lime", "Zucchero", "Angostura", "Acqua"], 
        "alcolico": true, 
        "gusto": "speziato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/planters-punch.webp",
        "ricetta": "Shakerare 45ml di Rum Scuro Jamaicano, 15ml di succo di lime fresco e 30ml di sciroppo di zucchero di canna. Versare in un bicchiere alto colmo di ghiaccio tritato, allungare con un goccio d'acqua, aggiungere 3-4 gocce di Angostura in superficie." 
    },
    { 
        "id": 60, 
        "nome": "Pornstar Martini", 
        "ingredienti": ["Vodka vaniglia", "Passoã", "Maracuja", "Succo di lime", "Sciroppo di vaniglia", "Prosecco"], 
        "alcolico": true, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/pornstar-martini.webp",
        "ricetta": "Shakerare 45ml di Vodka alla vaniglia, 15ml di Passoã, 30ml di purea di maracuja (frutto della passione), 15ml di lime e 10ml di sciroppo di vaniglia. Filtrare in una coppetta. Servire con mezzo frutto della passione e uno shottino (30ml) di Prosecco a parte." 
    },
    { 
        "id": 91, 
        "nome": "Porto Flip", 
        "ingredienti": ["Vino porto", "Brandy", "Tuorlo d'uovo", "Zucchero"], 
        "alcolico": true, 
        "gusto": "dolce", 
        "difficolta": "Difficile", 
        "immagine": "assets/images/cocktails/porto-flip.webp",
        "ricetta": "Shakerare prima senza ghiaccio 45ml di Porto rosso (Ruby o Tawny), 15ml di Brandy e 1 tuorlo d'uovo fresco per creare schiuma. Aggiungere ghiaccio, shakerare a lungo, e filtrare in coppetta. Spolverare abbondante noce moscata." 
    },
    { 
        "id": 103, 
        "nome": "Pussyfoot", 
        "ingredienti": ["Succo d'arancia", "Succo di limone", "Succo di lime", "Granatina", "Tuorlo d'uovo"], 
        "alcolico": false, 
        "gusto": "agrumato", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/pussyfoot.webp",
        "ricetta": "Un classico mocktail vintage. Nello shaker unire 60ml di succo d'arancia, 15ml di succo di limone, 15ml di succo di lime, 10ml di Granatina e 1 tuorlo d'uovo fresco. Shakerare senza ghiaccio per montare l'uovo, poi aggiungere ghiaccio, shakerare di nuovo e filtrare in coppetta." 
    },
    { 
        "id": 92, 
        "nome": "Ramos Gin Fizz", 
        "ingredienti": ["Gin", "Succo di limone", "Succo di lime", "Zucchero", "Panna", "Albume", "Acqua di fiori d'arancio", "Soda"], 
        "alcolico": true, 
        "gusto": "floreale", 
        "difficolta": "Difficile", 
        "immagine": "assets/images/cocktails/ramos-gin-fizz.webp",
        "ricetta": "Shakerare vigorosamente e senza ghiaccio: 45ml Gin, 15ml limone, 15ml lime, 30ml sciroppo, 30ml panna, 1 albume e 3 gocce di acqua di fiori d'arancio. Aggiungere ghiaccio, shakerare per almeno 2 minuti, filtrare in bicchiere alto. Versare un goccio di soda per alzare il cappello di schiuma." 
    },
    { 
        "id": 93, 
        "nome": "Rob Roy", 
        "ingredienti": ["Scotch", "Vermouth rosso", "Angostura"], 
        "alcolico": true, 
        "gusto": "amaro", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/rob-roy.webp",
        "ricetta": "Versare 45ml di Scotch Whisky, 25ml di Vermouth Rosso e 1 goccia di Angostura in un mixing glass con ghiaccio. Mescolare dolcemente per raffreddare. Filtrare in una coppetta da cocktail o su ghiaccio in un bicchiere basso. Ciliegina." 
    },
    { 
        "id": 100, 
        "nome": "Roy Rogers", 
        "ingredienti": ["Cola", "Granatina"], 
        "alcolico": false, 
        "gusto": "dolce", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/roy-rogers.webp",
        "ricetta": "In un bicchiere alto (highball) pieno di ghiaccio, versare 150ml di Cola e aggiungere 20ml di sciroppo di Granatina. Mescolare delicatamente e guarnire con una ciliegina al maraschino. È la variante alla cola dello Shirley Temple." 
    },
    { 
        "id": 40, 
        "nome": "Rusty Nail", 
        "ingredienti": ["Drambuie", "Scotch"], 
        "alcolico": true, 
        "gusto": "dolce", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/rusty-nail.webp",
        "ricetta": "In un bicchiere basso (Old Fashioned) colmo di ghiaccio, versare 45ml di Scotch Whisky e 25ml di Drambuie. Mescolare dolcemente. Guarnire con scorzetta di limone." 
    },
    { 
        "id": 105, 
        "nome": "Safe Sex on the Beach", 
        "ingredienti": ["Succo di mirtillo rosso", "Succo di pompelmo", "Pesca"], 
        "alcolico": false, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/safe-sex-on-the-beach.webp",
        "ricetta": "La versione analcolica del celebre drink. Versare in un bicchiere alto con ghiaccio 60ml di succo di mirtillo rosso (cranberry), 60ml di succo di pompelmo e 40ml di nettare o succo di pesca. Mescolare delicatamente e guarnire con una fetta d'arancia." 
    },
    { 
        "id": 53, 
        "nome": "San Francisco", 
        "ingredienti": ["Succo d'arancia", "Succo di limone", "Succo d'ananas", "Granatina"], 
        "alcolico": false, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/san-francisco.webp",
        "ricetta": "Versare nello shaker 30ml di succo d'arancia, 30ml di succo di limone, 30ml di succo d'ananas e 10ml di Granatina. Agitare vigorosamente e servire in un tumbler alto con ghiaccio." 
    },
    { 
        "id": 41, 
        "nome": "Sazerac", 
        "ingredienti": ["Cognac", "Assenzio", "Zucchero", "Peychaud's"], 
        "alcolico": true, 
        "gusto": "erbaceo", 
        "difficolta": "Difficile", 
        "immagine": "assets/images/cocktails/sazerac.webp",
        "ricetta": "Risciacquare un bicchiere basso ghiacciato con 10ml di Assenzio e scartare l'eccesso. In un mixing glass, pestare 1 zolletta di zucchero con 3 gocce di Peychaud's e poca acqua. Aggiungere ghiaccio e 50ml di Cognac (o Rye). Mescolare, filtrare nel bicchiere aromatizzato. Strizzare olii di limone sul drink." 
    },
    { 
        "id": 76, 
        "nome": "Sea Breeze", 
        "ingredienti": ["Vodka", "Succo di mirtillo rosso", "Succo di pompelmo"], 
        "alcolico": true, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/sea-breeze.webp",
        "ricetta": "Versare 40ml di Vodka, 120ml di succo di mirtillo rosso (cranberry) e 30ml di succo di pompelmo in un bicchiere alto colmo di ghiaccio. Mescolare dolcemente e guarnire con una fetta di lime." 
    },
    { 
        "id": 37, 
        "nome": "Sex on the Beach", 
        "ingredienti": ["Vodka", "Schnapps pesca", "Succo d'arancia", "Succo di mirtillo rosso"], 
        "alcolico": true, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/sex-on-the-beach.webp",
        "ricetta": "Shakerare 40ml di Vodka, 20ml di Peach Schnapps, 40ml di succo d'arancia e 40ml di succo di mirtillo rosso (cranberry). Filtrare in un bicchiere alto su ghiaccio fresco. Guarnire con arancia." 
    },
    { 
        "id": 49, 
        "nome": "Shirley Temple", 
        "ingredienti": ["Ginger ale", "Granatina"], 
        "alcolico": false, 
        "gusto": "dolce", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/shirley-temple.webp",
        "ricetta": "In un bicchiere highball con ghiaccio, versare 100ml di Ginger Ale (o Lemon-Lime soda) e aggiungere 20ml di sciroppo di Granatina. Mescolare appena e guarnire con ciliegia al maraschino." 
    },
    { 
        "id": 30, 
        "nome": "Sidecar", 
        "ingredienti": ["Cognac", "Triple sec", "Succo di limone"], 
        "alcolico": true, 
        "gusto": "agrumato", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/sidecar.webp",
        "ricetta": "Versare 50ml di Cognac, 20ml di Triple Sec e 20ml di succo di limone fresco in uno shaker. Shakerare vigorosamente e filtrare in una coppetta dal bordo precedentemente zuccherato (crusta di zucchero)." 
    },
    { 
        "id": 77, 
        "nome": "Singapore Sling", 
        "ingredienti": ["Gin", "Cherry brandy", "Cointreau", "Bénédictine", "Succo d'ananas", "Succo di lime", "Granatina", "Angostura"], 
        "alcolico": true, 
        "gusto": "fruttato", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/singapore-sling.webp",
        "ricetta": "Nello shaker unire 30ml Gin, 15ml Cherry Brandy, 7.5ml Cointreau, 7.5ml Bénédictine, 120ml succo d'ananas, 15ml lime, 10ml Granatina e 1 goccia Angostura. Shakerare, filtrare in un bicchiere alto su ghiaccio. Guarnire con ananas e ciliegia." 
    },
    { 
        "id": 86, 
        "nome": "Southside", 
        "ingredienti": ["Gin", "Succo di limone", "Zucchero", "Menta"], 
        "alcolico": true, 
        "gusto": "erbaceo", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/southside.webp",
        "ricetta": "Shakerare 60ml di Gin, 30ml di succo di limone fresco, 15ml di sciroppo di zucchero e 6-8 foglie di menta fresca con tanto ghiaccio. Filtrare in una coppetta ghiacciata. Guarnire con una fogliolina di menta." 
    },
    { 
        "id": 15, 
        "nome": "Spritz", 
        "ingredienti": ["Prosecco", "Aperol", "Soda"], 
        "alcolico": true, 
        "gusto": "amaro", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/spritz.webp",
        "ricetta": "In un calice grande colmo di ghiaccio, versare 90ml di Prosecco, 60ml di Aperol e uno splash (circa 15ml) di soda. Mescolare delicatamente dal basso verso l'alto. Guarnire con mezza fetta d'arancia." 
    },
    { 
        "id": 78, 
        "nome": "Stinger", 
        "ingredienti": ["Cognac", "Crema di menta bianca"], 
        "alcolico": true, 
        "gusto": "erbaceo", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/stinger.webp",
        "ricetta": "Versare 50ml di Cognac e 20ml di crema di menta bianca in un mixing glass con ghiaccio. Mescolare bene per raffreddare e filtrare in una coppetta (tradizionale) oppure in un bicchiere basso su ghiaccio tritato." 
    },
    { 
        "id": 115, 
        "nome": "Sweet Sunrise", 
        "ingredienti": ["Succo d'arancia", "Granatina"], 
        "alcolico": false, 
        "gusto": "dolce", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/sweet-sunrise.webp",
        "ricetta": "La versione zero-alcol del Tequila Sunrise. In un bicchiere alto colmo di ghiaccio, versare 150ml di succo d'arancia. Lentamente, far scivolare lungo il bordo del bicchiere 15ml di sciroppo di Granatina, in modo che si depositi sul fondo creando l'effetto cromatico dell'alba." 
    },
    { 
        "id": 36, 
        "nome": "Tequila Sunrise", 
        "ingredienti": ["Tequila", "Succo d'arancia", "Granatina"], 
        "alcolico": true, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/tequila-sunrise.webp",
        "ricetta": "In un bicchiere alto con ghiaccio, versare 45ml di Tequila e 90ml di succo d'arancia fresco. Lasciar scivolare lentamente sul bordo 15ml di sciroppo di Granatina perché si depositi sul fondo creando l'effetto 'alba'." 
    },
    { 
        "id": 35, 
        "nome": "Tom Collins", 
        "ingredienti": ["Gin", "Succo di limone", "Zucchero", "Soda"], 
        "alcolico": true, 
        "gusto": "agrumato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/tom-collins.webp",
        "ricetta": "Shakerare 45ml di Gin, 30ml di succo di limone e 15ml di sciroppo di zucchero. Versare filtrando in un bicchiere alto colmo di ghiaccio, completare con circa 60ml di soda water e mescolare. Ciliegia e fetta di limone." 
    },
    { 
        "id": 63, 
        "nome": "Tommy's Margarita", 
        "ingredienti": ["Tequila reposado", "Succo di lime", "Sciroppo d'agave"], 
        "alcolico": true, 
        "gusto": "agrumato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/tommys-margarita.webp",
        "ricetta": "Inserire nello shaker 60ml di Tequila Reposado, 30ml di succo di lime fresco e 15ml di sciroppo d'agave (diluito 1:1 con acqua). Shakerare bene e filtrare in un bicchiere Old Fashioned su ghiaccio. Nessun bordo di sale." 
    },
    { 
        "id": 111, 
        "nome": "Tropical Fizz", 
        "ingredienti": ["Mango", "Succo d'arancia", "Maracuja", "Soda"], 
        "alcolico": false, 
        "gusto": "fruttato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/tropical-fizz.webp",
        "ricetta": "Shakerare 40ml di succo (o nettare) di mango, 40ml di succo d'arancia e 20ml di purea di frutto della passione (maracuja). Filtrare in un bicchiere a calice con ghiaccio e aggiungere un top generoso di soda water. Guarnire con mezza maracuja fresca." 
    },
    { 
        "id": 79, 
        "nome": "Tuxedo", 
        "ingredienti": ["Gin", "Vermouth dry", "Maraschino", "Assenzio", "Orange bitters"], 
        "alcolico": true, 
        "gusto": "secco", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/tuxedo.webp",
        "ricetta": "Versare in mixing glass 30ml di Gin, 30ml di Vermouth Dry, mezzo cucchiaino di Maraschino, 1/4 di cucchiaino di Assenzio e 3 gocce di Orange Bitters. Mescolare con ghiaccio e filtrare in una coppetta. Guarnire con ciliegina e scorza di limone." 
    },
    { 
        "id": 34, 
        "nome": "Vesper Martini", 
        "ingredienti": ["Gin", "Vodka", "Lillet blanc"], 
        "alcolico": true, 
        "gusto": "secco", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/vesper-martini.webp",
        "ricetta": "Versare 60ml di Gin, 20ml di Vodka e 10ml di Lillet Blanc nello shaker con ghiaccio. Agitare per amalgamare bene, poi filtrare in una coppetta profonda ghiacciata. Guarnire con una lunga spirale di scorza di limone." 
    },
    { 
        "id": 80, 
        "nome": "Vieux Carré", 
        "ingredienti": ["Rye whiskey", "Cognac", "Vermouth rosso", "Bénédictine", "Peychaud's", "Angostura"], 
        "alcolico": true, 
        "gusto": "amaro", 
        "difficolta": "Difficile", 
        "immagine": "assets/images/cocktails/vieux-carre.webp",
        "ricetta": "Nel mixing glass unire 30ml Rye, 30ml Cognac, 30ml Vermouth Rosso, 1 barspoon Bénédictine, 2 gocce Peychaud's e 2 gocce Angostura. Mescolare con ghiaccio e filtrare su un grande cubo di ghiaccio in un bicchiere Old Fashioned. Guarnire con ciliegia e limone." 
    },
    { 
        "id": 48, 
        "nome": "Virgin Colada", 
        "ingredienti": ["Succo d'ananas", "Cocco"], 
        "alcolico": false, 
        "gusto": "dolce", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/virgin-colada.webp",
        "ricetta": "Frullare 90ml di succo d'ananas, 30ml di crema di cocco e una manciata di ghiaccio tritato fino a ottenere una consistenza liscia e spumosa. Versare in un bicchiere alto." 
    },
    { 
        "id": 50, 
        "nome": "Virgin Mary", 
        "ingredienti": ["Pomodoro", "Succo di limone", "Spezie"], 
        "alcolico": false, 
        "gusto": "sapido", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/virgin-mary.webp",
        "ricetta": "Versare in un bicchiere 120ml di succo di pomodoro, 15ml di succo di limone, qualche goccia di Tabasco, salsa Worcestershire, sale, pepe nero e sedano. Mescolare delicatamente su ghiaccio." 
    },
    { 
        "id": 47, 
        "nome": "Virgin Mojito", 
        "ingredienti": ["Ginger ale", "Succo di lime", "Menta", "Zucchero"], 
        "alcolico": false, 
        "gusto": "erbaceo", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/virgin-mojito.webp",
        "ricetta": "Pestare delicatamente 30ml di succo di lime fresco, 20ml di zucchero liquido e foglie di menta. Colmare con ghiaccio tritato, riempire con circa 100ml di Ginger Ale o Lemonade e mescolare delicatamente." 
    },
    { 
        "id": 106, 
        "nome": "Virgin Mule", 
        "ingredienti": ["Ginger beer", "Succo di lime", "Cetriolo", "Menta"], 
        "alcolico": false, 
        "gusto": "speziato", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/virgin-moscow-mule.webp",
        "ricetta": "In un mug di rame (o un bicchiere alto), pestare delicatamente 2 fette di cetriolo con 15ml di succo di lime fresco. Riempire colmo di ghiaccio, versare 150ml di Ginger Beer e mescolare. Guarnire con un'altra fetta di cetriolo e un ciuffo di menta." 
    },
    { 
        "id": 109, 
        "nome": "Virgin Paloma", 
        "ingredienti": ["Succo di pompelmo", "Succo di lime", "Sciroppo d'agave", "Soda"], 
        "alcolico": false, 
        "gusto": "agrumato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/virgin-paloma.webp",
        "ricetta": "Creare una crosta di sale (crusta) sul bordo di un bicchiere alto. Versare 60ml di succo di pompelmo rosa fresco, 15ml di succo di lime e 10ml di sciroppo d'agave. Mescolare bene sul fondo per sciogliere lo sciroppo, riempire di ghiaccio e colmare con soda." 
    },
    { 
        "id": 114, 
        "nome": "Watermelon Lemonade", 
        "ingredienti": ["Anguria", "Succo di limone", "Zucchero"], 
        "alcolico": false, 
        "gusto": "fruttato", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/watermelon-lemonade.webp",
        "ricetta": "In uno shaker, pestare delicatamente 4-5 cubetti di anguria fresca senza semi. Aggiungere 30ml di succo di limone fresco, 15ml di sciroppo di zucchero di canna e ghiaccio. Shakerare e filtrare (meglio in Double Strain) in un bicchiere alto colmo di ghiaccio." 
    },
    { 
        "id": 21, 
        "nome": "Whiskey Sour", 
        "ingredienti": ["Bourbon", "Succo di limone", "Zucchero", "Albume"], 
        "alcolico": true, 
        "gusto": "agrumato", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/whiskey-sour.webp",
        "ricetta": "Inserire 45ml di Bourbon, 30ml di succo di limone, 15ml di sciroppo di zucchero e 15ml di albume nello shaker. Shakerare prima senza ghiaccio (Dry Shake) per montare l'albume. Aggiungere ghiaccio, shakerare di nuovo, e filtrare (Double Strain)." 
    },
    { 
        "id": 24, 
        "nome": "White Lady", 
        "ingredienti": ["Gin", "Triple sec", "Succo di limone"], 
        "alcolico": true, 
        "gusto": "agrumato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/white-lady.webp",
        "ricetta": "Versare 40ml di Gin, 30ml di Triple Sec e 20ml di succo di limone fresco nello shaker con ghiaccio. Shakerare vigorosamente e filtrare in una coppetta ghiacciata." 
    },
    { 
        "id": 81, 
        "nome": "White Negroni", 
        "ingredienti": ["Gin", "Lillet blanc", "Suze"], 
        "alcolico": true, 
        "gusto": "amaro", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/white-negroni.webp",
        "ricetta": "Versare 30ml di Gin, 30ml di Lillet Blanc e 30ml di Suze (liquore di genziana) in un mixing glass con ghiaccio. Mescolare finché freddo e filtrare su ghiaccio in un bicchiere Old Fashioned. Scorza di pompelmo." 
    },
    { 
        "id": 39, 
        "nome": "White Russian", 
        "ingredienti": ["Vodka", "Liquore al caffè", "Panna"], 
        "alcolico": true, 
        "gusto": "dolce", 
        "difficolta": "Media", 
        "immagine": "assets/images/cocktails/white-russian.webp",
        "ricetta": "Versare 50ml di Vodka e 20ml di liquore al caffè su ghiaccio. Mescolare delicatamente, poi far galleggiare in superficie (float) 20ml di panna fresca leggermente montata o versata su un bar spoon." 
    },
    { 
        "id": 75, 
        "nome": "Zombie", 
        "ingredienti": ["Rum scuro", "Rum bianco", "Rum overproof", "Succo di lime", "Succo di pompelmo", "Granatina", "Cannella", "Falernum", "Assenzio"], 
        "alcolico": true, 
        "gusto": "speziato", 
        "difficolta": "Facile", 
        "immagine": "assets/images/cocktails/zombie.webp",
        "ricetta": "Frullare (o shakerare vigorosamente) 45ml di Rum dorato, 45ml di Rum scuro, 30ml di Rum Overproof (151), 20ml succo di lime, 15ml Don's Mix (sciroppo di cannella e pompelmo), 15ml Falernum, 1 goccia di Granatina e 1 di Assenzio. Versare su ghiaccio tritato. Guarnire con menta." 
    }
];