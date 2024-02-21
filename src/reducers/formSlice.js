import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  tabs: [],
  currentTabId: null,
  currentSectionId: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addTab: (state, action) => {
      const newTab = {
        id: nanoid(),
        name: action.payload.name,
        sections: [],
      };
      state.tabs.push(newTab);
      state.currentTabId = newTab.id;
    },
    removeTab: (state, action) => {
      state.tabs = state.tabs.filter(tab => tab.id !== action.payload.tabId);
      state.currentTabId = null;
      state.currentSectionId = null;
    },
    // Similarly, add actions for sections and fields
    addSection: (state, action) => {
      const newSection = {
        id: nanoid(),
        name: action.payload.name,
        fields: [],
      };
      const currentTab = state.tabs.find(tab => tab.id === state.currentTabId);
      currentTab.sections.push(newSection);
      state.currentSectionId = newSection.id;
    },
    removeSection: (state, action) => {
      const currentTab = state.tabs.find(tab => tab.id === state.currentTabId);
      currentTab.sections = currentTab.sections.filter(section => section.id !== action.payload.sectionId);
      state.currentSectionId = null;
    },
    // Add actions for fields
    addField: (state, action) => {
      const newField = {
        id: nanoid(),
        label: action.payload.label,
        type: action.payload.type,
        properties: action.payload.properties,
      };
      const currentTab = state.tabs.find(tab => tab.id === state.currentTabId);
      const currentSection = currentTab.sections.find(section => section.id === state.currentSectionId);
      currentSection.fields.push(newField);
    },
    removeField: (state, action) => {
      const currentTab = state.tabs.find(tab => tab.id === state.currentTabId);
      const currentSection = currentTab.sections.find(section => section.id === state.currentSectionId);
      currentSection.fields = currentSection.fields.filter(field => field.id !== action.payload.fieldId);
    },
  },
});

export const { addTab, removeTab, addSection, removeSection, addField, removeField } = formSlice.actions;
export default formSlice.reducer;
