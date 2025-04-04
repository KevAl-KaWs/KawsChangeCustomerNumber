import template from './sw-customer-base-info.html.twig';

const { Criteria } = Shopware.Data;

Shopware.Component.override('sw-customer-base-info', {
    template,

    inject: [
        'systemConfigApiService',
    ],
});
