function takeANumber(katzDeliLine,newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length===0) {
    return 'There is nobody waiting to be served!';
  } else {
    var nextInLine=katzDeliLine.shift();
    return `Currently serving ${nextInLine}.`;
  }
}

function currentLine(x)  {
  var line = [];
   if (x.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = x[0];
    x.splice(0, 1);
    return "Currently serving " + name + ".";
  }

  
}