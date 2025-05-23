import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import grammarData from '../data/grammarData';

function Grammar() {
  const [language, setLanguage] = useState('kikuyu');

  const handleTabChange = (event, newValue) => {
    setLanguage(newValue);
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      <Card sx={{ mb: 4, p: 2, boxShadow: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <MenuBookIcon color="primary" sx={{ fontSize: 60 }} />
          </Box>
          <Typography variant="h5" align="center" gutterBottom>
            Basic Grammar
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
            Learn the essential grammar rules for Kikuyu and Kiswahili.
            Understanding grammar will help you form correct sentences and
            communicate more effectively.
          </Typography>
          <Tabs
            value={language}
            onChange={handleTabChange}
            centered
            sx={{ mb: 3 }}
          >
            <Tab label="Kikuyu Grammar" value="kikuyu" />
            <Tab label="Kiswahili Grammar" value="kiswahili" />
          </Tabs>
        </CardContent>
      </Card>

      {grammarData[language].map((section, idx) => (
        <Accordion key={idx} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" fontWeight="bold">
              {section.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {section.summary}
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
              {section.details}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default Grammar;
