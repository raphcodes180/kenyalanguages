import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Box,
  Divider,
} from '@mui/material';
import ImageModal from './ImageModal';

function DictionaryEntry({ entry }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Card sx={{ mb: 2, boxShadow: 2 }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: 1,
          }}
        >
          <Typography variant="h6" component="div">
            {entry.word}
          </Typography>
          <Chip
            label={entry.partOfSpeech}
            size="small"
            color="primary"
            variant="outlined"
          />
        </Box>

        {entry.translations.map((translation, index) => (
          <Typography key={index} variant="subtitle1" sx={{ mb: 1 }}>
            <strong>English:</strong> {translation.word}
            {translation.notes && (
              <Typography variant="body2" color="text.secondary">
                {translation.notes}
              </Typography>
            )}
          </Typography>
        ))}

        <Divider sx={{ my: 1 }} />

        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Pronunciation:</strong> {entry.pronunciation}
        </Typography>

        {entry.exampleSentences && entry.exampleSentences.length > 0 && (
          <Box sx={{ mb: 1 }}>
            <Typography variant="body2">
              <strong>Examples:</strong>
            </Typography>
            {entry.exampleSentences.map((example, index) => (
              <Typography key={index} variant="body2" sx={{ ml: 2 }}>
                • {example.sentence} — <i>{example.translation}</i>
              </Typography>
            ))}
          </Box>
        )}

        {entry.notes && (
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Notes:</strong> {entry.notes}
          </Typography>
        )}

        {entry.tags && entry.tags.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
            {entry.tags.map((tag, index) => (
              <Chip key={index} label={tag} size="small" variant="outlined" />
            ))}
          </Box>
        )}

        {entry.image && (
          <Button
            variant="outlined"
            size="small"
            onClick={handleOpenModal}
            sx={{ mt: 1 }}
          >
            View Image
          </Button>
        )}
      </CardContent>

      {entry.image && (
        <ImageModal
          open={modalOpen}
          handleClose={handleCloseModal}
          imageUrl={entry.image}
        />
      )}
    </Card>
  );
}

export default DictionaryEntry;
