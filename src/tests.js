function teste(calculado, esperado) {
    if (calculado === esperado) {
        console.log("Teste ok!");
        return true;
    } else {
        console.log("Deu Erro! " + calculado + " não é igual a " + esperado);
        return false;
    }
}

teste(encode("abc", 2), "cde");
teste(encode("abc123!", 2), "cde123!");
teste(encode("abc123!", 2), "cde123!");
teste(encode("a", -1), "z");
teste(encode("ZAP123!", 76), "XYN123!");
teste(encode("insira um texto !@#$%", 23), "fkpfox rj qbuql !@#$%");

teste(decode("cde123!", 2), "abc123!");
teste(decode("XYN123!", 76), "ZAP123!");
teste(decode("z", -1), "a");
teste(decode("Z", -1), "A");
teste(decode("fkpfox rj qbuql !@#$%", 23), "insira um texto !@#$%");
