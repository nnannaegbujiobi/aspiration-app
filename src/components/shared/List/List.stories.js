import React from "react";

import List from "./List";

export default {
    component: List,
    title: 'List',
};

const Template = props => <List {...props} />;

export const Default = Template.bind({});
