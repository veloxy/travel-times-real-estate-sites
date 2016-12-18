var selector = '.item-details-list dt:contains("Adres:")';

function getAddress() {
    return $(selector).next('dd')[0].innerText;
}

function render(address, data) {
    var addressElement = $(selector).next('dd');
    addressElement.after('<dt>Travel Time:</dt><dd>' + data.routes[0].legs[0].duration.text + ' to <b>' + address.name + '</b> (' + data.routes[0].legs[0].distance.text + ')</dd>');
}
