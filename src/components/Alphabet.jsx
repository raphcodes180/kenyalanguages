import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import AbcIcon from '@mui/icons-material/Abc';
import alphabetData from '../data/alphabetData';

function Alphabet() {
  const [language, setLanguage] = useState('kikuyu');

  const handleChange = (event, newValue) => {
    setLanguage(newValue);
  };

  const currentAlphabet = alphabetData[language];

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      <Card sx={{ mb: 4, p: 2, boxShadow: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <AbcIcon color="primary" sx={{ fontSize: 60 }} />
          </Box>
          <Typography variant="h5" align="center" gutterBottom>
            Alphabet and Pronunciation
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
            Discover the alphabets of Kikuyu and Kiswahili, and learn how to
            pronounce each letter correctly.
          </Typography>

          <Tabs
            value={language}
            onChange={handleChange}
            centered
            sx={{ mb: 3 }}
          >
            <Tab label="Kikuyu Alphabet" value="kikuyu" />
            <Tab label="Kiswahili Alphabet" value="kiswahili" />
          </Tabs>
        </CardContent>
      </Card>

      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow
              sx={{ backgroundColor: (theme) => theme.palette.primary.light }}
            >
              <TableCell>
                <Typography variant="subtitle1" fontWeight="bold">
                  Letter
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" fontWeight="bold">
                  Pronunciation
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" fontWeight="bold">
                  Example
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" fontWeight="bold">
                  Notes
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentAlphabet.map((item, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:nth-of-type(odd)': {
                    backgroundColor: (theme) => theme.palette.action.hover,
                  },
                }}
              >
                <TableCell>
                  <Typography variant="body1">{item.letter}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{item.pronunciation}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{item.example}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{item.notes}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Card sx={{ p: 2, mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Special Characters in{' '}
            {language === 'kikuyu' ? 'Kikuyu' : 'Kiswahili'}
          </Typography>

          {language === 'kikuyu' ? (
            <>
              <Typography variant="body1" paragraph>
                Kikuyu has several special characters that are marked with
                diacritics:
              </Typography>
              <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
                <li>
                  The tilde (˜) over vowels (ã, ẽ, ĩ, õ, ũ) indicates a nasal
                  sound.
                </li>
                <li>
                  The acute accent (´) over vowels (á, é, í, ó, ú) indicates
                  high tone.
                </li>
                <li>
                  The grave accent (`) over vowels (à, è, ì, ò, ù) indicates low
                  tone.
                </li>
              </Typography>
              <Typography variant="body1" paragraph sx={{ mt: 2 }}>
                Tone is important in Kikuyu as it can change the meaning of
                words that are otherwise spelled the same.
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1" paragraph>
                Kiswahili uses the standard Latin alphabet with no special
                diacritics. However, there are some digraphs (two letters that
                make one sound):
              </Typography>
              <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
                <li>
                  <strong>ch</strong> - as in "chai" (tea), pronounced like "ch"
                  in "church"
                </li>
                <li>
                  <strong>sh</strong> - as in "shule" (school), pronounced like
                  "sh" in "ship"
                </li>
                <li>
                  <strong>dh</strong> - as in "dhambi" (sin), a voiced "th"
                  sound
                </li>
                <li>
                  <strong>th</strong> - as in "thelathini" (thirty), an unvoiced
                  "th" sound
                </li>
                <li>
                  <strong>ng'</strong> - as in "ng'ombe" (cow), a nasal "ng"
                  sound
                </li>
              </Typography>
            </>
          )}
        </CardContent>
      </Card>

      <Card sx={{ p: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Pronunciation Tips
          </Typography>

          <Typography variant="body1" paragraph>
            When learning to pronounce{' '}
            {language === 'kikuyu' ? 'Kikuyu' : 'Kiswahili'}, keep these tips in
            mind:
          </Typography>

          {language === 'kikuyu' ? (
            <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
              <li>Vowels are generally pronounced clearly and distinctly.</li>
              <li>The letter "r" is slightly rolled, similar to Spanish.</li>
              <li>
                Pay attention to the nasal sounds marked with a tilde (˜).
              </li>
              <li>Stress is typically on the second-to-last syllable.</li>
              <li>Tone is important and can change the meaning of words.</li>
            </Typography>
          ) : (
            <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
              <li>Every letter is pronounced - there are no silent letters.</li>
              <li>Vowels are pronounced clearly and consistently.</li>
              <li>Stress is typically on the second-to-last syllable.</li>
              <li>The letter "r" is slightly rolled, similar to Spanish.</li>
              <li>
                Kiswahili is a non-tonal language, unlike many other African
                languages.
              </li>
            </Typography>
          )}

          <Typography variant="body1" sx={{ mt: 2 }}>
            Practice speaking aloud and listen to native speakers whenever
            possible to improve your pronunciation.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Alphabet;
