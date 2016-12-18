chrome.options.set('Fill in the addresses you want to calculate travel time for:', [{
    'type': 'list',
    'name': 'addresses',
    'head': true,
    'fields': [
        {
            'name': 'name',
            'type': 'text',
            'required': true,
        },
        {
            'name': 'address',
            'type': 'text',
            'required': true,
        },
    ]
}]);

