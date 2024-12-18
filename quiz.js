function verifierReponses() {
    var score = 0;
    
    // Question 1
    if(document.getElementsByName("q1")[1].checked) { // réponse b
        score = score + 1;
    }
    
    // Question 2
    if(document.getElementsByName("q2")[2].checked) { // réponse c
        score = score + 1;
    }
    
    // Question 3
    if(document.getElementsByName("q3")[0].checked) { // réponse a
        score = score + 1;
    }
    
    // Question 4
    if(document.getElementsByName("q4")[1].checked) { // réponse b
        score = score + 1;
    }
    
    // Question 5
    if(document.getElementsByName("q5")[1].checked) { // réponse b
        score = score + 1;
    }
    
    // Question 6
    if(document.getElementsByName("q6")[1].checked) { // réponse b
        score = score + 1;
    }
    
    // Question 7
    if(document.getElementsByName("q7")[2].checked) { // réponse c
        score = score + 1;
    }
    
    // Question 8
    if(document.getElementsByName("q8")[1].checked) { // réponse b
        score = score + 1;
    }
    
    // Question 9
    if(document.getElementsByName("q9")[0].checked) { // réponse a
        score = score + 1;
    }
    
    // Question 10
    if(document.getElementsByName("q10")[0].checked) { // réponse a
        score = score + 1;
    }
    
    // Afficher le score
    document.getElementById("score").innerHTML = "Votre score est : " + score + "/10";
}