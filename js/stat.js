'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var histogramWidth = 150;
  var histogramHeight = 240;
  var barWidth = 40;
  var indent = 90;
  var lineHeight = 20;
  var initialX = 130;

  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var step = histogramWidth / max;
  for (var j = 0; j < times.length; j++) {
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var opacity = (Math.random() + 0.1).toFixed(1);
      ctx.fillStyle = 'rgba(0, 0, 255,' + opacity + ')';
    }
    ctx.fillRect(initialX + indent * j, histogramHeight - times[j] * step, barWidth, times[j] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(names[j], initialX + indent * j, histogramHeight + lineHeight);
    ctx.fillText(times[j].toFixed(0), initialX + indent * j, histogramHeight - times[j] * step - lineHeight / 2);
  }
};
