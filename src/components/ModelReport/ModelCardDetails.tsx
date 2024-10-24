import React from "react";
import { Box, Typography, Divider, Grid, Card, Chip, Tooltip } from "@mui/material";
import MKTypography from "../MKTypography";

// Reusable component for model detail entries
const ModelDetail: React.FC<{ label: string; value: string; isLink?: boolean }> = ({ label, value, isLink }) => {
  return (
    <Grid item xs={ 6 } md={ 3 } style={ { display: "flex", paddingTop: "12px" } }>
      <MKTypography
        variant="h6"
        textTransform="capitalize"
        color="text"
        style={ { fontSize: "15px", fontWeight: "normal" } }
      >
        { label }: &nbsp;
      </MKTypography>
      { isLink ? (
        <a href={ value } target="_blank" rel="noopener noreferrer" style={ { textDecoration: 'none', color: 'inherit' } }>
          <MKTypography variant="h6" fontWeight="regular" style={ { fontSize: "15px" } }>
            { label === "Model URL" ? "Model Link" : "Repository" }
          </MKTypography>
        </a>
      ) : (
        <Tooltip title={ value?.length > 40 ? value : '' } arrow>
          <MKTypography variant="h6" fontWeight="regular" style={ { fontSize: "15px" } }>
            { value?.length > 40 ? `${value.substring(0, 40)}...` : value }
          </MKTypography>
        </Tooltip>
      ) }
    </Grid>
  );
};

export default function ModelCardDetails({ model }: any) {
  const selectedModel = model.length > 0 ? model[0] : {};

  return (
    <Card key={ `TOPCARD12` } sx={ { mb: 4, p: 3 } }>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="50%"
        textAlign="center"
      >
        <Typography variant="h6" gutterBottom>
          Model Card
        </Typography>
      </Box>
      <Divider sx={ { mb: 2, opacity: 1 } } />
      <Grid key={ `TOPGRID1` } container spacing={ 1 } pl={ 4 }>
        { [
          { label: "Name", value: selectedModel.name },
          { label: "Organization", value: selectedModel.organization },
          { label: "Created Date", value: new Date(selectedModel.created_date).toLocaleDateString() },
          { label: "Model URL", value: selectedModel.model_url, isLink: true },
          { label: "Repository URL", value: selectedModel.url, isLink: true },
          { label: "Modality", value: selectedModel.modality },
          { label: "Size", value: selectedModel.size },
          { label: "License", value: selectedModel.license }, // Displaying License Before Dependencies
        ].map((detail, idx) => (
          <ModelDetail key={ `GRID${idx}` } { ...detail } />
        )) }
        { /* Dependencies moved to next line */ }
        <Grid key={ `GRID_DEPENDENCIES` } item xs={ 12 } style={ { display: 'flex', alignItems: 'center', paddingTop: '12px', flexWrap: 'wrap' } }>
          <MKTypography
            variant="h6"
            textTransform="capitalize"
            color="text"
            style={ { fontSize: '15px', fontWeight: 'normal', marginRight: '8px' } }
          >
            Dependencies:
          </MKTypography>
          { selectedModel.dependencies?.map((dep: string, idx: number) => (
            <Tooltip key={ idx } title={ dep.length > 20 ? dep : '' } arrow>
              <Chip
                label={ dep.length > 20 ? `${dep.substring(0, 20)}...` : dep }
                variant="outlined"
                size="small"
                sx={ { marginRight: '8px' } }
              />
            </Tooltip>
          )) }
        </Grid>
      </Grid>
    </Card>
  );
}
