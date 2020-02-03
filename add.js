var content = document.getElementById('content');

function loadExchangeRates() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json", true)
    xhr.responseType = 'json';
    xhr.onload = function () {
        let status = xhr.status;
        if (status == 200) {
            var html = " ";
            for (var hero of xhr.response) {
                html +=
                    `<tr>
                    <td><b> <i>` +
                    hero.txt +
                    ` </i> </td>
                     <td> <b>` +
                    hero.cc +
                    `  </b>  </td>
                      <td>` +
                    hero.rate +
                    `  </td>
                    <td>` +
                    hero.exchangedate +
                    `    </td>
                <tr>`;
            }
            content.innerHTML = html;
        }
    };
    xhr.send();
}