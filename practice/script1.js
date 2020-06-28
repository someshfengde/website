(function (window) {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i=0; i < names.length; i++) {
        var a = names[i].slice (0,1);
        if (a === "J" || a === "j") {
            window.byeSpeaker.speak (names[i]);
        } else {
            window.helloSpeaker.speak(names[i]);
        }
    }
})(window);
