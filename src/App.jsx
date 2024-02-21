import React from 'react';
import DynamicForm from './components/DynamicForm'; // Assuming the file path to DynamicForm component

function App() {
  // Define the tabs data
  const tabs = [
    {
      name: 'Tab 1',
      sections: [
        {
          name: 'Section 1',
          fields: [
            { label: 'Field 1', type: 'TEXT', properties: { placeholder: 'Enter text' } },
            { label: 'Field 2', type: 'EMAIL', properties: { placeholder: 'Enter email' } },
          ],
        },
      ],
    },
    {
      name: 'Tab 2',
      sections: [
        {
          name: 'Section 1',
          fields: [
            { label: 'Field 3', type: 'TEXT', properties: { placeholder: 'Enter text' } },
            { label: 'Field 4', type: 'TEXT', properties: { placeholder: 'Enter text' } },
          ],
        },
        {
          name: 'Section 2',
          fields: [
            { label: 'Field 5', type: 'TEXT', properties: { placeholder: 'Enter text' } },
            { label: 'Field 6', type: 'TEXT', properties: { placeholder: 'Enter text' } },
          ],
        },
      ],
    },
    {
      name: 'Tab 3',
      sections: [
        {
          name: 'Section 1',
          fields: [
            { label: 'Field 1', type: 'TEXT', properties: { placeholder: 'Enter text' } },
            { label: 'Field 2', type: 'EMAIL', properties: { placeholder: 'Enter email' } },
          ],
        },
      ],
    },
    {
      name: 'Tab 3',
      sections: [
        {
          name: 'Section 1',
          fields: [
            { label: 'Field 1', type: 'TEXT', properties: { placeholder: 'Enter text' } },
            { label: 'Field 2', type: 'EMAIL', properties: { placeholder: 'Enter email' } },
          ],
        },
      ],
    },

  ];

  return (
    <div>
      <h1>Dynamic Form</h1>
      <DynamicForm tabs={tabs} />
    </div>
  );
}

export default App;
