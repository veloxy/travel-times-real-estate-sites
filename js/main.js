$(function () {
    var houseAddress = getAddress();

    if (!houseAddress.length) {
        return;
    }

    chrome.storage.sync.get('addresses', renderTravelTimes);

    function renderTravelTimes(addresses) {
        addresses.addresses.forEach(renderTravelTime)
    }

    function renderTravelTime(address) {
        var data = {
            'key': 'AIzaSyC7uc2vMY0EMa4ZbiFZ7oG8FORiU4h4RwE',
            'mode': 'driving',
            'origin': houseAddress,
            'destination': address.address
        };

        $.get('https://maps.googleapis.com/maps/api/directions/json', data, function (data) {
            render(address, data);
        })
    }
})
