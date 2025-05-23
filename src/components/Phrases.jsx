import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import phrasesData from '../data/phrasesData';

function Phrases() {
  const [language, setLanguage] = useState('kikuyu');
  const [expanded, setExpanded] = useState(false);

  const handleChange = (event, newValue) => {
    setLanguage(newValue);
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const currentPhrases =
    language === 'kikuyu' ? phrasesData.kikuyu : phrasesData.kiswahili;

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      <Card sx={{ mb: 4, p: 2, boxShadow: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <ChatIcon color="primary" sx={{ fontSize: 60 }} />
          </Box>
          <Typography variant="h5" align="center" gutterBottom>
            Common Phrases
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
            Learn useful phrases in Kikuyu and Kiswahili for everyday
            situations. Browse phrases by category and practice your language
            skills.
          </Typography>

          <Tabs
            value={language}
            onChange={handleChange}
            centered
            sx={{ mb: 3 }}
          >
            <Tab label="Kikuyu Phrases" value="kikuyu" />
            <Tab label="Kiswahili Phrases" value="kiswahili" />
          </Tabs>
        </CardContent>
      </Card>

      {currentPhrases.map((category) => (
        <Accordion
          key={category.category}
          expanded={expanded === category.category}
          onChange={handleAccordionChange(category.category)}
          sx={{ mb: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${category.category}-content`}
            id={`${category.category}-header`}
          >
            <Typography variant="h6">{category.category}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              {category.phrases.map((phrase) => (
                <Grid item xs={12} key={phrase.id}>
                  <Card variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      {phrase.phrase}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      {phrase.translation}
                    </Typography>
                    {phrase.notes && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        <strong>Notes:</strong> {phrase.notes}
                      </Typography>
                    )}
                    {phrase.exampleUsage && (
                      <Typography variant="body2" gutterBottom>
                        <strong>Example:</strong> {phrase.exampleUsage}
                      </Typography>
                    )}
                  </Card>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default Phrases;
