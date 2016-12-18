var selector = '#main-features > div > div.title-row > div.section-title-block > h2 > span';
var items = [];
var addressElement = $('#main-features > div > div.row > div.col-sm-7 > ul li:first');

function getAddress() {
    return $(selector)[0].innerText;
}

function render(address, data) {
    items.push(address);
    /**
     * <li class="show-on-print">
     <strong class="feature-label show-on-print">Prijs</strong>
     <span class="feature-value">
     € 170.000
     </span>
     </li>
     */

    var text = data.routes[0].legs[0].duration.text + ' to <b>' + address.name + '</b> (' + data.routes[0].legs[0].distance.text + ')';
    var listItem = $('<li>').addClass('');

    if (items.length > 1) {
        var label = $('<strong>').addClass('feature-label').html('&nbsp;');
    } else {
        var label = $('<strong>').addClass('feature-label').text('Travel Time');
    }

    var value = $('<span>').addClass('feature-value').html(text);

    listItem.append(label);
    listItem.append(value);

    addressElement.before(listItem);
}
