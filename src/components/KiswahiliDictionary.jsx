import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Grid,
} from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import SearchIcon from '@mui/icons-material/Search';
import DictionaryEntry from './DictionaryEntry';
import kiswahiliData from '../data/kiswahiliData';

function KiswahiliDictionary() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = kiswahiliData.filter(
    (item) =>
      item.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.translations.some((translation) =>
        translation.word.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      <Card sx={{ mb: 4, p: 2, boxShadow: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <TranslateIcon color="primary" sx={{ fontSize: 60 }} />
          </Box>
          <Typography variant="h5" align="center" gutterBottom>
            Kiswahili-English Dictionary
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
            Discover Kiswahili words and their English translations. Search for
            specific terms or browse the dictionary to expand your vocabulary.
          </Typography>

          <TextField
            fullWidth
            label="Search Kiswahili or English"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />

          <Typography variant="body2" sx={{ mb: 2 }}>
            {filteredData.length}{' '}
            {filteredData.length === 1 ? 'result' : 'results'} found
          </Typography>
        </CardContent>
      </Card>

      <Grid container spacing={2}>
        {filteredData.map((entry) => (
          <Grid item xs={12} key={entry.id}>
            <DictionaryEntry entry={entry} />
          </Grid>
        ))}

        {filteredData.length === 0 && (
          <Grid item xs={12}>
            <Card sx={{ p: 3, textAlign: 'center' }}>
              <Typography>
                No results found. Try a different search term.
              </Typography>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default KiswahiliDictionary;
