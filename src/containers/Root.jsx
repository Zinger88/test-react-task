import React from 'react';
import ControlPanel from './ControlPanel/ControlPanel';
import CheckboxPanel from './CheckboxPanel/CheckboxPanel';
import ComparePanel from './ComparePanel/ComparePanel';
import './root.css';

export const Root = () => (
    <div className="tangiblee-app">
        <ComparePanel />
        <CheckboxPanel />
        <ControlPanel />
    </div>
);
