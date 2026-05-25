const dizionarioSinonimi = [
  {
    ufficiale: "Succo di lime",
    sinonimi: ["lime", "succo di lime", "lime juice", "succo di limone", "limone", "spicchio di lime", "fetta di lime", "scorza di lime", "sour", "lime juice cordial"]
  },
  {
    ufficiale: "Succo di limone",
    sinonimi: ["limone", "succo di limone", "lemon juice", "succo di lime", "lime", "spicchio di limone", "fetta di limone", "scorza di limone", "sour", "lemon"]
  },
  {
    ufficiale: "Rum bianco",
    sinonimi: ["rum", "rhum", "ron", "rum bianco", "white rum", "light rum", "rum chiaro", "bacardi", "havana club", "pampero"]
  },
  {
    ufficiale: "Rum scuro",
    sinonimi: ["rum", "rhum", "ron", "rum scuro", "dark rum", "black rum", "rum nero", "myers's", "goslings", "zacapa", "kraken"]
  },
  {
    ufficiale: "Rum ambrato",
    sinonimi: ["rum", "rhum", "ron", "rum ambrato", "gold rum", "amber rum", "rum dorato", "añejo", "havana 7", "rum invecchiato"]
  },
  {
    ufficiale: "Rum overproof",
    sinonimi: ["rum", "rhum", "ron", "rum overproof", "high proof rum", "wray & nephew", "rum forte", "rum ad alta gradazione"]
  },
  {
    ufficiale: "Vodka",
    sinonimi: ["vodka", "wodka", "vodca", "smirnoff", "absolut", "grey goose", "belvedere", "vodka liscia", "stolichnaya"]
  },
  {
    ufficiale: "Vodka citron",
    sinonimi: ["vodka", "vodka al limone", "vodka citron", "citron vodka", "absolut citron", "vodka agrumata"]
  },
  {
    ufficiale: "Gin",
    sinonimi: ["gin", "london dry", "plymouth gin", "bombay", "tanqueray", "hendrick's", "gordon's", "ginepro"]
  },
  {
    ufficiale: "Tequila",
    sinonimi: ["tequila", "tequila blanco", "tequila silver", "jose cuervo", "patron", "espolon", "agave", "mezcal"]
  },
  {
    ufficiale: "Mezcal",
    sinonimi: ["mezcal", "mescal", "tequila", "distillato d'agave", "agave affumicato", "del maguey"]
  },
  {
    ufficiale: "Bourbon",
    sinonimi: ["whiskey", "whisky", "bourbon", "kentucky bourbon", "jim beam", "maker's mark", "bulleit", "jack daniels", "whiskey americano"]
  },
  {
    ufficiale: "Rye whiskey",
    sinonimi: ["whiskey", "whisky", "rye", "rye whiskey", "whiskey di segale", "bulleit rye", "canadian club"]
  },
  {
    ufficiale: "Scotch",
    sinonimi: ["whiskey", "whisky", "scotch", "scotch whisky", "whisky scozzese", "johnnie walker", "chivas", "glenfiddich", "talisker", "laphroaig"]
  },
  {
    ufficiale: "Irish whiskey",
    sinonimi: ["whiskey", "whisky", "irish", "irish whiskey", "whiskey irlandese", "jameson", "bushmills", "tullamore dew"]
  },
  {
    ufficiale: "Cognac",
    sinonimi: ["cognac", "brandy", "brandy francese", "hennessy", "courvoisier", "remy martin", "martell"]
  },
  {
    ufficiale: "Amaretto",
    sinonimi: ["amaretto", "disaronno", "liquore alla mandorla", "amaretto di saronno"]
  },
  {
    ufficiale: "Cachaça",
    sinonimi: ["cachaca", "cachaça", "caninha", "acquavite di canna", "distillato brasiliano", "pitu", "leblon"]
  },
  {
    ufficiale: "Campari",
    sinonimi: ["campari", "bitter", "bitter campari", "red bitter", "bitter rosso", "aperol", "select"]
  },
  {
    ufficiale: "Triple sec",
    sinonimi: ["triple sec", "cointreau", "orange liqueur", "liquore all'arancia", "sec", "triple-sec", "curaçao", "curacao"]
  },
  {
    ufficiale: "Grand Marnier",
    sinonimi: ["grand marnier", "liquore all'arancia", "cognac all'arancia", "orange liqueur", "triple sec", "cointreau"]
  },
  {
    ufficiale: "Orange curaçao",
    sinonimi: ["curacao", "curaçao", "orange curacao", "orange curaçao", "liquore all'arancia", "triple sec", "pierre ferrand"]
  },
  {
    ufficiale: "Blue curaçao",
    sinonimi: ["curacao", "curaçao", "blue curacao", "blue curaçao", "liquore blu", "curacao blu"]
  },
  {
    ufficiale: "Maraschino",
    sinonimi: ["maraschino", "luxardo", "liquore alla ciliegia", "cherry liqueur", "marasca"]
  },
  {
    ufficiale: "Vermouth rosso",
    sinonimi: ["vermouth", "vermut", "vermouth rosso", "sweet vermouth", "martini rosso", "cinzano rosso", "carpano antica", "punt e mes", "vermouth dolce"]
  },
  {
    ufficiale: "Vermouth dry",
    sinonimi: ["vermouth", "vermut", "vermouth dry", "dry vermouth", "martini dry", "vermouth secco", "martini bianco", "noilly prat"]
  },
  {
    ufficiale: "Lillet blanc",
    sinonimi: ["lillet", "lillet blanc", "vino aromatizzato", "vermouth bianco", "lillet bianco"]
  },
  {
    ufficiale: "Suze (liquore di genziana)",
    sinonimi: ["suze", "genziana", "liquore di genziana", "bitter bianco", "suze (liquore di genziana)"]
  },
  {
    ufficiale: "Chartreuse",
    sinonimi: ["chartreuse", "chartreuse verde", "green chartreuse", "liquore d'erbe", "liquore monaci"]
  },
  {
    ufficiale: "Liquore al caffè",
    sinonimi: ["kahlua", "borghetti", "tia maria", "coffee liqueur", "liquore al caffe", "liquore al caffè", "caffè"]
  },
  {
    ufficiale: "Crema al whiskey",
    sinonimi: ["baileys", "crema whiskey", "crema al whiskey", "irish cream", "whiskey cream", "panna", "crema di whisky"]
  },
  {
    ufficiale: "Crema cacao",
    sinonimi: ["crema cacao", "crema di cacao", "crema cacao scura", "creme de cacao", "cioccolato", "liquore al cioccolato"]
  },
  {
    ufficiale: "Crema di cacao bianca",
    sinonimi: ["crema cacao", "crema di cacao bianca", "creme de cacao blanc", "white creme de cacao", "cioccolato bianco"]
  },
  {
    ufficiale: "Crema di menta verde",
    sinonimi: ["crema di menta", "crema di menta verde", "creme de menthe", "menta", "liquore alla menta"]
  },
  {
    ufficiale: "Liquore mora",
    sinonimi: ["creme de mure", "creme de mûre", "liquore mora", "liquore alla mora", "mora", "blackberry liqueur"]
  },
  {
    ufficiale: "Chambord",
    sinonimi: ["chambord", "liquore al lampone", "raspberry liqueur", "liquore nero", "lampone"]
  },
  {
    ufficiale: "Crème de cassis",
    sinonimi: ["creme de cassis", "crème de cassis", "liquore al ribes", "ribes nero", "blackcurrant liqueur", "cassis"]
  },
  {
    ufficiale: "Violetta",
    sinonimi: ["creme de violette", "violetta", "liquore alla violetta", "liquore di violetta", "violet"]
  },
  {
    ufficiale: "Sciroppo di sambuco",
    sinonimi: ["sambuco", "sciroppo di sambuco", "elderflower", "elderflower syrup", "fiori di sambuco"]
  },
  {
    ufficiale: "Sciroppo di menta",
    sinonimi: ["menta", "sciroppo di menta", "sciroppo menta", "mint syrup"]
  },
  {
    ufficiale: "Sciroppo di lampone",
    sinonimi: ["lampone", "sciroppo di lampone", "raspberry syrup", "sciroppo lampone"]
  },
  {
    ufficiale: "Lampone",
    sinonimi: ["lamponi", "lampone", "raspberry", "lamponi freschi", "frutti di bosco"]
  },
  {
    ufficiale: "Pesca",
    sinonimi: ["pesca", "purea di pesca", "pesca bianca", "peach", "succo di pesca"]
  },
  {
    ufficiale: "Mango",
    sinonimi: ["mango", "purea di mango", "mango puree", "succo di mango"]
  },
  {
    ufficiale: "Cocco",
    sinonimi: ["cocco", "crema di cocco", "cream of coconut", "latte di cocco", "coconut", "malibu"]
  },
  {
    ufficiale: "Maracuja",
    sinonimi: ["maracuja", "maracujà", "passion fruit", "frutto della passione", "purea di maracuja", "polpa di passion fruit"]
  },
  {
    ufficiale: "Pomodoro",
    sinonimi: ["succo di pomodoro", "pomodoro", "tomato juice", "tomato"]
  },
  {
    ufficiale: "Succo d'arancia",
    sinonimi: ["arancia", "succo d'arancia", "succo di arancia", "orange juice", "spremuta d'arancia", "fetta d'arancia", "scorza d'arancia"]
  },
  {
    ufficiale: "Succo d'ananas",
    sinonimi: ["ananas", "succo d'ananas", "succo di ananas", "pineapple juice", "pineapple", "fetta d'ananas"]
  },
  {
    ufficiale: "Succo di pompelmo",
    sinonimi: ["pompelmo", "succo di pompelmo", "grapefruit juice", "pompelmo rosa", "succo pompelmo"]
  },
  {
    ufficiale: "Succo di mirtillo rosso",
    sinonimi: ["cranberry", "mirtillo", "mirtillo rosso", "succo di mirtillo rosso", "succo di mirtillo", "cranberry juice"]
  },
  {
    ufficiale: "Succo di mela",
    sinonimi: ["mela", "succo di mela", "apple juice", "succo di mela limpido", "apple cider"]
  },
  {
    ufficiale: "Limonata",
    sinonimi: ["limonata", "lemonade", "lemon soda", "succo di limone", "limone"]
  },
  {
    ufficiale: "Tè freddo",
    sinonimi: ["te freddo", "tè freddo", "ice tea", "iced tea", "te nero"]
  },
  {
    ufficiale: "Caffè",
    sinonimi: ["caffe", "caffè", "espresso", "caffè espresso", "coffee", "moka"]
  },
  {
    ufficiale: "Caffè caldo",
    sinonimi: ["caffe", "caffè", "espresso", "caffè caldo", "coffee", "hot coffee"]
  },
  {
    ufficiale: "Zucchero",
    sinonimi: ["zucchero", "sciroppo di zucchero", "sugar", "simple syrup", "zucchero di canna", "zucchero liquido", "sciroppo semplice", "zucchero bianco"]
  },
  {
    ufficiale: "Orzata",
    sinonimi: ["orzata", "sciroppo d'orzata", "orgeat", "orgeat syrup", "mandorla"]
  },
  {
    ufficiale: "Miele",
    sinonimi: ["miele", "sciroppo di miele", "honey", "honey syrup"]
  },
  {
    ufficiale: "Granatina",
    sinonimi: ["granatina", "sciroppo di granatina", "grenadine", "sciroppo di melograno"]
  },
  {
    ufficiale: "Menta",
    sinonimi: ["menta", "foglie di menta", "menta fresca", "mint", "hierbabuena", "rametto di menta"]
  },
  {
    ufficiale: "Basilico",
    sinonimi: ["basilico", "foglie di basilico", "basil"]
  },
  {
    ufficiale: "Cetriolo",
    sinonimi: ["cetriolo", "cucumber", "fette di cetriolo"]
  },
  {
    ufficiale: "Cannella",
    sinonimi: ["cannella", "cinnamon", "stecca di cannella", "polvere di cannella"]
  },
  {
    ufficiale: "Angostura",
    sinonimi: ["angostura", "bitter aromatico", "aromatic bitters", "gocce di angostura"]
  },
  {
    ufficiale: "Spezie",
    sinonimi: ["spezie", "tabasco", "worcestershire", "sale", "pepe"]
  },
  {
    ufficiale: "Tabasco",
    sinonimi: ["tabasco", "salsa piccante", "spezie", "peperoncino"]
  },
  {
    ufficiale: "Salsa Worcestershire",
    sinonimi: ["worcestershire", "worcester", "salsa worcestershire", "salsa worcester", "spezie"]
  },
  {
    ufficiale: "Sale",
    sinonimi: ["sale", "salt", "crusta di sale", "pizzico di sale"]
  },
  {
    ufficiale: "Salamoia di oliva",
    sinonimi: ["salamoia", "salamoia di oliva", "olive brine", "succo di olive"]
  },
  {
    ufficiale: "Albume",
    sinonimi: ["albume", "bianco d'uovo", "egg white", "uovo", "albume d'uovo", "aquafaba"]
  },
  {
    ufficiale: "Panna",
    sinonimi: ["panna", "panna liquida", "cream", "panna montata", "panna fresca"]
  },
  {
    ufficiale: "Panna fresca",
    sinonimi: ["panna", "panna fresca", "cream", "heavy cream", "panna liquida"]
  },
  {
    ufficiale: "Soda",
    sinonimi: ["soda", "seltz", "club soda", "acqua gasata", "acqua frizzante", "soda water", "top di soda"]
  },
  {
    ufficiale: "Acqua tonica",
    sinonimi: ["tonica", "acqua tonica", "tonic water", "schweppes", "fever tree", "tonic"]
  },
  {
    ufficiale: "Ginger beer",
    sinonimi: ["ginger beer", "ginger ale", "birra allo zenzero", "ginger", "zenzero"]
  },
  {
    ufficiale: "Ginger ale",
    sinonimi: ["ginger ale", "ginger beer", "bibita allo zenzero", "ginger", "zenzero"]
  },
  {
    ufficiale: "Cola",
    sinonimi: ["cola", "coca cola", "coca-cola", "coca", "pepsi"]
  },
  {
    ufficiale: "Prosecco",
    sinonimi: ["prosecco", "spumante", "vino frizzante", "bollicine", "sparkling wine", "vino bianco"]
  },
  {
    ufficiale: "Champagne",
    sinonimi: ["champagne", "spumante", "bollicine", "sparkling wine", "prosecco"]
  },
  {
    ufficiale: "Birra chiara",
    sinonimi: ["birra", "birra chiara", "lager", "pilsner", "birra messicana", "corona"]
  },
  {
    ufficiale: "Assenzio",
    sinonimi: ["assenzio", "absinthe", "fata verde"]
  },
  {
    ufficiale: "Falernum",
    sinonimi: ["falernum", "sciroppo falernum", "velvet falernum", "tiki"]
  },
  {
    ufficiale: "Lime cordial",
    sinonimi: ["lime cordial", "lime juice cordial", "rose's lime", "cordiale al lime", "lime"]
  }
];