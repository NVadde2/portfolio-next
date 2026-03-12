import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Contact() {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="static-contain">
      <section className="section top">
        <div className="text-contain">
          <h3>CONTACT</h3>
          <h1>Let’s build something great together</h1>
          <p>
            Want to work together? Send a message and I’ll get back to you as soon as I can.
            You can also reach me via email or LinkedIn.
          </p>
        </div>
      </section>

      <section className="section">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 520,
            width: '100%',
          }}
        >
          <TextField
            label="Name"
            value={formState.name}
            onChange={handleChange('name')}
            required
            fullWidth
          />
          <TextField
            label="Email"
            value={formState.email}
            onChange={handleChange('email')}
            required
            fullWidth
            type="email"
          />
          <TextField
            label="Message"
            value={formState.message}
            onChange={handleChange('message')}
            required
            fullWidth
            multiline
            minRows={4}
          />

          <Button type="submit" variant="contained" sx={{ alignSelf: 'flex-start' }}>
            Send message
          </Button>

          {submitted ? (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Thanks for reaching out!
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                I’ll review your message and reply as soon as possible.
              </Typography>
            </Box>
          ) : null}
        </Box>
      </section>
    </div>
  );
}
