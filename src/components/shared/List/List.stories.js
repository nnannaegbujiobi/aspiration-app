import React from "react";

import List from "./List";

export default {
    component: List,
    title: 'List',
    args: {
        list: {
        title: 'Test list',
        state: 'LIST_RESPONSE',
        updatedAt: 'Sun Mar 06 2022 19:44:29 GMT-0600 (Central Standard Time)'
    },
    }
};

const Template = props => <List {...props} />;

export const Default = Template.bind({});
