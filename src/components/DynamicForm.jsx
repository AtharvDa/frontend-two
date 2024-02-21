import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

function DynamicForm() {
  // const [formData, setFormData] = useState({});
  const [tabs, setTabs] = useState([
    {
      name: 'Tab 1',
      sections: [
        {
          name: 'Section 1',
          fields: [
            { label: 'Field 1', type: 'TEXT' },
            // Other fields
          ]
        },
        // Other sections
      ]
    },
    // Other tabs
  ]);
  const [sections, setSections] = useState([]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addTab = () => {
    const newTab = { name: `Tab ${tabs.length + 1}`, sections: [] };
    setTabs([...tabs, newTab]);
  };
  
  // Function to add a new section to a tab
  const addSection = (tabIndex) => {
    const newSection = { name: `Section ${tabs[tabIndex].sections.length + 1}`, fields: [] };
    const updatedTabs = tabs.map((tab, index) => {
      if (index === tabIndex) {
        return { ...tab, sections: [...tab.sections, newSection] };
      }
      return tab;
    });
    setTabs(updatedTabs);
  };
  
  // Function to add a new field to a section
  const addField = (tabIndex, sectionIndex) => {
    const newField = { label: `Field ${tabs[tabIndex].sections[sectionIndex].fields.length + 1}`, type: 'TEXT' };
    const updatedTabs = tabs.map((tab, tabIndex) => {
      return {
        ...tab,
        sections: tab.sections.map((section, sectionIndex) => {
          if (tabIndex === tabIndex && sectionIndex === sectionIndex) {
            return { ...section, fields: [...section.fields, newField] };
          }
          return section;
        })
      };
    });

    console.log(updatedTabs);
    setTabs(updatedTabs);
  };

  console.log(tabs);

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="dynamic form tabs"
      >
        {tabs &&
          tabs.map((tab, index) => (
            <Tab key={index} label={tab.name} {...a11yProps(index)} />
          ))}
        <Tab label={"plus"} onClick={addTab} />
      </Tabs>
      {tabs &&
        tabs.map((tab, tabIndex) => (
          <CustomTabPanel key={tabIndex} value={value} index={tabIndex}>
            <button onClick={() => addSection(tabIndex)}>Plus section</button>
            {tab.sections &&
              tab.sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <Typography variant="h6">{section.name}</Typography>
                  <button onClick={() => addField(tabIndex,sectionIndex)}>Plus field</button>
                  {section.fields &&
                    section.fields.map((field, fieldIndex) => (
                      <Box
                        component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "25ch" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                      

                        <div key={fieldIndex}>
                          {field.type === "TEXT" && (
                            <TextField
                              required
                              id="outlined-required"
                              label={field.label}
                              type={field.type}
                            />
                          )}
                          {field.type === "EMAIL" && (
                            <TextField
                              required
                              id="outlined-required"
                              label={field.label}
                              type={field.type}
                            />
                          )}
                          {/* Add more cases for other field types */}
                        </div>
                      </Box>
                    ))}
                </div>
              ))}
          </CustomTabPanel>
        ))}
    </Box>
  );
}

DynamicForm.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      sections: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          fields: PropTypes.arrayOf(
            PropTypes.shape({
              label: PropTypes.string.isRequired,
              type: PropTypes.string.isRequired,
              properties: PropTypes.object,
            })
          ).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default DynamicForm;