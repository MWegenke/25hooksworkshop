import React from 'react';

const listContext = React.createContext({list: [{types: [{type: {name: ''}}]}], setList: () => {}});

export default listContext;