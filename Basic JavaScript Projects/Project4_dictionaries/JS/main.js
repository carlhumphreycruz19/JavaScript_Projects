function my_Dictionary() {
    var myDictionary = {
        "apple": "A fruit that is typically red, green, or yellow.",
        "banana": "A long curved fruit that grows in clusters and has soft pulpy flesh and yellow skin when ripe.",
        "cherry": "A small, round stone fruit that is typically red or black.",
        "date": "A sweet fruit from the date palm tree, often dried and eaten as a snack.",
        "elderberry": "A small dark purple fruit that grows in clusters on the elder tree."
    };
    return myDictionary;
}
delete my_Dictionary.apple; // Deleting the key 'apple' from the dictionary
document.getElementById("demo").innerHTML = my_Dictionary().apple; // This will return 'undefined' since 'apple' has been deleted
