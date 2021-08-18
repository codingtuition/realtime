function  setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Cd36lRN8I/model.json",modelloaded);

}



function modeloaded()
{
console.log("modelisloaded");
}



function draw()
{
    image(video,0,0,300,300);
    classifier.classify(video,getresult);
}


function getresult(error,results)
{
    if(error){console.error(error);}
    else{
        console.log(results);
        document.getElementById("objectname").innerHTML=results[0].label;
        document.getElementById("objectaccuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}