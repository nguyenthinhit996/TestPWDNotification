import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
} from "@mui/material";

const steps = [
  {
    title: "In Safari, click the 'share' button",
    image: "/assets/img/ios-install-step1.png",
  },
  {
    title: "Click 'Add to Home Screen'",
    image: "/assets/img/ios-install-step2.png",
  },
  {
    title: "Review settings and click 'Add'",
    image: "/assets/img/ios-install-step3.png",
  },
  {
    title: "Launch app from home screen'",
    image: "/assets/img/ios-install-step4.png",
  },
];

const IOSInstallPWAInstruction = () => {
  return (
    <Box
      sx={{
        p: { xs: "1rem", sm: "2rem" },
      }}
    >
      <Box
        sx={{
          py: { xs: "1rem", sm: "2rem" },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: "1.75rem",
            fontWeight: "700",
            marginBottom: "1rem",
          }}
        >
          How to download Progressive Web App
        </Typography>
        <p>
          For IOS phone, please download Progressive Web App to continue. Thank
          you
        </p>
      </Box>
      <Grid container spacing={2}>
        {steps.map((step, index) => {
          return (
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    Step {index + 1}: {step.title}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height={"400px"}
                  image={step.image}
                  alt={step.title}
                  style={{ objectFit: "contain" }}
                />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default IOSInstallPWAInstruction;
