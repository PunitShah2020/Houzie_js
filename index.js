// Import stylesheets for StackBlitz.com server only //
import './style.css';

// Write Javascript code!
var boxes = [];
var prevNum = [];
var pot = [];
var counter = -1;

$(() => {
  const hgd = $('#HGrid');
  for (var i = 1; i <= 90; i++) {
    var box = $('<div />', { class: 'HBox', text: i }).appendTo(hgd);
    boxes.push(box);
    pot.push(i);

    //if (i == 35) $(box).toggleClass('HDrawn');
  }
  shuffle(pot);

  $('#btnReset').click(function (_e) {
    for (var i = 0; i < 90; i++) {
      $(boxes[i]).removeClass('HDrawn');
    }
    counter = -1;
    prevNum = [];
    $('#lblPrevNum').text('');
    $('#HCounter').text('0 / 90');
    $('#DiceBall').text('');
  });
  $('#DiceBall').click(function (_e) {
    $(this).text('');
    setTimeout(() => {
      let num = drawNum();
      $(this).text(num);
    }, 500);
  });
});

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function drawNum() {
  if (counter < 89) {
    let idx = pot[++counter];
    $(boxes[idx]).toggleClass('HDrawn');
    $('#HCounter').text(`${counter + 1} / ${90 - counter - 1}`);
    return updatePrevNum(idx + 1);
  }
  counter = -1;
  return '';
}

function updatePrevNum(_num) {
  prevNum.unshift(_num);
  if (prevNum.length > 5) prevNum.pop();

  $('#lblPrevNum').text(prevNum.join(', '));
  return _num;
}
