var grossAmount, salaryBase, multiplier, educationType, placeOfWork, rateOfWork, diversionSign, diversionRate, workingHours, isBoss;

var rateFromWorkPlaceForDiploma = [1.8, 1.5, 1.35, 1.3, 1.1];
var rateFromWorkPlaceForHigh = [1.35, 1.15, 1.15, 1.1, 1];

var formatNumber = function(num) {
    
            num = num.toString();
    
            if (num.length > 3) {
                num = num.substr(0, num.length - 3) + ' ' + num.substr(num.length - 3, 3);
            }
    
            if (num.length > 7) {
                num = num.substr(0, num.length - 7) + ' ' + num.substr(num.length - 7, 7);
            }
    
            return num;
            
};

setInterval(function() { //jQuery: $('input').change(function(){})
    
    salaryBase = document.getElementById('salary-base').value;
    educationType = document.getElementsByName('education');
    placeOfWork = document.getElementById('workplace').value;
    
    if (educationType[0].checked) {
        document.getElementById('years-for-diploma').style.display = 'inline-block';
        document.getElementById('years-for-graduation').style.display = 'none';
        multiplier = document.getElementById('years-for-diploma').value;
        rateOfWork = rateFromWorkPlaceForDiploma[placeOfWork];
            
    } else {
        document.getElementById('years-for-diploma').style.display = 'none';
        document.getElementById('years-for-graduation').style.display = 'inline-block';
        multiplier = document.getElementById('years-for-graduation').value;
        rateOfWork = rateFromWorkPlaceForHigh[placeOfWork];
    }
    
    diversionSign = document.getElementById('diversion').value == 'true';
    
    if (diversionSign){
        diversionRate = 1 + document.getElementById('rate').value / 100;
    } else {
        diversionRate = 1 - (document.getElementById('rate').value / 100);
    }

    grossAmount = Math.round((salaryBase * multiplier * rateOfWork * diversionRate) / 100 ) * 100;

    document.getElementById('finalCount').innerHTML = formatNumber(grossAmount) + " Ft";
    
}, 500);






