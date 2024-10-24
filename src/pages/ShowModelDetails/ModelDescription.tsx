import React from "react";
import { Box, Card, Divider, Grid, Typography } from "@mui/material";
import OSAR from "../../components/ModelReport/OSAR";
import MKTypography from "../../components/MKTypography";

// Custom component for displaying a card with a title and description
const DescriptionCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <Card
      sx={ {
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      } }
    >
      { /* Title Section */ }
      <Box
        sx={ {
          textAlign: "center",
        } }
      >
        <Typography variant="h6" gutterBottom sx={ { fontWeight: "bold" } }>
          { title }
        </Typography>
      </Box>

      <Divider sx={ { mb: 2, opacity: 1 } } />

      { /* Description Section */ }
      <MKTypography
        variant="body1"
        sx={ {
          fontSize: "15px",
          textAlign: "justify",
          color: "black",
          maxHeight: "60px", // Restrict max height
          overflowY: "auto", // Enable vertical scrolling
          padding: "0 10px", // Add padding for readability
        } }
      >
        { description }
      </MKTypography>
    </Card>
  );
};

const ModelDescription = ({ description, name }: { description: string, name: string }) => {
  return (
    <Grid container spacing={ 3 }>
      <Grid item xs={ 12 } md={ 8 }>
        <DescriptionCard title="Model Description" description={ description } />
      </Grid>
      <Grid item xs={ 12 } md={ 4 }>
        <OSAR name={ name }/>
      </Grid>
    </Grid>
  );
};

export default ModelDescription;
