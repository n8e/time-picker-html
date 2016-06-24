var clickedTime;
var blackS = {
  backgroundColor: 'rgb(0, 0, 0)',
  color: 'rgb(255, 255, 255)'
};
var whiteS = {
  backgroundColor: 'rgb(255, 255, 255)',
  color: 'rgb(0, 0, 0)'
};

function toggleMorn() {
  var mColor = document.getElementById('morn').style.color;
  console.log('mColor', mColor);

  // condition to check background color
  if (mColor == blackS.color) {
    document.getElementById('morn').style.backgroundColor = whiteS.backgroundColor;
    document.getElementById('morn').style.color = whiteS.color;
    document.getElementById('even').style.backgroundColor = blackS.backgroundColor;
    document.getElementById('even').style.color = blackS.color;
    clickedTime = 'PM';
  } else {
    document.getElementById('morn').style.backgroundColor = blackS.backgroundColor;
    document.getElementById('morn').style.color = blackS.color;
    document.getElementById('even').style.backgroundColor = whiteS.backgroundColor;
    document.getElementById('even').style.color = whiteS.color;
    clickedTime = 'AM';
  }
}


// original function
function toggleEven() {
  var eColor = document.getElementById('even').style.color;
  console.log('eColor', eColor);

  // condition to check background color
  if (eColor == blackS.color) {
    document.getElementById('even').style.backgroundColor = whiteS.backgroundColor;
    document.getElementById('even').style.color = whiteS.color;
    document.getElementById('morn').style.backgroundColor = blackS.backgroundColor;
    document.getElementById('morn').style.color = blackS.color;
    clickedTime = 'AM';
  } else if (eColor == whiteS.color) {
    document.getElementById('even').style.backgroundColor = blackS.backgroundColor;
    document.getElementById('even').style.color = blackS.color;
    document.getElementById('morn').style.backgroundColor = whiteS.backgroundColor;
    document.getElementById('morn').style.color = whiteS.color;
    clickedTime = 'PM';
  }
}



function showTime() {
  var hr = document.getElementById('hour').value;
  var min = document.getElementById('minute').value;

  console.log(hr + ':' + min + clickedTime);

  var d = new Date();
  d.setHours(hr);
  d.setMinutes(min);
  d.setSeconds(0);
  if (clickedTime === 'AM') {
    d.setHours(hr);
  } else {
    d.setHours(parseInt(hr) + 12);
  }
  console.log(d.toTimeString());
}
