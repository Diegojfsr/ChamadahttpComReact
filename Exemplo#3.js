
// Exemplo 3
// As variáveis declaradas com let dentro de blocos if ou for não podem ser acessadas de fora destes blocos.

var admin = true

if(admin) {
    var  menu = [ "home", "contato", "settings" ]
}

if(menu.includes("settings")) {
    // Alguma logica
     
}