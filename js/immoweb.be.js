var selector = '#column-central > table.box-blue > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr > td:nth-child(3) > ul:nth-child(4) > span';

function getAddress() {
    var el = $(selector);
    el.find('font').text(' ');
    return el[0].innerText;
}

function render(address, data) {
    var addressElement = $('#column-central > table.box-blue > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr > td:nth-child(1) > div:nth-child(3)');
    addressElement.css('margin-bottom', '10px');
    addressElement.after('<div style="background-color: #FFFFFF; padding: 10px; margin-right: 10px"><strong>Travel Time:</strong><span>' + data.routes[0].legs[0].duration.text + ' to <b>' + address.name + '</b> (' + data.routes[0].legs[0].distance.text + ')</span></div>');
}
