function Universitario() {
    var titulo = 27;
    function celebrar() {
        return "Dale U!";
    };
    return {
      pintar: function() {
        return titulo;
      }
    };
}

module.exports = Universitario();
